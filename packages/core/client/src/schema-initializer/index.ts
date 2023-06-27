export * from './buttons';
export * from './items';
export * from './SchemaInitializer';
export * from './SchemaInitializerProvider';
export * from './types';
export {
  createFilterFormBlockSchema,
  createFormBlockSchema,
  createTableBlockSchema,
  gridRowColWrap,
  itemsMerge,
  useAssociatedTableColumnInitializerFields,
  useInheritsTableColumnInitializerFields,
  useRecordCollectionDataSourceItems,
  useTableColumnInitializerFields,
} from './utils';

import { Plugin } from '../application-v2/Plugin';
import { SchemaInitializerProvider } from './SchemaInitializerProvider';

export class SchemaInitializerPlugin<SchemaInitializerProviderProps> extends Plugin {
  static pluginName = 'schema-initializer';

  async load() {
    this.app.use<SchemaInitializerProviderProps>(SchemaInitializerProvider, this.options?.config);
  }
}
