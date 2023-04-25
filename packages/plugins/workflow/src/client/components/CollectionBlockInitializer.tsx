import React from 'react';

import { SchemaInitializer, useCollectionManager } from '@nocobase/client';

export function CollectionBlockInitializer({ insert, collection, dataSource, ...props }) {
  const { getCollection } = useCollectionManager();
  const resovledCollection = getCollection(collection);
  return (
    <SchemaInitializer.Item
      {...props}
      onClick={() => {
        insert({
          type: 'void',
          name: resovledCollection.name,
          title: resovledCollection.title,
          'x-decorator': 'CollectionProvider',
          'x-decorator-props': {
            collection,
          },
          'x-component': 'CardItem',
          'x-component-props': {
            // title: props.title
          },
          'x-designer': 'SimpleDesigner',
          'x-designer-props': {
            type: 'record',
          },
          properties: {
            grid: {
              type: 'void',
              'x-decorator': 'Form',
              'x-decorator-props': {
                useValues: '{{ useFlowRecordFromBlock }}',
              },
              'x-component': 'Grid',
              'x-initializer': 'CollectionFieldInitializers',
              'x-context-datasource': dataSource,
            },
          },
        });
      }}
    />
  );
}
