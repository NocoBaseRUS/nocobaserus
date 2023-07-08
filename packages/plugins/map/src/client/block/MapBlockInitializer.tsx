import { TableOutlined } from '@ant-design/icons';
import { FormDialog, FormLayout } from '@formily/antd-v5';
import { SchemaOptionsContext } from '@formily/react';
import { DataBlockInitializer, SchemaComponent, SchemaComponentOptions, useCollectionManager } from '@nocobase/client';
import React, { useContext } from 'react';
import { useMapTranslation } from '../locale';
import { createMapBlockSchema, findNestedOption } from './utils';

export const MapBlockInitializer = (props) => {
  const { insert } = props;
  const options = useContext(SchemaOptionsContext);
  const { getCollectionFieldsOptions } = useCollectionManager();
  const { t } = useMapTranslation();

  return (
    <DataBlockInitializer
      {...props}
      componentType={'Map'}
      icon={<TableOutlined />}
      onCreateBlockSchema={async ({ item }) => {
        const mapFieldOptions = getCollectionFieldsOptions(item.name, ['point', 'lineString', 'polygon'], {
          association: ['o2o', 'obo', 'oho', 'm2o'],
        });
        const markerFieldOptions = getCollectionFieldsOptions(item.name, 'string');
        const values = await FormDialog(t('Create map block'), () => {
          return (
            <SchemaComponentOptions scope={options.scope} components={{ ...options.components }}>
              <FormLayout layout={'vertical'}>
                <SchemaComponent
                  schema={{
                    properties: {
                      field: {
                        title: t('Map field'),
                        enum: mapFieldOptions,
                        required: true,
                        'x-component': 'Cascader',
                        'x-decorator': 'FormItem',
                        default: [mapFieldOptions[0]?.value],
                      },
                      marker: {
                        title: t('Marker field'),
                        enum: markerFieldOptions,
                        'x-component': 'Select',
                        'x-decorator': 'FormItem',
                        'x-reactions': (field) => {
                          const value = field.form.values.field;
                          if (!value?.length) {
                            return;
                          }
                          const item = findNestedOption(value, mapFieldOptions);

                          if (item) {
                            field.hidden = item.type !== 'point';
                          }
                        },
                      },
                    },
                  }}
                />
              </FormLayout>
            </SchemaComponentOptions>
          );
        }).open({
          initialValues: {},
        });
        insert(
          createMapBlockSchema({
            collection: item.name,
            fieldNames: {
              ...values,
            },
          }),
        );
      }}
      title={t('Map block')}
    />
  );
};
