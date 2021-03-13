import { TableOptions } from '@nocobase/database';

export default {
  name: 'scopes',
  title: '表操作范围',
  developerMode: true,
  internal: true,
  fields: [
    {
      comment: '范围名称',
      type: 'string',
      name: 'title',
      title: '名称',
      component: {
        type: 'string',
        showInTable: true,
        showInForm: true,
      },
    },
    {
      interface: 'json',
      type: 'jsonb',
      name: 'filter',
      title: '条件',
      developerMode: false,
      mode: 'replace',
      defaultValue: {},
      component: {
        type: 'filter',
        showInForm: true,
        "x-linkages": [
          {
            type: "value:schema",
            target: "filter",
            schema: {
              "x-component-props": {
                associatedKey: "{{ $form.values && $form.values.associatedKey }}"
              },
            },
          },
        ],
      },
    },
    {
      interface: 'boolean',
      type: 'boolean',
      name: 'locked',
      title: '锁定',
      defaultValue: false,
      component: {
        showInTable: true,
      }
    },
    {
      type: 'belongsTo',
      name: 'collection',
      targetKey: 'name',
      onDelete: 'CASCADE'
    }
  ],
  views_v2: [
    {
      developerMode: true,
      type: 'table',
      name: 'table',
      title: '全部数据',
      labelField: 'title',
      actions: [
        {
          name: 'create',
          type: 'create',
          title: '新增',
          viewName: 'form',
        },
        {
          name: 'destroy',
          type: 'destroy',
          title: '删除',
        },
      ],
      fields: ['title'],
      detailsOpenMode: 'drawer', // window
      details: ['form'],
      sort: ['id'],
    },
    {
      developerMode: true,
      type: 'form',
      name: 'form',
      title: '表单',
      fields: [
        'title',
        'filter',
      ],
    },
  ],
} as TableOptions;
