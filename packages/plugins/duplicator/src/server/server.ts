import { Plugin } from '@nocobase/server';
import { CollectionGroupManager } from './collection-group-manager';
import addDumpCommand from './commands/dump';
import addRestoreCommand from './commands/restore';

import zhCN from './locale/zh-CN';

export default class Duplicator extends Plugin {
  beforeLoad() {
    this.app.i18n.addResources('zh-CN', 'duplicator', zhCN);

    addDumpCommand(this.app);
    addRestoreCommand(this.app);
  }

  async load() {
    this.app.resourcer.define({
      name: 'duplicator',
      actions: {
        collectionGroups: async (ctx, next) => {
          ctx.withoutDataWrapping = true;
          ctx.body = CollectionGroupManager.collectionGroups;
          await next();
        },
        getDict: async (ctx, next) => {
          ctx.withoutDataWrapping = true;
          let collectionNames = await this.db.getRepository('collections').find();
          collectionNames = collectionNames.map((item) => item.get('name'));
          const collections: any[] = [];
          for (const [name, collection] of this.db.collections) {
            const columns: any[] = [];
            for (const key in collection.model.rawAttributes) {
              if (Object.prototype.hasOwnProperty.call(collection.model.rawAttributes, key)) {
                const attribute = collection.model.rawAttributes[key];
                columns.push({
                  realName: attribute.field,
                  name: key,
                });
              }
            }
            const item = {
              name,
              title: collection.options.title,
              namespace: collection.options.namespace,
              duplicator: collection.options.duplicator,
              // columns,
            };
            if (!item.namespace && collectionNames.includes(name)) {
              item.namespace = 'collection-manager';
              if (!item.duplicator) {
                item.duplicator = 'optional';
              }
            }
            collections.push(item);
          }
          ctx.body = collections;
          await next();
        },
      },
    });

    this.app.acl.allow('duplicator', 'getDict');
  }
}
