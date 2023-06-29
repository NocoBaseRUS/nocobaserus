import { SchemaInitializerItemOptions, useCollectionDataSource, useCollectionManager, useCompile } from '@nocobase/client';

import { appends, collection, values } from '../schemas/collection';
import CollectionFieldset from '../components/CollectionFieldset';
import { NAMESPACE } from '../locale';
import { CollectionBlockInitializer } from '../components/CollectionBlockInitializer';
import { getCollectionFieldOptions } from '../variable';
import { FieldsSelect } from '../components/FieldsSelect';

export default {
  title: `{{t("Create record", { ns: "${NAMESPACE}" })}}`,
  type: 'create',
  group: 'collection',
  description: `{{t("Add new record to a collection. You can use variables from upstream nodes to assign values to fields.", { ns: "${NAMESPACE}" })}}`,
  fieldset: {
    collection,
    // multiple: {
    //   type: 'boolean',
    //   title: '多条数据',
    //   name: 'multiple',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Checkbox',
    //   'x-component-props': {
    //     disabled: true
    //   }
    // },
    params: {
      type: 'object',
      properties: {
        values,
        appends,
      },
    },
  },
  view: {},
  scope: {
    useCollectionDataSource,
  },
  components: {
    CollectionFieldset,
    FieldsSelect,
  },
  useVariables({ config }, options) {
    const compile = useCompile();
    const { getCollectionFields } = useCollectionManager();
    const depth = config?.params?.appends?.length
      ? config?.params?.appends.reduce((max, item) => Math.max(max, item.split('.').length), 1) + 1
      : 1;
    const result = getCollectionFieldOptions({
      collection: config?.collection,
      ...options,
      depth: options?.depth ?? depth,
      compile,
      getCollectionFields,
    });

    return result?.length ? result : null;
  },
  useInitializers(node): SchemaInitializerItemOptions | null {
    if (!node.config.collection) {
      return null;
    }

    return {
      type: 'item',
      title: node.title ?? `#${node.id}`,
      component: CollectionBlockInitializer,
      collection: node.config.collection,
      dataSource: `{{$jobsMapByNodeId.${node.id}}}`,
    };
  },
  initializers: {},
};
