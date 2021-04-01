import { TableOptions } from '@nocobase/database';

export default {
  name: 'views_actions_v2',
  title: '视图操作配置',
  internal: true,
  // model: 'BaseModelV2',
  developerMode: true,
  createdAt: false,
  updatedAt: false,
  fields: [
    {
      interface: 'string',
      type: 'string',
      name: 'title',
      title: '按钮名称',
      component: {
        type: 'string',
      },
    },
    {
      interface: 'radio',
      type: 'string',
      name: 'type',
      title: '操作类型',
      dataSource: [
        { label: '筛选', value: 'filter' },
        { label: '打印', value: 'print' },
        { label: '导出', value: 'export' },
        { label: '新增', value: 'create' },
        { label: '编辑', value: 'update' },
        { label: '删除', value: 'destroy' },
      ],
      component: {
        type: 'radio',
        'x-linkages': [
          {
            "type": "value:visible",
            "target": "view",
            "condition": "{{ $self.value === 'create' || $self.value === 'update' }}"
          },
          // {
          //   "type": "value:visible",
          //   "target": "fields",
          //   "condition": "{{ $self.value === 'filter' }}"
          // },
        ],
      },
    },
    {
      interface: 'string',
      type: 'string',
      name: 'name',
      title: '操作ID',
      component: {
        type: 'string',
      },
    },
    {
      interface: 'linkTo',
      type: 'belongsTo',
      name: 'view',
      target: 'views_v2',
      title: '操作绑定的视图',
      labelField: 'title',
      valueField: 'id',
      multiple: false,
      required: true,
      component: {
        type: 'drawerSelect',
        'x-component-props': {
          viewName: 'views_v2.table',
          resourceName: 'views_v2',
          labelField: 'title',
          valueField: 'id',
        },
      },
    },
  ],
  views_v2: [
    {
      developerMode: true,
      type: 'table',
      name: 'table',
      title: '全部数据',
      labelField: 'title',
      draggable: true,
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
      fields: [
        'title',
        'type',
      ],
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
        'type',
        'view'
      ],
    },
  ],
} as TableOptions;
