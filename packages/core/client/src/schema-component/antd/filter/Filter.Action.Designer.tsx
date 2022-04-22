import { ISchema, useField, useFieldSchema } from '@formily/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDesignable } from '../..';
import { useCollection, useCollectionManager } from '../../../collection-manager';
import { GeneralSchemaDesigner, SchemaSettings } from '../../../schema-settings';
import { useCompile } from '../../hooks';

export const useFilterableFields = (collectionName: string) => {
  const { getCollectionFields, getInterface } = useCollectionManager();
  const fields = getCollectionFields(collectionName);
  return fields?.filter?.((field) => {
    if (!field.interface) {
      return false;
    }
    const fieldInterface = getInterface(field.interface);
    if (!fieldInterface.filterable) {
      return false;
    }
    return true;
  });
};

export const FilterActionDesigner = (props) => {
  const field = useField();
  const fieldSchema = useFieldSchema();
  const { dn } = useDesignable();
  const { name } = useCollection();
  const fields = useFilterableFields(name);
  const compile = useCompile();
  const { t } = useTranslation();
  const nonfilterable = fieldSchema?.['x-component-props']?.nonfilterable || [];
  return (
    <GeneralSchemaDesigner {...props}>
      <SchemaSettings.ItemGroup title={t('Filterable fields')}>
        {fields.map((field) => {
          const checked = !nonfilterable.includes(field.name);
          return (
            <SchemaSettings.SwitchItem
              checked={checked}
              title={compile(field?.uiSchema?.title)}
              onChange={(value) => {
                fieldSchema['x-component-props'] = fieldSchema?.['x-component-props'] || {};
                const nonfilterable = fieldSchema?.['x-component-props']?.nonfilterable || [];
                if (!value) {
                  nonfilterable.push(field.name);
                } else {
                  const index = nonfilterable.indexOf(field.name);
                  nonfilterable.splice(index, 1);
                }
                fieldSchema['x-component-props'].nonfilterable = nonfilterable;
                dn.emit('patch', {
                  schema: {
                    ['x-uid']: fieldSchema['x-uid'],
                    'x-component-props': {
                      ...fieldSchema['x-component-props'],
                    },
                  },
                });
                dn.refresh();
              }}
            />
          );
        })}
      </SchemaSettings.ItemGroup>
      <SchemaSettings.Divider />
      <SchemaSettings.ModalItem
        title={'编辑'}
        schema={
          {
            type: 'object',
            title: '编辑按钮',
            properties: {
              title: {
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: '按钮标题',
                default: fieldSchema.title,
                'x-component-props': {},
                // description: `原字段标题：${collectionField?.uiSchema?.title}`,
              },
              icon: {
                'x-decorator': 'FormItem',
                'x-component': 'IconPicker',
                title: '按钮图标',
                default: fieldSchema?.['x-component-props']?.icon,
                'x-component-props': {},
                // description: `原字段标题：${collectionField?.uiSchema?.title}`,
              },
            },
          } as ISchema
        }
        onSubmit={({ title, icon }) => {
          if (title) {
            fieldSchema.title = title;
            field.title = title;
            field.componentProps.icon = icon;
            fieldSchema['x-component-props'] = fieldSchema['x-component-props'] || {};
            fieldSchema['x-component-props'].icon = icon;
            dn.emit('patch', {
              schema: {
                ['x-uid']: fieldSchema['x-uid'],
                title,
                'x-component-props': {
                  ...fieldSchema['x-component-props'],
                },
              },
            });
            dn.refresh();
          }
        }}
      />
      <SchemaSettings.Divider />
      <SchemaSettings.Remove
        removeParentsIfNoChildren
        breakRemoveOn={(s) => {
          return s['x-component'] === 'Space' || s['x-component'] === 'ActionBar';
        }}
      />
    </GeneralSchemaDesigner>
  );
};
