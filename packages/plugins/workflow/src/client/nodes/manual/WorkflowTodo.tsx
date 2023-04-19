import React, { useContext, createContext, useEffect, useState } from "react";
import { observer, useForm, useField, useFieldSchema } from '@formily/react';
import { Tag } from 'antd';
import parse from 'json-templates';
import { css } from "@emotion/css";
import moment from 'moment';

import { CollectionManagerProvider, SchemaComponent, SchemaComponentContext, SchemaComponentOptions, TableBlockProvider, useActionContext, useAPIClient, useCollectionManager, useCurrentUserContext, useRecord, useRequest, useTableBlockContext } from "@nocobase/client";
import { uid } from "@nocobase/utils/client";

import { JobStatusOptions, JobStatusOptionsMap, JOB_STATUS } from "../../constants";
import { NAMESPACE } from "../../locale";
import { FlowContext, useFlowContext } from "../../FlowContext";
import { instructions, useAvailableUpstreams } from '..';
import { linkNodes } from "../../utils";
import customForm from "./forms/customForm";

const nodeCollection = {
  title: `{{t("Task", { ns: "${NAMESPACE}" })}}`,
  name: 'flow_nodes',
  fields: [
    {
      type: 'bigInt',
      name: 'id',
      interface: 'm2o',
      uiSchema: {
        type: 'number',
        title: 'ID',
        'x-component': 'RemoteSelect',
        'x-component-props': {
          fieldNames: {
            label: 'title',
            value: 'id',
          },
          service: {
            resource: 'flow_nodes',
            params: {
              filter: {
                type: 'manual'
              }
            }
          },
        }
      }
    },
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        title: '{{t("Title")}}',
        'x-component': 'Input'
      }
    },
  ]
};

const workflowCollection = {
  title: `{{t("Workflow", { ns: "${NAMESPACE}" })}}`,
  name: 'workflows',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        title: '{{t("Name")}}',
        type: 'string',
        'x-component': 'Input',
        required: true,
      },
    },
  ]
};

const todoCollection = {
  title: `{{t("Workflow todos", { ns: "${NAMESPACE}" })}}`,
  name: 'users_jobs',
  fields: [
    {
      type: 'belongsTo',
      name: 'user',
      target: 'users',
      foreignKey: 'userId',
      interface: 'm2o',
      uiSchema: {
        type: 'number',
        title: '{{t("User")}}',
        'x-component': 'RemoteSelect',
        'x-component-props': {
          fieldNames: {
            label: 'nickname',
            value: 'id',
          },
          service: {
            resource: 'users'
          },
        }
      }
    },
    {
      type: 'belongsTo',
      name: 'node',
      target: 'flow_nodes',
      foreignKey: 'nodeId',
      interface: 'm2o',
      isAssociation: true,
      uiSchema: {
        type: 'number',
        title: `{{t("Task", { ns: "${NAMESPACE}" })}}`,
        'x-component': 'RemoteSelect',
        'x-component-props': {
          fieldNames: {
            label: 'title',
            value: 'id',
          },
          service: {
            resource: 'flow_nodes'
          },
        }
      }
    },
    {
      type: 'belongsTo',
      name: 'workflow',
      target: 'workflows',
      foreignKey: 'workflowId',
      interface: 'm2o',
      uiSchema: {
        type: 'number',
        title: `{{t("Workflow", { ns: "${NAMESPACE}" })}}`,
        'x-component': 'RemoteSelect',
        'x-component-props': {
          fieldNames: {
            label: 'title',
            value: 'id',
          },
          service: {
            resource: 'workflows'
          },
        }
      }
    },
    {
      type: 'integer',
      name: 'status',
      interface: 'select',
      uiSchema: {
        type: 'number',
        title: `{{t("Status", { ns: "${NAMESPACE}" })}}`,
        'x-component': 'Select',
        enum: JobStatusOptions
      }
    },
    {
      name: 'createdAt',
      type: 'date',
      interface: 'createdAt',
      uiSchema: {
        type: 'datetime',
        title: '{{t("Created at")}}',
        'x-component': 'DatePicker',
        'x-component-props': {
          showTime: true,
        },
        'x-read-pretty': true,
      },
    },
  ]
}

const NodeColumn = observer(() => {
  const field = useField<any>();
  return field?.value?.title ?? `#${field.value?.id}`;
});

const WorkflowColumn = observer(() => {
  const field = useField<any>();
  return field?.value?.title ?? `#${field.value?.id}`;
});

const UserColumn = observer(() => {
  const field = useField<any>();
  return field?.value?.nickname ?? field.value?.id;
});

export function WorkflowTodo() {
  return (
    <SchemaComponent
      components={{
        NodeColumn,
        WorkflowColumn,
        UserColumn
      }}
      schema={{
        type: 'void',
        name: uid(),
        'x-component': 'div',
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
              filter: {
                type: 'void',
                title: '{{ t("Filter") }}',
                'x-action': 'filter',
                'x-designer': 'Filter.Action.Designer',
                'x-component': 'Filter.Action',
                'x-component-props': {
                  icon: 'FilterOutlined',
                  useProps: '{{ useFilterActionProps }}',
                },
                'x-align': 'left',
              },
              refresher: {
                type: 'void',
                title: '{{ t("Refresh") }}',
                'x-action': 'refresh',
                'x-component': 'Action',
                'x-designer': 'Action.Designer',
                'x-component-props': {
                  icon: 'ReloadOutlined',
                  useProps: '{{ useRefreshActionProps }}',
                },
                'x-align': 'right',
              },
            },
          },
          table: {
            type: 'array',
            'x-component': 'TableV2',
            'x-component-props': {
              rowKey: 'id',
              useProps: '{{ useTableBlockProps }}',
            },
            properties: {
              node: {
                type: 'void',
                'x-decorator': 'TableV2.Column.Decorator',
                'x-component': 'TableV2.Column',
                title: `{{t("Task", { ns: "${NAMESPACE}" })}}`,
                properties: {
                  node: {
                    'x-component': 'NodeColumn',
                    'x-read-pretty': true,
                  },
                },
              },
              workflow: {
                type: 'void',
                'x-decorator': 'TableV2.Column.Decorator',
                'x-component': 'TableV2.Column',
                title: `{{t("Workflow", { ns: "${NAMESPACE}" })}}`,
                properties: {
                  workflow: {
                    'x-component': 'WorkflowColumn',
                    'x-read-pretty': true,
                  },
                },
              },
              createdAt: {
                type: 'void',
                'x-decorator': 'TableV2.Column.Decorator',
                'x-component': 'TableV2.Column',
                properties: {
                  createdAt: {
                    type: 'number',
                    'x-component': 'CollectionField',
                    'x-read-pretty': true,
                  },
                },
              },
              user: {
                type: 'void',
                'x-decorator': 'TableV2.Column.Decorator',
                'x-component': 'TableV2.Column',
                title: `{{t("Assignee", { ns: "${NAMESPACE}" })}}`,
                properties: {
                  user: {
                    'x-component': 'UserColumn',
                    'x-read-pretty': true,
                  },
                },
              },
              status: {
                type: 'void',
                'x-decorator': 'TableV2.Column.Decorator',
                'x-component': 'TableV2.Column',
                properties: {
                  status: {
                    type: 'number',
                    'x-component': 'CollectionField',
                    'x-read-pretty': true,
                  },
                },
              },
              actions: {
                type: 'void',
                'x-decorator': 'TableV2.Column.Decorator',
                'x-component': 'TableV2.Column',
                title: '{{t("Actions")}}',
                properties: {
                  view: {
                    type: 'void',
                    'x-component': 'Action.Link',
                    title: '{{t("View")}}',
                    properties: {
                      drawer: {
                        'x-component': 'WorkflowTodo.Drawer',
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }}
    />
  )
}

function ActionBarProvider(props) {
  // * status is done:
  //   1. form is this form: show action button, and emphasis used status button
  //   2. form is not this form: hide action bar
  // * status is not done:
  //   1. current user: show action bar
  //   2. not current user: disabled action bar

  const { data: user } = useCurrentUserContext();
  const { status, result, userId } = useRecord();
  const buttonSchema = useFieldSchema();
  const { name } = buttonSchema.parent.toJSON();

  let { children: content } = props;
  if (status) {
    if (!result[name]) {
      content = null;
    }
  } else {
    if (user?.data?.id !== userId) {
      content = null;
    }
  }

  return content;
}

const ManualActionStatusContext = createContext<number | null>(null);

function ManualActionStatusProvider({ value, children }) {
  const { status } = useRecord();
  const button = useField();

  useEffect(() => {
    if (status) {
      button.disabled = true;
      button.visible = status === value;
    }
  }, [status, value]);

  return (
    <ManualActionStatusContext.Provider value={value}>
      {children}
    </ManualActionStatusContext.Provider>
  );
}

function useSubmit() {
  const api = useAPIClient();
  const { setVisible } = useActionContext();
  const { values, submit } = useForm();
  const buttonSchema = useFieldSchema();
  const nextStatus = useContext(ManualActionStatusContext);
  const { service } = useTableBlockContext();
  const { id } = useRecord();
  return {
    async run() {
      await submit();
      const { name } = buttonSchema.parent.parent.toJSON();
      await api.resource('users_jobs').submit({
        filterByTk: id,
        values: {
          status: nextStatus,
          result: { [name]: values }
        }
      });
      setVisible(false);
      service.refresh();
    }
  }
}

function useFlowRecordFromBlock(opts) {
  const { ['x-context-datasource']: dataSource } = useFieldSchema();
  const { execution } = useFlowContext();
  let result = parse(dataSource)({
    $context: execution?.context,
    $jobsMapByNodeId: (execution?.jobs ?? []).reduce((map, job) => Object.assign(map, { [job.nodeId]: job.result }),{})
  });

  return useRequest(() => {
    return Promise.resolve({ data: result })
  }, opts);
}

function FlowContextProvider(props) {
  const api = useAPIClient();
  const { id, node } = useRecord();
  const [flowContext, setFlowContext] = useState<any>(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    api.resource('users_jobs').get?.({
      filterByTk: id,
      appends: ['workflow', 'workflow.nodes', 'execution', 'execution.jobs'],
    })
      .then(({ data }) => {
        const {
          workflow: { nodes = [], ...workflow } = {},
          execution
        } = data?.data ?? {};
        linkNodes(nodes);
        setFlowContext({
          workflow,
          nodes,
          execution
        });
      });
  }, [id]);

  if (!flowContext) {
    return null;
  }

  const upstreams = useAvailableUpstreams(flowContext.nodes.find(item => item.id === node.id));
  const nodeComponents = upstreams.reduce((components, { type }) => Object.assign(components, instructions.get(type).components), {});

  return (
    <FlowContext.Provider value={flowContext}>
      <SchemaComponentOptions components={{ ...nodeComponents }}>
        {props.children}
      </SchemaComponentOptions>
    </FlowContext.Provider>
  );
}

WorkflowTodo.Drawer = function () {
  const ctx = useContext(SchemaComponentContext);
  const { id, node, workflow, status, updatedAt } = useRecord();

  const { schema } = node.config ?? {};

  const statusOption = JobStatusOptionsMap[status];
  const footerSchema = status
    ? {
      date: {
        type: 'void',
        'x-component': 'time',
        'x-component-props': {
          className: css`
            margin-right: .5em;
          `
        },
        'x-content': moment(updatedAt).format('YYYY-MM-DD HH:mm:ss')
      },
      status: {
        type: 'void',
        'x-component': 'Tag',
        'x-component-props': {
          icon: statusOption.icon,
          color: statusOption.color
        },
        'x-content': statusOption.label
      }
    }
    : null;

  return (
    <SchemaComponentContext.Provider value={{ ...ctx, designable: false }}>
      <SchemaComponent
        components={{
          Tag,
          ActionBarProvider,
          ManualActionStatusProvider,
          FlowContextProvider,
          ...customForm.block.components
        }}
        schema={{
          type: 'void',
          name: `drawer-${id}-${status}`,
          'x-component': 'Action.Drawer',
          'x-component-props': {
            className: 'nb-action-popup',
          },
          title: `${workflow.title} - ${node.title ?? `#${node.id}`}`,
          properties: {
            tabs: {
              type: 'void',
              'x-decorator': 'FlowContextProvider',
              'x-component': 'Tabs',
              properties: schema,
            },
            footer: {
              type: 'void',
              'x-component': 'Action.Drawer.Footer',
              properties: footerSchema
            }
          }
        }}
        scope={{
          useSubmit,
          useFlowRecordFromBlock,
          ...customForm.block.scope,
        }}
      />
    </SchemaComponentContext.Provider>
  )
}

WorkflowTodo.Decorator = function ({ children }) {
  const { collections, ...cm } = useCollectionManager();
  const blockProps = {
    collection: 'users_jobs',
    resource: 'users_jobs',
    action: 'list',
    params: {
      pageSize: 20,
      sort: ['-createdAt'],
      appends: ['user', 'node', 'workflow'],
      except: ['workflow.config'],
    },
    rowKey: 'id',
    showIndex: true,
    dragSort: false,
  };

  return (
    <CollectionManagerProvider {...cm} collections={[...collections, nodeCollection, workflowCollection, todoCollection]}>
      <TableBlockProvider {...blockProps}>{children}</TableBlockProvider>
    </CollectionManagerProvider>
  );
}
