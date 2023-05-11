import { uid } from '@formily/shared';
import { ISchema } from '@formily/react';
import { useAPIClient, useActionContext, useRequest } from '@nocobase/client';
import { useContext } from 'react';
import { AuthTypeContext } from '../authType';

const collection = {
  name: 'authenticators',
  fields: [
    {
      name: 'id',
      type: 'string',
      interface: 'id',
    },
    {
      interface: 'input',
      type: 'string',
      name: 'name',
      uiSchema: {
        type: 'string',
        title: '{{t("Name")}}',
        'x-component': 'Input',
        required: true,
      },
    },
    {
      interface: 'input',
      type: 'string',
      name: 'authType',
      uiSchema: {
        type: 'string',
        title: '{{t("Auth Type", {ns: "auth"})}}',
        'x-component': 'Select',
        required: true,
      },
    },
    {
      interface: 'input',
      type: 'string',
      name: 'title',
      uiSchema: {
        type: 'string',
        title: '{{t("Title")}}',
        'x-component': 'Input',
      },
    },
    {
      interface: 'textarea',
      type: 'string',
      name: 'description',
      uiSchema: {
        type: 'string',
        title: '{{t("Description")}}',
        'x-component': 'Input',
      },
    },
    {
      type: 'boolean',
      name: 'enabled',
      uiSchema: {
        type: 'boolean',
        title: '{{t("Enabled")}}',
        'x-component': 'Checkbox',
      },
    },
  ],
};

export const createFormSchema: ISchema = {
  type: 'object',
  properties: {
    drawer: {
      type: 'void',
      'x-component': 'Action.Drawer',
      'x-decorator': 'Form',
      'x-decorator-props': {
        useValues(options) {
          const ctx = useActionContext();
          const { type: authType } = useContext(AuthTypeContext);
          return useRequest(
            () =>
              Promise.resolve({
                data: {
                  name: `s_${uid()}`,
                  authType,
                },
              }),
            { ...options, refreshDeps: [ctx.visible] },
          );
        },
      },
      title: '{{t("Add new")}}',
      properties: {
        name: {
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
        },
        authType: {
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
          'x-component-props': {
            options: '{{ types }}',
          },
          'x-reactions': {
            effects: ['onFieldValueChange'],
            fulfill: {
              run: 'setType($self.value)',
            },
          },
        },
        title: {
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
        },
        description: {
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
        },
        enabled: {
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
        },
        options: {
          type: 'object',
          'x-component': 'Options',
        },
        footer: {
          type: 'void',
          'x-component': 'Action.Drawer.Footer',
          properties: {
            cancel: {
              title: '{{t("Cancel")}}',
              'x-component': 'Action',
              'x-component-props': {
                useAction: '{{ cm.useCancelAction }}',
              },
            },
            submit: {
              title: '{{t("Submit")}}',
              'x-component': 'Action',
              'x-component-props': {
                type: 'primary',
                useAction: '{{ cm.useCreateAction }}',
              },
            },
          },
        },
      },
    },
  },
};

export const authenticatorsSchema: ISchema = {
  type: 'void',
  name: 'authenticators',
  'x-decorator': 'ResourceActionProvider',
  'x-decorator-props': {
    collection,
    resourceName: 'authenticators',
    request: {
      resource: 'authenticators',
      action: 'list',
      params: {
        pageSize: 50,
        sort: ['id'],
        appends: [],
      },
    },
  },
  'x-component': 'CollectionProvider',
  'x-component-props': {
    collection,
  },
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 16,
        },
      },
      properties: {
        delete: {
          type: 'void',
          title: '{{t("Delete")}}',
          'x-component': 'Action',
          'x-component-props': {
            useAction: '{{ cm.useBulkDestroyAction }}',
            confirm: {
              title: "{{t('Delete')}}",
              content: "{{t('Are you sure you want to delete it?')}}",
            },
          },
        },
        create: {
          type: 'void',
          title: '{{t("Add new")}}',
          'x-component': 'AddNew',
          'x-component-props': {
            type: 'primary',
          },
        },
      },
    },
    table: {
      type: 'void',
      'x-uid': 'input',
      'x-component': 'Table.Void',
      'x-component-props': {
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
        useDataSource: '{{ cm.useDataSourceFromRAC }}',
      },
      properties: {
        id: {
          type: 'void',
          'x-decorator': 'Table.Column.Decorator',
          'x-component': 'Table.Column',
          properties: {
            id: {
              type: 'number',
              'x-component': 'CollectionField',
              'x-read-pretty': true,
            },
          },
        },
        name: {
          type: 'void',
          'x-decorator': 'Table.Column.Decorator',
          'x-component': 'Table.Column',
          properties: {
            name: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-read-pretty': true,
            },
          },
        },
        authType: {
          type: 'void',
          'x-decorator': 'Table.Column.Decorator',
          'x-component': 'Table.Column',
          properties: {
            authType: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-read-pretty': true,
            },
          },
        },
        title: {
          type: 'void',
          'x-decorator': 'Table.Column.Decorator',
          'x-component': 'Table.Column',
          properties: {
            title: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-read-pretty': true,
            },
          },
        },
        description: {
          type: 'void',
          'x-decorator': 'Table.Column.Decorator',
          'x-component': 'Table.Column',
          properties: {
            description: {
              type: 'boolean',
              'x-component': 'CollectionField',
              'x-read-pretty': true,
            },
          },
        },
        enabled: {
          type: 'void',
          'x-decorator': 'Table.Column.Decorator',
          'x-component': 'Table.Column',
          properties: {
            enabled: {
              type: 'boolean',
              'x-component': 'CollectionField',
              'x-read-pretty': true,
            },
          },
        },
        actions: {
          type: 'void',
          title: '{{t("Actions")}}',
          'x-component': 'Table.Column',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'Space',
              'x-component-props': {
                split: '|',
              },
              properties: {
                update: {
                  type: 'void',
                  title: '{{t("Configure")}}',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    type: 'primary',
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      'x-component': 'Action.Drawer',
                      'x-decorator': 'Form',
                      'x-decorator-props': {
                        useValues: '{{ cm.useValuesFromRecord }}',
                      },
                      title: '{{t("Configure")}}',
                      properties: {
                        name: {
                          'x-component': 'CollectionField',
                          'x-decorator': 'FormItem',
                        },
                        authType: {
                          'x-component': 'CollectionField',
                          'x-decorator': 'FormItem',
                          'x-component-props': {
                            options: '{{ types }}',
                          },
                        },
                        title: {
                          'x-component': 'CollectionField',
                          'x-decorator': 'FormItem',
                        },
                        description: {
                          'x-component': 'CollectionField',
                          'x-decorator': 'FormItem',
                        },
                        enabled: {
                          'x-component': 'CollectionField',
                          'x-decorator': 'FormItem',
                        },
                        options: {
                          type: 'object',
                          'x-component': 'Options',
                          'x-decorator': 'AuthTypeContextProvider',
                          'x-reactions': {
                            dependencies: ['authType'],
                            fulfill: {
                              schema: {
                                'x-decorator-props.value.type': '{{ $deps[0] }}',
                              },
                            },
                          },
                        },
                        footer: {
                          type: 'void',
                          'x-component': 'Action.Drawer.Footer',
                          properties: {
                            cancel: {
                              title: '{{t("Cancel")}}',
                              'x-component': 'Action',
                              'x-component-props': {
                                useAction: '{{ cm.useCancelAction }}',
                              },
                            },
                            submit: {
                              title: '{{t("Submit")}}',
                              'x-component': 'Action',
                              'x-component-props': {
                                type: 'primary',
                                useAction: '{{ cm.useUpdateAction }}',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                delete: {
                  type: 'void',
                  title: '{{ t("Delete") }}',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    confirm: {
                      title: "{{t('Delete record')}}",
                      content: "{{t('Are you sure you want to delete it?')}}",
                    },
                    useAction: '{{cm.useDestroyAction}}',
                  },
                  'x-disabled': '{{ useCanNotDelete() }}',
                },
              },
            },
          },
        },
      },
    },
  },
};
