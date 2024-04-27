import { Collection } from './collection';
import { CollectionOptions, ICollection, ICollectionManager, IRepository, MergeOptions } from './types';

export class CollectionManager implements ICollectionManager {
  protected collections = new Map<string, ICollection>();
  protected repositories = new Map<string, IRepository>();
  protected models = new Map<string, any>();

  constructor(options = {}) {}

  /* istanbul ignore next -- @preserve */
  getRegisteredFieldType(type) {}

  /* istanbul ignore next -- @preserve */
  getRegisteredFieldInterface(key: string) {}

  /* istanbul ignore next -- @preserve */
  getRegisteredModel(key: string) {
    return this.models.get(key);
  }

  getRegisteredRepository(key: any) {
    if (typeof key !== 'string') {
      return key;
    }
    return this.repositories.get(key);
  }

  /* istanbul ignore next -- @preserve */
  registerFieldTypes() {}

  /* istanbul ignore next -- @preserve */
  registerFieldInterfaces() {}

  /* istanbul ignore next -- @preserve */
  registerCollectionTemplates() {}

  registerModels(models: Record<string, any>) {
    Object.keys(models).forEach((key) => {
      this.models.set(key, models[key]);
    });
  }

  registerRepositories(repositories: Record<string, any>) {
    Object.keys(repositories).forEach((key) => {
      this.repositories.set(key, repositories[key]);
    });
  }

  defineCollection(options: CollectionOptions): ICollection {
    const collection = this.newCollection(options);
    this.collections.set(options.name, collection);
    return collection;
  }

  extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ICollection {
    const collection = this.getCollection(collectionOptions.name);
    collection.updateOptions(collectionOptions, mergeOptions);
    return collection;
  }

  hasCollection(name: string) {
    return !!this.getCollection(name);
  }

  getCollection(name: string) {
    return this.collections.get(name);
  }

  getCollections(): Array<ICollection> {
    return [...this.collections.values()];
  }

  getRepository(name: string, sourceId?: string | number): IRepository {
    const collection = this.getCollection(name);
    return collection.repository;
  }

  async sync() {}

  protected newCollection(options) {
    return new Collection(options, this);
  }
}
