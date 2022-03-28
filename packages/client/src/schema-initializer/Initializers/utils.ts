import { ISchema, Schema, useFieldSchema } from '@formily/react';
import { uid } from '@formily/shared';
import { useTranslation } from 'react-i18next';
import { SchemaInitializerItemOptions } from '../';
import { useCollection, useCollectionManager } from '../../collection-manager';
import { useDesignable } from '../../schema-component';
import { useSchemaTemplateManager } from '../../schema-templates';

export const gridRowColWrap = (schema: ISchema) => {
  return {
    type: 'void',
    'x-component': 'Grid.Row',
    properties: {
      [uid()]: {
        type: 'void',
        'x-component': 'Grid.Col',
        properties: {
          [schema.name || uid()]: schema,
        },
      },
    },
  };
};

export const removeTableColumn = (schema, cb) => {
  cb(schema, {
    removeParentsIfNoChildren: true,
    // breakRemoveOn: (s) => {
    //   return s['x-component'].startsWith('Table.');
    // },
  });
};

export const removeGridFormItem = (schema, cb) => {
  cb(schema, {
    removeParentsIfNoChildren: true,
    breakRemoveOn: {
      'x-component': 'Grid',
    },
  });
};

const findTableColumn = (schema: Schema, key: string, action: string, deepth: number = 0) => {
  return schema.reduceProperties((buf, s) => {
    if (s[key] === action) {
      return s;
    }
    const c = s.reduceProperties((buf, s) => {
      if (s[key] === action) {
        return s;
      }
      return buf;
    });
    if (c) {
      return c;
    }
    return buf;
  });
};

export const useTableColumnInitializerFields = () => {
  const { name, fields = [] } = useCollection();
  return fields
    .filter((field) => field?.interface && field?.interface !== 'subTable')
    .map((field) => {
      const componentProps = {};
      if (field?.uiSchema['x-component']?.startsWith?.('Input')) {
        componentProps['ellipsis'] = true;
      }
      if (field.interface === 'attachment') {
        componentProps['size'] = 'small';
        return {
          type: 'item',
          title: field?.uiSchema?.title || field.name,
          component: 'CollectionFieldInitializer',
          find: findTableColumn,
          remove: removeTableColumn,
          schema: {
            name: field.name,
            'x-collection-field': `${name}.${field.name}`,
            'x-component': 'CollectionField',
            'x-component-props': {
              ...componentProps,
            },
          },
        } as SchemaInitializerItemOptions;
      }
      if (field.target) {
        return {
          field,
          type: 'item',
          title: field?.uiSchema?.title || field.name,
          find: findTableColumn,
          remove: removeTableColumn,
          component: 'LinkToFieldInitializer',
          schema: {
            name: field.name,
            'x-collection-field': `${name}.${field.name}`,
            'x-component': 'CollectionField',
            'x-component-props': {
              ...componentProps,
            },
          },
        } as SchemaInitializerItemOptions;
      }
      return {
        type: 'item',
        title: field?.uiSchema?.title || field.name,
        component: 'CollectionFieldInitializer',
        find: findTableColumn,
        remove: removeTableColumn,
        schema: {
          name: field.name,
          'x-collection-field': `${name}.${field.name}`,
          'x-component': 'CollectionField',
          'x-component-props': {
            ...componentProps,
          },
        },
      } as SchemaInitializerItemOptions;
    });
};

export const useFormItemInitializerFields = () => {
  const { name, fields } = useCollection();
  return fields
    ?.filter((field) => field?.interface)
    ?.map((field) => {
      if (field.interface === 'subTable') {
        return {
          type: 'item',
          title: field?.uiSchema?.title || field.name,
          component: 'SubTableFieldInitializer',
          remove: removeGridFormItem,
          field,
          schema: {
            type: 'void',
            name: field.name,
            'x-designer': 'Table.Array.Designer',
            'x-component': 'div',
            'x-decorator': 'FormItem',
            'x-collection-field': `${name}.${field.name}`,
          },
        } as SchemaInitializerItemOptions;
      }
      if (field.target) {
        return {
          type: 'item',
          title: field?.uiSchema?.title || field.name,
          component: 'LinkToFieldInitializer',
          remove: removeGridFormItem,
          field,
          schema: {
            name: field.name,
            'x-designer': 'FormItem.Designer',
            'x-component': 'CollectionField',
            'x-decorator': 'FormItem',
            'x-collection-field': `${name}.${field.name}`,
          },
        } as SchemaInitializerItemOptions;
      }
      return {
        type: 'item',
        title: field?.uiSchema?.title || field.name,
        component: 'CollectionFieldInitializer',
        remove: removeGridFormItem,
        schema: {
          name: field.name,
          title: field?.uiSchema?.title || field.name,
          'x-designer': 'FormItem.Designer',
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
          'x-collection-field': `${name}.${field.name}`,
        },
      } as SchemaInitializerItemOptions;
    });
};

const findSchema = (schema: Schema, key: string, action: string) => {
  return schema.reduceProperties((buf, s) => {
    if (s[key] === action) {
      return s;
    }
    const c = findSchema(s, key, action);
    if (c) {
      return c;
    }
    return buf;
  });
};

const removeSchema = (schema, cb) => {
  return cb(schema);
};

export const useCurrentSchema = (action: string, key: string, find = findSchema, rm = removeSchema) => {
  const fieldSchema = useFieldSchema();
  const { remove } = useDesignable();
  const schema = find(fieldSchema, key, action);
  return {
    schema,
    exists: !!schema,
    remove() {
      schema && rm(schema, remove);
    },
  };
};

export const useCollectionDataSourceItems = (componentName) => {
  const { t } = useTranslation();
  const { collections } = useCollectionManager();
  const { getTemplatesByCollection } = useSchemaTemplateManager();
  return [
    {
      key: 'tableBlock',
      type: 'itemGroup',
      title: t('Select data source'),
      children: collections
        ?.filter((item) => !item.inherit)
        ?.map((item, index) => {
          const templates = getTemplatesByCollection(item.name).filter((template) => {
            return componentName && template.componentName === componentName;
          });
          if (!templates.length) {
            return {
              type: 'item',
              name: item.name,
              title: item.title,
            };
          }
          return {
            key: `${componentName}_table_subMenu_${index}`,
            type: 'subMenu',
            name: `${item.name}_${index}`,
            title: item.title,
            children: [
              {
                type: 'item',
                name: item.name,
                title: '空白区块',
              },
              {
                type: 'divider',
              },
              {
                key: `${componentName}_table_subMenu_${index}_copy`,
                type: 'subMenu',
                name: 'copy',
                title: '复制模板',
                children: templates.map((template) => {
                  return {
                    type: 'item',
                    mode: 'copy',
                    name: item.name,
                    template,
                    title: template.name || '未命名',
                  };
                }),
              },
              {
                key: `${componentName}_table_subMenu_${index}_ref`,
                type: 'subMenu',
                name: 'ref',
                title: '引用模板',
                children: templates.map((template) => {
                  return {
                    type: 'item',
                    mode: 'reference',
                    name: item.name,
                    template,
                    title: template.name || '未命名',
                  };
                }),
              },
            ],
          };
        }),
    },
  ];
};
