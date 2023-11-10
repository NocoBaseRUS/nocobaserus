import Database, { Collection, Repository } from '@nocobase/database';
import { CollectionRepository } from '@nocobase/plugin-collection-manager';
import { Plugin } from '@nocobase/server';
import { merge, uid } from '@nocobase/utils';
import _ from 'lodash';
import collectionTemplates from './collection-templates';
import * as fieldInterfaces from './field-interfaces';
import { mockAttachment } from './field-interfaces';

export class PluginMockCollectionsServer extends Plugin {
  async load() {
    const templates = collectionTemplates;

    const defaultFields = {
      id: () => ({
        name: 'id',
        type: 'bigInt',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        uiSchema: { type: 'number', title: '{{t("ID")}}', 'x-component': 'InputNumber', 'x-read-pretty': true },
        interface: 'id',
      }),
      createdAt: () => ({
        name: 'createdAt',
        interface: 'createdAt',
        type: 'date',
        field: 'createdAt',
        uiSchema: {
          type: 'datetime',
          title: '{{t("Created at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      }),
      createdBy: () => ({
        name: 'createdBy',
        interface: 'createdBy',
        type: 'belongsTo',
        target: 'users',
        foreignKey: 'createdById',
        uiSchema: {
          type: 'object',
          title: '{{t("Created by")}}',
          'x-component': 'AssociationField',
          'x-component-props': { fieldNames: { value: 'id', label: 'nickname' } },
          'x-read-pretty': true,
        },
      }),
      updatedAt: () => ({
        type: 'date',
        field: 'updatedAt',
        name: 'updatedAt',
        interface: 'updatedAt',
        uiSchema: {
          type: 'string',
          title: '{{t("Last updated at")}}',
          'x-component': 'DatePicker',
          'x-component-props': {},
          'x-read-pretty': true,
        },
      }),
      updatedBy: () => ({
        type: 'belongsTo',
        target: 'users',
        foreignKey: 'updatedById',
        name: 'updatedBy',
        interface: 'updatedBy',
        uiSchema: {
          type: 'object',
          title: '{{t("Last updated by")}}',
          'x-component': 'AssociationField',
          'x-component-props': { fieldNames: { value: 'id', label: 'nickname' } },
          'x-read-pretty': true,
        },
      }),
    };

    const mockCollection = (values) => {
      if (values.autoCreate || values.view) {
        if (!values.key) {
          values.key = uid();
        }
        if (Array.isArray(values.fields)) {
          values.fields = values.fields.map((f) => {
            if (!f.key) {
              f.key = uid();
            }
            return f;
          });
        }
        return values;
      }
      const defaults = {
        logging: true,
        autoGenId: true,
        createdBy: true,
        updatedBy: true,
        createdAt: true,
        updatedAt: true,
        sortable: true,
        template: 'general',
        view: false,
        sort: 1,
        name: `t_${uid()}`,
        ...values,
      };
      defaults.key = uid();
      if (!defaults.title) {
        defaults.title = defaults.name;
      }
      if (!defaults.fields?.length) {
        defaults.fields = [];
      }
      const fieldNames = defaults.fields.map((f) => f.name);
      const fn = templates[defaults.template] || templates.general;
      const { fields = [], ...others } = fn(defaults);
      Object.assign(defaults, others);
      for (const field of fields) {
        if (!fieldNames.includes(field.name)) {
          defaults.fields.push(field);
        }
      }
      if (['general', 'file', 'tree', 'calendar', 'expression'].includes(defaults.template)) {
        if (defaults.autoGenId && !fieldNames.includes('id')) {
          defaults.fields.push(defaultFields.id());
        }
        if (defaults.createdAt && !fieldNames.includes('createdAt')) {
          defaults.fields.push(defaultFields.createdAt());
        }
        if (defaults.updatedAt && !fieldNames.includes('updatedAt')) {
          defaults.fields.push(defaultFields.updatedAt());
        }
        if (defaults.createdBy && !fieldNames.includes('createdBy')) {
          defaults.fields.push(defaultFields.createdBy());
        }
        if (defaults.updatedBy && !fieldNames.includes('updatedBy')) {
          defaults.fields.push(defaultFields.updatedBy());
        }
        const foreignKeyFields = [];
        defaults.fields = defaults.fields.map((field) => {
          field.collectionName = defaults.name;
          const f = mockCollectionField(field);
          if (f.foreignKeyFields) {
            foreignKeyFields.push(...f.foreignKeyFields);
          }
          if (f.reverseField) {
            foreignKeyFields.push(f.reverseField);
          }
          if (f.throughCollection) {
            defaults['throughCollection'] = f.throughCollection;
          }
          f.collectionName = defaults.name;
          return _.omit(f, ['reverseField', 'throughCollection', 'foreignKeyFields']);
        });
        defaults.fields.push(...foreignKeyFields);
      }
      return defaults;
    };

    const mockCollectionField = (opts) => {
      let options = opts;
      options.sort = 1;
      if (options.interface) {
        const fn = fieldInterfaces[options.interface];
        if (fn) {
          const defaultValue = fn.options(options);
          options = merge(defaultValue, options);
        }
      }
      if (!options.key) {
        options.key = uid();
      }
      if (!options.name) {
        options.name = `f_${uid()}`;
      }
      if (options.title && options.uiSchema) {
        options.uiSchema.title = options.title;
      }
      if (options.uiSchema && !options.uiSchema.title) {
        options.uiSchema.title = options.name;
      }
      return options;
    };

    this.app.resourcer.registerActions({
      mock: async (ctx, next) => {
        const { resourceName } = ctx.action;
        const { values, count = 10 } = ctx.action.params;
        const mockCollectionData = async (collectionName, count = 1, skipAssoc = false) => {
          const collection = ctx.db.getCollection(collectionName) as Collection;
          const items = await Promise.all(
            _.range(count).map(async (i) => {
              if (collection.options.template === 'file') {
                return mockAttachment();
              }
              const values = {};
              if (collection.options.sortable) {
                values['sort'] = i + 1;
              }
              for (const field of collection.fields.values()) {
                if (!field.options.interface) {
                  continue;
                }
                if (skipAssoc && ['m2o', 'm2m', 'o2m', 'obo', 'oho'].includes(field.options.interface)) {
                  continue;
                }
                const fn = fieldInterfaces[field.options.interface];
                if (fn?.mock) {
                  values[field.name] = await fn.mock(field.options, { mockCollectionData });
                }
              }
              return values;
            }),
          );
          return items;
        };
        const repository = ctx.db.getRepository(resourceName);
        const data = await mockCollectionData(resourceName, count);
        // ctx.body = data;
        const records = await repository.create({
          values: data.map((item) => {
            return { ...item, ...values };
          }),
        });
        ctx.body = count == 1 ? records[0] : records;
        await next();
      },
      'collections:mock': async (ctx, next) => {
        const { values } = ctx.action.params;
        const items = Array.isArray(values) ? values : [values || {}];
        const collections = [];
        const collectionFields = [];
        for (const item of items) {
          const { fields = [], throughCollection, ...opts } = mockCollection(item);
          collections.push(opts);
          if (throughCollection) {
            collections.push(throughCollection);
          }
          collectionFields.push(...fields);
        }
        // ctx.body = {
        //   collections,
        //   collectionFields,
        // };
        // await next();
        // return;
        const db = ctx.db as Database;
        const collectionsRepository = db.getRepository('collections') as CollectionRepository;
        const fieldsRepository = db.getRepository('fields') as Repository;
        await db.sequelize.transaction(async (transaction) => {
          for (const collection of collections) {
            try {
              await collectionsRepository.firstOrCreate({
                values: collection,
                filterKeys: ['name'],
                hooks: false,
                transaction,
              });
            } catch (error) {
              this.app.log.error(error.message, { collection });
              throw error;
            }
          }
          for (const collectionField of collectionFields) {
            try {
              await fieldsRepository.firstOrCreate({
                values: collectionField,
                filterKeys: ['name', 'collectionName'],
                hooks: false,
                transaction,
              });
            } catch (error) {
              this.app.log.error(error.message, { collectionField });
              throw error;
            }
          }
        });

        await collectionsRepository.load();
        await db.sync();
        const records = await collectionsRepository.find({
          filter: {
            name: collections.map((c) => c.name),
          },
          appends: ['fields'],
        });
        ctx.body = Array.isArray(values) ? records : records[0];
        await next();
      },
    });
  }
}

export default PluginMockCollectionsServer;
