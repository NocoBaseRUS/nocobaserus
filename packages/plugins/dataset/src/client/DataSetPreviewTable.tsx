import { ISchema } from '@formily/react';
import { Input, SchemaComponent, SchemaComponentProvider, Table } from '@nocobase/client';
import React from 'react';

interface DataSetPreviewProps {
  dataSet: null | object[];
}

export default ({ dataSet }: DataSetPreviewProps) => {
  const columns = {};
  if (dataSet) {
    const dataKeys = Object.keys(dataSet[0]);
    for (const dataKey of dataKeys) {
      columns[dataKey] = {
        type: 'void',
        title: dataKey,
        'x-component': 'Table.Column',
        properties: {
          [dataKey]: {
            type: 'string',
            'x-component': 'Input',
            'x-read-pretty': true,
          },
        },
      };
    }
  }
  const schema: ISchema = {
    type: 'object',
    properties: {
      input: {
        type: 'array',
        title: `编辑模式`,
        'x-component': 'Table.Void',
        'x-component-props': {
          rowKey: 'id',
          dataSource: '{{dataSet}}',
          scroll: { y: 300 },
        },
        properties: columns,
      },
    },
  };
  return (
    <SchemaComponentProvider scope={{ dataSet }} components={{ Table, Input }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
