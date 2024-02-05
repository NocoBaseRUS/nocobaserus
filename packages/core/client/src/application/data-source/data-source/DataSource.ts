import type { CollectionOptionsV2 } from '../collection';
import type { DataSourceManagerV2 } from './DataSourceManager';

import { CollectionManagerV2 } from '../collection';

type LoadCallback = (collections: CollectionOptionsV2[]) => void;

export interface DataSourceOptionsV2 {
  key: string;
  displayName: string;
  collections?: CollectionOptionsV2[];
  errorMessage?: string;
  status?: 'loaded' | 'failed' | 'loading';
}

export type DataSourceFactory = new (
  options: DataSourceOptionsV2,
  dataSourceManager: DataSourceManagerV2,
) => DataSourceV2;

export abstract class DataSourceV2 {
  collectionManager: CollectionManagerV2;
  reloadCallback?: LoadCallback;

  constructor(
    protected options: DataSourceOptionsV2,
    public dataSourceManager: DataSourceManagerV2,
  ) {
    this.collectionManager = new CollectionManagerV2(options.collections, this);
  }

  get app() {
    return this.dataSourceManager.app;
  }

  get key() {
    return this.options.key;
  }

  get displayName() {
    return this.options.displayName;
  }

  get status() {
    return this.options.status;
  }

  get errorMessage() {
    return this.options.errorMessage;
  }

  get collections() {
    return this.options.collections || [];
  }

  set collections(collections: CollectionOptionsV2[]) {
    this.options.collections = collections;
    this.addCollections();
  }

  getOptions() {
    return this.options;
  }

  setOptions(options: DataSourceOptionsV2) {
    this.options = options;
  }

  getOption<Key extends keyof DataSourceOptionsV2>(key: Key): DataSourceOptionsV2[Key] {
    return this.options[key];
  }

  addCollections() {
    this.collectionManager.addCollections(this.collections);
    this.reloadCallback && this.reloadCallback(this.collections);
  }

  setReloadCallback(callback: LoadCallback) {
    this.reloadCallback = callback;
  }

  abstract getCollections(): Promise<CollectionOptionsV2[]> | CollectionOptionsV2[];

  // abstract load(callback?: LoadCallback): void | Promise<void>;

  // abstract reload(callback?: LoadCallback): void | Promise<void>;
  async reload() {
    this.collections = await this.getCollections();
    return this.collections;
  }
}

export class LocalDataSource extends DataSourceV2 {
  getCollections() {
    return this.collections;
  }
}
