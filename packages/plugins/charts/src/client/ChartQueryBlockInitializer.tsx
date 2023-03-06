import { TableOutlined } from '@ant-design/icons';
import { FormDialog, FormLayout } from '@formily/antd';
import { SchemaOptionsContext } from '@formily/react';
import {
  SchemaComponent,
  SchemaComponentOptions,
  SchemaInitializer,
  SchemaInitializerButtonContext,
  useAPIClient,
} from '@nocobase/client';
import React, { useContext, useEffect, useState } from 'react';
import { useChartQueryMetadataContext } from './ChartQueryMetadataProvider';
import { lang } from './locale';
import { getQueryTypeSchema } from './settings/queryTypes';

export interface ChartQueryMetadata {
  id: number;
  title: string;
  type: string;
  fields: { name: string }[];
}

export const ChartQueryBlockInitializer = (props) => {
  const defaultItems: any = [
    {
      type: 'itemGroup',
      title: lang('Select query data'),
      children: [],
    },
  ];
  const { templateWrap, onCreateBlockSchema, componentType, createBlockSchema, insert, ...others } = props;
  const { setVisible } = useContext(SchemaInitializerButtonContext);
  const [items, setItems] = useState(defaultItems);
  const apiClient = useAPIClient();
  const ctx = useChartQueryMetadataContext();
  const options = useContext(SchemaOptionsContext);
  const onAddQuery = (info) => {
    FormDialog(
      {
        sql: lang('Add SQL query'),
        json: lang('Add JSON query'),
      }[info.key],
      () => {
        return (
          <div>
            <SchemaComponentOptions scope={options.scope} components={{ ...options.components }}>
              <FormLayout layout={'vertical'}>
                <SchemaComponent
                  schema={{
                    type: 'object',
                    properties: {
                      title: {
                        title: lang('Title'),
                        required: true,
                        'x-component': 'Input',
                        'x-decorator': 'FormItem',
                      },
                      options: getQueryTypeSchema(info.key),
                    },
                  }}
                />
              </FormLayout>
            </SchemaComponentOptions>
          </div>
        );
      },
    )
      .open({
        initialValues: {
          type: info.key,
        },
      })
      .then(async (values) => {
        try {
          const { data } = await apiClient.resource('chartsQueries')?.create?.({ values });
          const items = (await ctx.refresh()) as any;
          const item = items.find((item) => item.id === data?.data?.id);
          onCreateBlockSchema({ item });
          setVisible(false);
        } catch (error) {}
      })
      .catch(() => {});
  };
  useEffect(() => {
    const chartQueryMetadata = ctx.data;
    if (chartQueryMetadata && Array.isArray(chartQueryMetadata)) {
      setItems(
        [
          chartQueryMetadata.length > 0
            ? {
                type: 'itemGroup',
                title: '{{t("Select chart query", {ns: "charts"})}}',
                children: chartQueryMetadata,
              }
            : null,
          chartQueryMetadata.length > 0
            ? {
                type: 'divider',
              }
            : null,
          ,
          {
            type: 'subMenu',
            title: lang('Add chart query'),
            // component: AddChartQuery,
            children: [
              {
                key: 'sql',
                type: 'item',
                title: 'SQL',
                onClick: onAddQuery,
              },
              {
                key: 'json',
                type: 'item',
                title: 'JSON',
                onClick: onAddQuery,
              },
            ],
          },
        ].filter(Boolean),
      );
    }
  }, []);
  return (
    <SchemaInitializer.Item
      icon={<TableOutlined />}
      {...others}
      onClick={async ({ item }) => {
        onCreateBlockSchema({ item });
        setVisible(false);
      }}
      items={items}
    />
  );
};
