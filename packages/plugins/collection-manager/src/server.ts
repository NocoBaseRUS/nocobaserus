import path from 'path';
import { UniqueConstraintError } from 'sequelize';

import PluginErrorHandler from '@nocobase/plugin-error-handler';
import { Plugin } from '@nocobase/server';
import { Mutex } from 'async-mutex';

import { CollectionRepository } from '.';
import {
  afterCreateForForeignKeyField,
  afterCreateForReverseField,
  beforeCreateForReverseField,
  beforeDestroyForeignKey,
  beforeInitOptions,
} from './hooks';

import { InheritedCollection } from '@nocobase/database';
import lodash, { castArray } from 'lodash';
import * as process from 'process';
import { CollectionModel, FieldModel } from './models';
import viewResourcer from './resourcers/views';
import collectionActions from './resourcers/collections';

import { beforeCreateForViewCollection } from './hooks/beforeCreateForViewCollection';

export class CollectionManagerPlugin extends Plugin {
  public schema: string;

  async beforeLoad() {
    if (process.env.COLLECTION_MANAGER_SCHEMA) {
      this.schema = process.env.COLLECTION_MANAGER_SCHEMA;
    }

    this.app.db.registerModels({
      CollectionModel,
      FieldModel,
    });

    this.db.addMigrations({
      namespace: 'collection-manager',
      directory: path.resolve(__dirname, './migrations'),
      context: {
        plugin: this,
      },
    });

    this.app.db.registerRepositories({
      CollectionRepository,
    });

    this.app.acl.registerSnippet({
      name: `pm.${this.name}.collections`,
      actions: ['collections:*', 'collections.fields:*', 'dbViews:*'],
    });

    this.app.db.on('collections.beforeCreate', async (model) => {
      if (this.app.db.inDialect('postgres') && this.schema && model.get('from') != 'db2cm') {
        model.set('schema', this.schema);
      }
    });

    this.app.db.on('collections.beforeCreate', beforeCreateForViewCollection(this.db));

    this.app.db.on(
      'collections.afterCreateWithAssociations',
      async (model: CollectionModel, { context, transaction }) => {
        if (context) {
          await model.migrate({
            transaction,
          });
        }
      },
    );

    this.app.db.on('collections.beforeDestroy', async (model: CollectionModel, options) => {
      await model.remove(options);
    });

    // 要在 beforeInitOptions 之前处理
    this.app.db.on('fields.beforeCreate', beforeCreateForReverseField(this.app.db));

    this.app.db.on('fields.beforeCreate', async (model, options) => {
      const collectionName = model.get('collectionName');
      const collection = this.app.db.getCollection(collectionName);

      if (!collection) {
        return;
      }

      if (collection.isInherited() && (<InheritedCollection>collection).parentFields().has(model.get('name'))) {
        model.set('overriding', true);
      }
    });

    this.app.db.on('fields.beforeCreate', async (model, options) => {
      const type = model.get('type');
      const fn = beforeInitOptions[type];
      if (fn) {
        await fn(model, { database: this.app.db });
      }
    });

    this.app.db.on('fields.afterCreate', afterCreateForReverseField(this.app.db));

    this.app.db.on('fields.afterCreate', async (model: FieldModel, { context, transaction }) => {
      if (context) {
        await model.migrate({
          isNew: true,
          transaction,
        });
      }
    });

    // after migrate
    this.app.db.on('fields.afterCreate', afterCreateForForeignKeyField(this.app.db));

    this.app.db.on('fields.beforeUpdate', async (model, options) => {
      const newValue = options.values;
      if (
        model.get('reverseKey') &&
        lodash.get(newValue, 'reverseField') &&
        !lodash.get(newValue, 'reverseField.key')
      ) {
        const field = await this.app.db
          .getModel('fields')
          .findByPk(model.get('reverseKey'), { transaction: options.transaction });
        if (field) {
          throw new Error('cant update field without a reverseField key');
        }
      }
    });

    this.app.db.on('fields.afterUpdate', async (model: FieldModel, { context, transaction }) => {
      const prevOptions = model.previous('options');
      const currentOptions = model.get('options');

      if (context) {
        const prev = prevOptions['unique'];
        const next = currentOptions['unique'];

        if (Boolean(prev) !== Boolean(next)) {
          await model.syncUniqueIndex({ transaction });
        }
      }

      const prevDefaultValue = prevOptions['defaultValue'];
      const currentDefaultValue = currentOptions['defaultValue'];

      if (prevDefaultValue != currentDefaultValue) {
        await model.syncDefaultValue({ transaction, defaultValue: currentDefaultValue });
      }

      const prevOnDelete = prevOptions['onDelete'];
      const currentOnDelete = currentOptions['onDelete'];

      if (prevOnDelete != currentOnDelete) {
        await model.syncReferenceCheckOption({ transaction });
      }
    });

    this.app.db.on('fields.afterSaveWithAssociations', async (model: FieldModel, { context, transaction }) => {
      if (context) {
        await model.load({ transaction });
      }
    });

    // before field remove
    this.app.db.on('fields.beforeDestroy', beforeDestroyForeignKey(this.app.db));

    const mutex = new Mutex();
    this.app.db.on('fields.beforeDestroy', async (model: FieldModel, options) => {
      await mutex.runExclusive(async () => {
        await model.remove(options);
      });
    });

    this.app.db.on('fields.afterDestroy', async (model: FieldModel, options) => {
      const { transaction } = options;
      const collectionName = model.get('collectionName');
      const childCollections = this.db.inheritanceMap.getChildren(collectionName);

      const childShouldRemoveField = Array.from(childCollections).filter((item) => {
        const parents = Array.from(this.db.inheritanceMap.getParents(item))
          .map((parent) => {
            const collection = this.db.getCollection(parent);
            const field = collection.getField(model.get('name'));
            return field;
          })
          .filter(Boolean);

        return parents.length == 0;
      });

      await this.db.getCollection('fields').repository.destroy({
        filter: {
          name: model.get('name'),
          collectionName: {
            $in: childShouldRemoveField,
          },
          options: {
            overriding: true,
          },
        },
        transaction,
      });
    });

    this.app.on('afterLoad', async (app, options) => {
      if (options?.method === 'install') {
        return;
      }
      const exists = await this.app.db.collectionExistsInDb('collections');
      if (exists) {
        try {
          await this.app.db.getRepository<CollectionRepository>('collections').load();
        } catch (error) {
          this.app.logger.warn(error);
          await this.app.db.sync();

          try {
            await this.app.db.getRepository<CollectionRepository>('collections').load();
          } catch (error) {
            throw error;
          }
        }
      }
    });

    this.app.resourcer.use(async (ctx, next) => {
      const { resourceName, actionName } = ctx.action;
      if (resourceName === 'collections.fields' && actionName === 'update') {
        const { updateAssociationValues = [] } = ctx.action.params;
        updateAssociationValues.push('uiSchema');
        ctx.action.mergeParams({
          updateAssociationValues,
        });
      }
      await next();
    });

    this.app.acl.allow('collections', 'list', 'loggedIn');
  }

  async load() {
    await this.importCollections(path.resolve(__dirname, './collections'));

    const errorHandlerPlugin = <PluginErrorHandler>this.app.getPlugin('error-handler');
    errorHandlerPlugin.errorHandler.register(
      (err) => {
        return err instanceof UniqueConstraintError;
      },
      (err, ctx) => {
        return ctx.throw(400, ctx.t(`The value of ${Object.keys(err.fields)} field duplicated`));
      },
    );

    this.app.resourcer.use(async (ctx, next) => {
      if (ctx.action.resourceName === 'collections.fields' && ['create', 'update'].includes(ctx.action.actionName)) {
        ctx.action.mergeParams({
          updateAssociationValues: ['reverseField'],
        });
      }
      await next();
    });

    this.app.resource(viewResourcer);
    this.app.actions(collectionActions);

    const handleFieldSource = (fields) => {
      for (const field of castArray(fields)) {
        if (field.get('source')) {
          const [collectionSource, fieldSource] = field.get('source').split('.');
          const collectionField = this.app.db.getCollection(collectionSource).getField(fieldSource);
          field.set('interface', collectionField.options.interface);
          field.set('uiSchema', collectionField.options.uiSchema);
        }
      }
    };

    this.app.resourcer.use(async (ctx, next) => {
      await next();

      // handle collections:list
      if (
        ctx.action.resourceName === 'collections' &&
        ctx.action.actionName == 'list' &&
        ctx.action.params?.paginate == 'false'
      ) {
        for (const collection of ctx.body) {
          if (collection.get('view')) {
            const fields = collection.fields;
            handleFieldSource(fields);
          }
        }
      }

      //handle collections:fields:list
      if (ctx.action.resourceName == 'collections.fields' && ctx.action.actionName == 'list') {
        handleFieldSource(ctx.action.params?.paginate == 'false' ? ctx.body : ctx.body.rows);
      }

      if (ctx.action.resourceName == 'collections.fields' && ctx.action.actionName == 'get') {
        handleFieldSource(ctx.body);
      }
    });

    this.app.db.extendCollection({
      name: 'collectionCategory',
      namespace: 'collection-manager',
      duplicator: 'required',
    });
  }
}

export default CollectionManagerPlugin;
