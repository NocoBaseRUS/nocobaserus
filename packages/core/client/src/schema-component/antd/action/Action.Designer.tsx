import { ISchema, useField, useFieldSchema, connect, mapProps } from '@formily/react';
import { isValid, uid } from '@formily/shared';
import { Menu, Tree as AntdTree } from 'antd';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDesignable } from '../..';
import { useCollection, useCollectionManager, useCollectionFieldsOptions } from '../../../collection-manager';
import { OpenModeSchemaItems } from '../../../schema-items';
import { GeneralSchemaDesigner, SchemaSettings } from '../../../schema-settings';
import { useLinkageAction } from './hooks';
import { useCollectionState } from '../../../schema-settings/DataTemplates/hooks/useCollectionState';
import { requestSettingsSchema } from './utils';

const Tree = connect(
  AntdTree,
  mapProps((props, field: any) => {
    console.log(props, field);
    return {
      ...props,
      onCheck: (checkedKeys) => {
        field.value = checkedKeys;
      },
    };
  }),
);
const MenuGroup = (props) => {
  const fieldSchema = useFieldSchema();
  const actionType = fieldSchema['x-action'] || '';
  const { t } = useTranslation();
  const actionTitles = {
    'customize:popup': t('Popup'),
    'customize:update': t('Update record'),
    'customize:save': t('Save record'),
    'customize:table:request': t('Custom request'),
    'customize:form:request': t('Custom request'),
  };
  if (
    ![
      'customize:popup',
      'customize:update',
      'customize:save',
      'customize:table:request',
      'customize:form:request',
    ].includes(actionType)
  ) {
    return <>{props.children}</>;
  }
  return <Menu.ItemGroup title={`${t('Customize')} > ${actionTitles[actionType]}`}>{props.children}</Menu.ItemGroup>;
};

export const ActionDesigner = (props) => {
  const { modalTip, linkageAction, ...restProps } = props;
  const field = useField();
  const fieldSchema = useFieldSchema();
  const { name } = useCollection();
  const { getChildrenCollections, getCollection, getCollectionField } = useCollectionManager();
  const { dn } = useDesignable();
  const { t } = useTranslation();
  const isAction = useLinkageAction();
  const isPopupAction = ['create', 'update', 'view', 'customize:popup', 'duplicate'].includes(
    fieldSchema['x-action'] || '',
  );
  const isUpdateModePopupAction = ['customize:bulkUpdate', 'customize:bulkEdit'].includes(fieldSchema['x-action']);
  const [initialSchema, setInitialSchema] = useState<ISchema>();
  const actionType = fieldSchema['x-action'] ?? '';
  const isLinkageAction = linkageAction || isAction;
  const isChildCollectionAction = getChildrenCollections(name).length > 0 && fieldSchema['x-action'] === 'create';
  const isLink = fieldSchema['x-component'] === 'Action.Link';
  const isDelete = fieldSchema?.parent['x-component'] === 'CollectionField';
  const isDraggable = fieldSchema?.parent['x-component'] !== 'CollectionField';
  const isDuplicateAction = fieldSchema['x-action'] === 'duplicate';
  const { collectionList, getEnableFieldTree, onLoadData, onCheck } = useCollectionState(name);
  const duplicateValues = cloneDeep(fieldSchema['x-component-props'].duplicateFields || []);
  const options = useCollectionFieldsOptions(name, 1, ['id']);
  useEffect(() => {
    const schemaUid = uid();
    const schema: ISchema = {
      type: 'void',
      'x-uid': schemaUid,
      'x-component': 'Grid',
      'x-initializer': 'CustomFormItemInitializers',
    };
    setInitialSchema(schema);
  }, [field.address]);

  const tips = {
    'customize:update': t(
      'After clicking the custom button, the following fields of the current record will be saved according to the following form.',
    ),
    'customize:save': t(
      'After clicking the custom button, the following fields of the current record will be saved according to the following form.',
    ),
  };

  return (
    <GeneralSchemaDesigner {...restProps} disableInitializer draggable={isDraggable}>
      <MenuGroup>
        <SchemaSettings.ModalItem
          title={t('Edit button')}
          schema={
            {
              type: 'object',
              title: t('Edit button'),
              properties: {
                title: {
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  title: t('Button title'),
                  default: fieldSchema.title,
                  'x-component-props': {},
                  // description: `原字段标题：${collectionField?.uiSchema?.title}`,
                },
                icon: {
                  'x-decorator': 'FormItem',
                  'x-component': 'IconPicker',
                  title: t('Button icon'),
                  default: fieldSchema?.['x-component-props']?.icon,
                  'x-component-props': {},
                  'x-visible': !isLink,
                  // description: `原字段标题：${collectionField?.uiSchema?.title}`,
                },
                type: {
                  'x-decorator': 'FormItem',
                  'x-component': 'Radio.Group',
                  title: t('Button background color'),
                  default: fieldSchema?.['x-component-props']?.danger
                    ? 'danger'
                    : fieldSchema?.['x-component-props']?.type === 'primary'
                    ? 'primary'
                    : 'default',
                  enum: [
                    { value: 'default', label: '{{t("Default")}}' },
                    { value: 'primary', label: '{{t("Highlight")}}' },
                    { value: 'danger', label: '{{t("Danger red")}}' },
                  ],
                  'x-visible': !isLink,
                },
              },
            } as ISchema
          }
          onSubmit={({ title, icon, type }) => {
            fieldSchema.title = title;
            field.title = title;
            field.componentProps.icon = icon;
            field.componentProps.danger = type === 'danger';
            field.componentProps.type = type;
            fieldSchema['x-component-props'] = fieldSchema['x-component-props'] || {};
            fieldSchema['x-component-props'].icon = icon;
            fieldSchema['x-component-props'].danger = type === 'danger';
            fieldSchema['x-component-props'].type = type;
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
          }}
        />
        {fieldSchema['x-action'] === 'submit' &&
          fieldSchema.parent?.['x-initializer'] === 'CreateFormActionInitializers' && (
            <SchemaSettings.ModalItem
              title={t('Save mode')}
              components={{ Tree }}
              schema={
                {
                  type: 'object',
                  title: t('Save mode'),
                  properties: {
                    saveMode: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Radio.Group',
                      title: t('Save mode'),
                      default: field.componentProps.saveMode || 'create',
                      enum: [
                        { value: 'create', label: '{{t("Create")}}' },
                        { value: 'firstOrCreate', label: '{{t("First or create")}}' },
                        { value: 'updateOrCreate', label: '{{t("Update or create")}}' },
                      ],
                    },
                    filterKeys: {
                      type: 'array',
                      title: '{{ t("Find by the following fields") }}',
                      required: true,
                      default: field.componentProps.filterKeys,
                      'x-decorator': 'FormItem',
                      'x-component': 'Tree',
                      'x-component-props': {
                        treeData: options,
                        checkable: true,
                        defaultCheckedKeys: field.componentProps.filterKeys,
                        rootStyle: {
                          padding: '8px 0',
                          border: '1px solid #d9d9d9',
                          borderRadius: '2px',
                          maxHeight: '30vh',
                          overflow: 'auto',
                          margin: '2px 0',
                        },
                      },
                      'x-reactions': [
                        {
                          dependencies: ['.saveMode'],
                          fulfill: {
                            state: {
                              hidden: '{{ $deps[0]==="create"}}',
                            },
                          },
                        },
                      ],
                    },
                  },
                } as ISchema
              }
              onSubmit={({ saveMode, filterKeys }) => {
                console.log(saveMode, filterKeys);
                field.componentProps.saveMode = saveMode;
                field.componentProps.filterKeys = filterKeys;
                fieldSchema['x-component-props'] = fieldSchema['x-component-props'] || {};
                fieldSchema['x-component-props'].saveMode = saveMode;
                fieldSchema['x-component-props'].filterKeys = filterKeys;
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
          )}
        {isLinkageAction && <SchemaSettings.LinkageRules collectionName={name} />}
        {isDuplicateAction && [
          <SchemaSettings.ModalItem
            title={t('Duplicate mode')}
            components={{ Tree }}
            scope={{ getEnableFieldTree, collectionName: name }}
            schema={
              {
                type: 'object',
                title: t('Duplicate mode'),
                properties: {
                  duplicateMode: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    title: t('Duplicate mode'),
                    default: fieldSchema['x-component-props']?.duplicateMode || 'quickDulicate',
                    enum: [
                      { value: 'quickDulicate', label: '{{t("Quick duplicate")}}' },
                      { value: 'continueduplicate', label: '{{t("Duplicate and continue")}}' },
                    ],
                  },
                  collection: {
                    type: 'string',
                    title: '{{ t("Collection") }}',
                    required: true,
                    description: t('If collection inherits, choose inherited collections as templates'),
                    default: '{{ collectionName }}',
                    'x-display': collectionList.length > 1 ? 'visible' : 'hidden',
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    'x-component-props': {
                      options: collectionList,
                    },
                  },
                  duplicateFields: {
                    type: 'array',
                    title: '{{ t("Data fields") }}',
                    required: true,
                    default: duplicateValues,
                    description: t('Only the selected fields will be used as the initialization data for the form'),
                    'x-decorator': 'FormItem',
                    'x-component': Tree,
                    'x-component-props': {
                      defaultCheckedKeys: duplicateValues,
                      treeData: [],
                      checkable: true,
                      checkStrictly: true,
                      selectable: false,
                      loadData: onLoadData,
                      onCheck,
                      rootStyle: {
                        padding: '8px 0',
                        border: '1px solid #d9d9d9',
                        borderRadius: '2px',
                        maxHeight: '30vh',
                        overflow: 'auto',
                        margin: '2px 0',
                      },
                    },
                    'x-reactions': [
                      {
                        dependencies: ['.collection'],
                        fulfill: {
                          state: {
                            disabled: '{{ !$deps[0] }}',
                            componentProps: {
                              treeData: '{{ getEnableFieldTree($deps[0], $self) }}',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              } as ISchema
            }
            onSubmit={({ duplicateMode, duplicateFields }) => {
              const fields = Array.isArray(duplicateFields) ? duplicateFields : duplicateFields.checked || [];
              field.componentProps.duplicateMode = duplicateMode;
              field.componentProps.duplicateFields = fields;
              fieldSchema['x-component-props'] = fieldSchema['x-component-props'] || {};
              fieldSchema['x-component-props'].duplicateMode = duplicateMode;
              fieldSchema['x-component-props'].duplicateFields = fields;
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
          />,
        ]}
        <OpenModeSchemaItems openMode={isPopupAction} openSize={isPopupAction}></OpenModeSchemaItems>
        {isUpdateModePopupAction && (
          <SchemaSettings.SelectItem
            title={t('Data will be updated')}
            options={[
              { label: t('Selected'), value: 'selected' },
              { label: t('All'), value: 'all' },
            ]}
            value={fieldSchema?.['x-action-settings']?.['updateMode']}
            onChange={(value) => {
              fieldSchema['x-action-settings']['updateMode'] = value;
              dn.emit('patch', {
                schema: {
                  'x-uid': fieldSchema['x-uid'],
                  'x-action-settings': fieldSchema['x-action-settings'],
                },
              });
              dn.refresh();
            }}
          />
        )}

        {isValid(fieldSchema?.['x-action-settings']?.assignedValues) && (
          <SchemaSettings.ActionModalItem
            title={t('Assign field values')}
            initialSchema={initialSchema}
            initialValues={fieldSchema?.['x-action-settings']?.assignedValues}
            modalTip={tips[actionType]}
            uid={fieldSchema?.['x-action-settings']?.schemaUid}
            onSubmit={(assignedValues) => {
              fieldSchema['x-action-settings']['assignedValues'] = assignedValues;
              dn.emit('patch', {
                schema: {
                  ['x-uid']: fieldSchema['x-uid'],
                  'x-action-settings': fieldSchema['x-action-settings'],
                },
              });
              dn.refresh();
            }}
          />
        )}
        {isValid(fieldSchema?.['x-action-settings']?.requestSettings) && (
          <SchemaSettings.ActionModalItem
            title={t('Request settings')}
            schema={requestSettingsSchema}
            initialValues={fieldSchema?.['x-action-settings']?.requestSettings}
            onSubmit={(requestSettings) => {
              fieldSchema['x-action-settings']['requestSettings'] = requestSettings;
              dn.emit('patch', {
                schema: {
                  ['x-uid']: fieldSchema['x-uid'],
                  'x-action-settings': fieldSchema['x-action-settings'],
                },
              });
              dn.refresh();
            }}
          />
        )}
        {isValid(fieldSchema?.['x-action-settings']?.skipValidator) && (
          <SchemaSettings.SwitchItem
            title={t('Skip required validation')}
            checked={!!fieldSchema?.['x-action-settings']?.skipValidator}
            onChange={(value) => {
              fieldSchema['x-action-settings'].skipValidator = value;
              dn.emit('patch', {
                schema: {
                  ['x-uid']: fieldSchema['x-uid'],
                  'x-action-settings': {
                    ...fieldSchema['x-action-settings'],
                  },
                },
              });
            }}
          />
        )}
        {isValid(fieldSchema?.['x-action-settings']?.['onSuccess']) && (
          <SchemaSettings.ModalItem
            title={
              {
                'customize:save': t('After successful save'),
                'customize:update': t('After successful update'),
                'customize:table:request': t('After successful request'),
                'customize:form:request': t('After successful request'),
                'customize:bulkUpdate': t('After successful bulk update'),
              }[actionType]
            }
            initialValues={fieldSchema?.['x-action-settings']?.['onSuccess']}
            schema={
              {
                type: 'object',
                title: {
                  'customize:save': t('After successful save'),
                  'customize:update': t('After successful update'),
                  'customize:table:request': t('After successful request'),
                  'customize:form:request': t('After successful request'),
                  'customize:bulkUpdate': t('After successful bulk update'),
                }[actionType],
                properties: {
                  successMessage: {
                    title: t('Popup message'),
                    'x-decorator': 'FormItem',
                    'x-component': 'Input.TextArea',
                    'x-component-props': {},
                  },
                  manualClose: {
                    title: t('Popup close method'),
                    default: false,
                    enum: [
                      { label: t('Automatic close'), value: false },
                      { label: t('Manually close'), value: true },
                    ],
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-component-props': {},
                  },
                  redirecting: {
                    title: t('Then'),
                    default: false,
                    enum: [
                      { label: t('Stay on current page'), value: false },
                      { label: t('Redirect to'), value: true },
                    ],
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-component-props': {},
                    'x-reactions': {
                      target: 'redirectTo',
                      fulfill: {
                        state: {
                          visible: '{{!!$self.value}}',
                        },
                      },
                    },
                  },
                  redirectTo: {
                    title: t('Link'),
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {},
                  },
                },
              } as ISchema
            }
            onSubmit={(onSuccess) => {
              fieldSchema['x-action-settings']['onSuccess'] = onSuccess;
              dn.emit('patch', {
                schema: {
                  ['x-uid']: fieldSchema['x-uid'],
                  'x-action-settings': fieldSchema['x-action-settings'],
                },
              });
            }}
          />
        )}

        {isChildCollectionAction && <SchemaSettings.EnableChildCollections collectionName={name} />}

        {!isDelete && (
          <>
            <SchemaSettings.Divider />
            <SchemaSettings.Remove
              removeParentsIfNoChildren
              breakRemoveOn={(s) => {
                return s['x-component'] === 'Space' || s['x-component'].endsWith('ActionBar');
              }}
              confirm={{
                title: t('Delete action'),
              }}
            />
          </>
        )}
      </MenuGroup>
    </GeneralSchemaDesigner>
  );
};
