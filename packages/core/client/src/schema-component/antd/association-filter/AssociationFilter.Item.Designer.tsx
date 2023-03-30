import { ISchema, useField, useFieldSchema } from '@formily/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useCollection,
  useCollectionFilterOptions,
  useCollectionManager,
  useSortFields,
} from '../../../collection-manager';
import { GeneralSchemaDesigner, SchemaSettings } from '../../../schema-settings';
import { useCompile, useDesignable } from '../../hooks';
import _ from 'lodash';

export const AssociationFilterItemDesigner = (props) => {
  const fieldSchema = useFieldSchema();

  const field = useField();
  const { t } = useTranslation();
  const { getCollectionJoinField } = useCollectionManager();
  const { getField } = useCollection();

  const collectionField = getField(fieldSchema['name']!) || getCollectionJoinField(fieldSchema['x-collection-field']);
  const filterEnum = collectionField?.target ? useCollectionFilterOptions(collectionField?.target) : [];
  const defaultFilter = fieldSchema?.['x-component-props']?.params?.filter || {};

  const { getCollectionFields } = useCollectionManager();
  const compile = useCompile();
  const { dn } = useDesignable();

  const targetFields = collectionField?.target ? getCollectionFields(collectionField?.target) : [];

  const options = targetFields
    .filter(
      (field) => field?.interface && ['id', 'input', 'phone', 'email', 'integer', 'number'].includes(field?.interface),
    )
    .map((field) => ({
      value: field?.name,
      label: compile(field?.uiSchema?.title) || field?.name,
    }));

  const onTitleFieldChange = (label) => {
    const schema = {
      ['x-uid']: fieldSchema['x-uid'],
    };
    const fieldNames = {
      label,
    };
    fieldSchema['x-component-props'] = fieldSchema['x-component-props'] || {};
    fieldSchema['x-component-props']['fieldNames'] = fieldNames;
    schema['x-component-props'] = fieldSchema['x-component-props'];
    dn.emit('patch', {
      schema,
    });
    dn.refresh();
  };

  const sortFields = useSortFields(collectionField?.target);
  const defaultSort = fieldSchema?.['x-component-props']?.params?.sort || [];
  const sort = defaultSort?.map((item: string) => {
    return item.startsWith('-')
      ? {
          field: item.substring(1),
          direction: 'desc',
        }
      : {
          field: item,
          direction: 'asc',
        };
  });

  return (
    <GeneralSchemaDesigner {...props} disableInitializer={true}>
      <SchemaSettings.ModalItem
        title={t('Custom title')}
        schema={
          {
            type: 'object',
            title: t('Custom title'),
            properties: {
              title: {
                default: fieldSchema?.title,
                description: `${t('Original title: ')}${collectionField?.uiSchema?.title || fieldSchema?.title}`,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-component-props': {},
              },
            },
          } as ISchema
        }
        onSubmit={({ title }) => {
          if (title) {
            // field.title = title;
            fieldSchema.title = title;
            dn.emit('patch', {
              schema: {
                'x-uid': fieldSchema['x-uid'],
                title: fieldSchema.title,
              },
            });
          }
          dn.refresh();
        }}
      />
      <SchemaSettings.SwitchItem
        title={t('Default collapse')}
        checked={field.componentProps.defaultCollapse}
        onChange={(v) => {
          field.componentProps.defaultCollapse = v;
          fieldSchema['x-component-props']['defaultCollapse'] = v;
          dn.emit('patch', {
            schema: {
              ['x-uid']: fieldSchema['x-uid'],
              'x-component-props': fieldSchema['x-component-props'],
            },
          });
          dn.refresh();
        }}
      />
      <SchemaSettings.ModalItem
        title={t('Set the data scope')}
        schema={
          {
            type: 'object',
            title: t('Set the data scope'),
            properties: {
              filter: {
                default: defaultFilter,
                enum: filterEnum,
                'x-component': 'Filter',
                'x-component-props': {},
              },
            },
          } as ISchema
        }
        onSubmit={({ filter }) => {
          _.set(field.componentProps, 'params', {
            ...field.componentProps?.params,
            filter,
          });
          fieldSchema['x-component-props']['params'] = field.componentProps.params;
          dn.emit('patch', {
            schema: {
              ['x-uid']: fieldSchema['x-uid'],
              'x-component-props': fieldSchema['x-component-props'],
            },
          });
        }}
      />
      <SchemaSettings.DefaultSortingRules
        sort={sort}
        sortFields={sortFields}
        onSubmit={({ sort }) => {
          _.set(field.componentProps, 'params', {
            ...field.componentProps?.params,
            sort: sort.map((item) => {
              return item.direction === 'desc' ? `-${item.field}` : item.field;
            }),
          });
          fieldSchema['x-component-props']['params'] = field.componentProps.params;
          dn.emit('patch', {
            schema: fieldSchema,
          });
        }}
      />
      <SchemaSettings.SelectItem
        key="title-field"
        title={t('Title field')}
        options={options}
        value={fieldSchema['x-component-props']?.fieldNames?.label}
        onChange={onTitleFieldChange}
      />
      <SchemaSettings.Remove
        breakRemoveOn={{
          'x-component': 'Grid',
        }}
      />
    </GeneralSchemaDesigner>
  );
};
