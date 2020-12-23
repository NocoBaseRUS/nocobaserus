import { TableOptions } from '@nocobase/database';

export default {
  name: 'roles',
  title: '权限配置',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'string',
      name: 'name',
    },
    {
      type: 'json',
      name: 'options',
    },
  ],
  actions: [
    {
      type: 'list',
      name: 'list',
      title: '查看',
    },
    {
      type: 'create',
      name: 'create',
      title: '新增',
      viewName: 'form',
    },
    {
      type: 'update',
      name: 'update',
      title: '编辑',
      viewName: 'form',
    },
    {
      type: 'destroy',
      name: 'destroy',
      title: '删除',
    },
  ],
  views: [
    {
      type: 'form',
      name: 'form',
      title: '表单',
      template: 'DrawerForm',
    },
    {
      type: 'form',
      name: 'permission_form',
      title: '数据表配置',
      template: 'PermissionForm',
    },
    {
      type: 'details',
      name: 'details',
      title: '详情',
      template: 'Details',
      actionNames: ['update'],
    },
    {
      type: 'simple',
      name: 'simple',
      title: '简易模式',
      template: 'SimpleTable',
      actionNames: ['create', 'destroy'],
      detailsViewName: 'details',
      updateViewName: 'permission_form',
    },
    {
      type: 'simple',
      name: 'simple2',
      title: '简易模式',
      template: 'SimpleTable',
      detailsViewName: 'details',
      updateViewName: 'permission_form',
      paginated: false,
    },
    {
      type: 'table',
      name: 'table',
      title: '列表',
      template: 'Table',
      actionNames: ['create', 'destroy'],
      default: true,
    },
  ],
  tabs: [
    {
      type: 'details',
      name: 'details',
      title: '详情',
      viewName: 'details',
      default: true,
    },
    {
      type: 'details',
      name: 'collections',
      title: '数据表权限',
      viewName: 'simple',
    },
  ],
} as TableOptions;
