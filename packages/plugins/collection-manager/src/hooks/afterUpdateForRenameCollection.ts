import { Database } from '@nocobase/database';
import { CollectionModel } from '../models';
import { CollectionsGraph, inflection } from '@nocobase/utils';
import lodash from 'lodash';

export function afterUpdateForRenameCollection(db: Database) {
  return async (model: CollectionModel, { context, transaction }) => {
    if (context) {
      const prevName = model.previous('name');
      const currentName = model.get('name');

      if (prevName == currentName) {
        return;
      }

      const prevCollection = db.getCollection(prevName);
      const prevCollectionTableName = prevCollection.getTableNameWithSchema();

      const updateForeignKey = (foreignKey) => {
        return foreignKey.replace(
          new RegExp(`^${inflection.singularize(prevName)}`),
          inflection.singularize(currentName),
        );
      };

      const collectionFields = await db.getRepository('fields').find({
        filter: {
          collectionName: prevName,
        },
        transaction,
      });

      for (const field of collectionFields) {
        const options = lodash.cloneDeep(field.get('options'));

        if (['hasMany', 'hasOne'].includes(field.get('type')) && options.foreignKey) {
          const oldForeignKey = options.foreignKey;
          options.foreignKey = updateForeignKey(oldForeignKey);

          if (oldForeignKey !== options.foreignKey) {
            // rename column
            const target = db.getCollection(options.target);
            const targetTableName = target.getTableNameWithSchema();

            await db.sequelize.getQueryInterface().renameColumn(targetTableName, oldForeignKey, options.foreignKey, {
              transaction,
            });
          }
        }

        await field.update(
          {
            options,
            collectionName: currentName,
          },
          {
            hooks: false,
            raw: true,
            transaction,
          },
        );
      }

      const associationFields = await db.getRepository('fields').find({
        filter: {
          'options.target': prevName,
        },
        transaction,
      });

      for (const associationField of associationFields) {
        const newOptions = {
          ...associationField.get('options'),
          target: currentName,
        };

        if (newOptions.foreignKey) {
          newOptions.foreignKey = updateForeignKey(newOptions.foreignKey);
        }

        const updateValues = {
          options: newOptions,
          name: (() => {
            const name = associationField.get('name');

            if (associationField.get('type') == 'belongsTo' || associationField.get('type') == 'hasOne') {
              return name.replace(
                new RegExp(`^${inflection.singularize(prevName)}`),
                inflection.singularize(currentName),
              );
            }

            return name.replace(new RegExp(`^${prevName}`), currentName);
          })(),
        };

        await associationField.update(updateValues, {
          transaction,
          hooks: false,
          raw: true,
        });
      }

      // reload collections that depend on this collection
      const relatedCollections = CollectionsGraph.preOrder({
        collections: [...db.collections.values()].map((collection) => {
          return {
            name: collection.name,
            fields: [...collection.fields.values()],
            inherits: collection.options.inherits,
          };
        }),

        node: prevName,
        direction: 'reverse',
      });

      const relatedCollectionModels = await db.getRepository('collections').find({
        filter: {
          name: relatedCollections,
        },
        transaction,
      });

      for (const relatedCollectionModel of relatedCollectionModels) {
        await relatedCollectionModel.load({
          transaction,
          replaceCollection: true,
        });
      }

      // update association models
      await model.migrate({
        transaction,
        replaceCollection: prevName,
        renameTable: {
          from: prevCollectionTableName,
        },
      });
    }
  };
}
