import { Plugin } from '@nocobase/server';
import { resolve } from 'path';
import { action as uploadAction, middleware as uploadMiddleware } from './actions/upload';
import { STORAGE_TYPE_LOCAL } from './constants';
import { getStorageConfig } from './storages';

export default class PluginFileManager extends Plugin {
  storageType() {
    return process.env.DEFAULT_STORAGE_TYPE;
  }

  async install() {
    const defaultStorageConfig = getStorageConfig(this.storageType());

    if (defaultStorageConfig) {
      const Storage = this.db.getCollection('storages');
      if (
        await Storage.repository.findOne({
          filter: {
            name: defaultStorageConfig.defaults().name,
          },
        })
      ) {
        return;
      }
      await Storage.repository.create({
        values: {
          ...defaultStorageConfig.defaults(),
          type: this.storageType(),
          default: true,
        },
      });
    }
  }

  async load() {
    await this.importCollections(resolve(__dirname, './collections'));

    this.app.acl.registerSnippet({
      name: `pm.${this.name}.storages`,
      actions: ['storages:*'],
    });

    this.app.acl.allow('attachments', 'upload', 'loggedIn');

    // 暂时中间件只能通过 use 加进来
    this.app.resourcer.use(uploadMiddleware);
    this.app.resourcer.registerActionHandler('upload', uploadAction);

    if (process.env.APP_ENV !== 'production') {
      await getStorageConfig(STORAGE_TYPE_LOCAL).middleware(this.app);
    }

    const defaultStorageName = getStorageConfig(this.storageType()).defaults().name;

    this.app.acl.addFixedParams('storages', 'destroy', () => {
      return {
        filter: { 'name.$ne': defaultStorageName },
      };
    });

    const ownMerger = () => {
      return {
        filter: {
          createdById: '{{ctx.state.currentUser.id}}',
        },
      };
    };

    this.app.acl.addFixedParams('attachments', 'update', ownMerger);
    this.app.acl.addFixedParams('attachments', 'create', ownMerger);
    this.app.acl.addFixedParams('attachments', 'destroy', ownMerger);
  }
}
