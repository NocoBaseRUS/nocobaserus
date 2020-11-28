import { TableOptions } from '@nocobase/database';
import FieldModel from '../models/field';
import { options } from '../interfaces';

export default {
  name: 'fields',
  title: '字段配置',
  sortable: true,
  model: FieldModel,
  fields: [
    {
      interface: 'sort',
      type: 'integer',
      name: 'sort',
      title: '排序',
      defaultValue: 1,
      component: {
        type: 'sort',
        className: 'drag-visible',
        width: 60,
        showInTable: true,
      },
    },
    {
      interface: 'string',
      type: 'string',
      name: 'title',
      title: '字段名称',
      component: {
        type: 'string',
        className: 'drag-visible',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'string',
      type: 'string',
      name: 'name',
      title: '标识',
      required: true,
      component: {
        type: 'string',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'select',
      type: 'string',
      name: 'interface',
      title: '字段类型',
      // TODO(bug): 这个配置项会导致报错，层级太深暂时先注释
      // options,
      component: {
        type: 'select',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'string',
      type: 'string',
      name: 'type',
      title: '数据类型',
      component: {
        type: 'string',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'number',
      type: 'integer',
      name: 'parent_id',
      title: '所属分组',
      component: {
        type: 'number',
      },
    },
    {
      interface: 'linkTo',
      multiple: false,
      type: 'belongsTo',
      name: 'parent',
      title: '所属分组',
      target: 'fields',
      foreignKey: 'parent_id',
      targetKey: 'id',
      component: {
        type: 'drawerSelect',
      },
    },
    {
      interface: 'linkTo',
      multiple: true,
      type: 'hasMany',
      name: 'children',
      title: '子字段',
      target: 'fields',
      foreignKey: 'parent_id',
      sourceKey: 'id',
      component: {
        type: 'drawerSelect',
      },
    },
    {
      interface: 'string',
      type: 'virtual',
      name: 'component.tooltip',
      title: '提示信息',
      component: {
        type: 'string',
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'boolean',
      type: 'boolean',
      name: 'required',
      title: '必填项',
      component: {
        type: 'checkbox',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'boolean',
      type: 'virtual',
      name: 'component.showInTable',
      title: '显示在表格中',
      component: {
        type: 'checkbox',
        tooltip: '若勾选，该字段将作为一列显示在数据表里',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'boolean',
      type: 'virtual',
      name: 'component.showInForm',
      title: '显示在表单中',
      component: {
        type: 'checkbox',
        tooltip: '若勾选，该字段将出现在表单中',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'boolean',
      type: 'virtual',
      name: 'component.showInDetail',
      title: '显示在详情中',
      component: {
        type: 'checkbox',
        tooltip: '若勾选，该字段将出现在详情中',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'linkTo',
      type: 'belongsTo',
      name: 'collection',
      title: '所属数据表',
      target: 'collections',
      targetKey: 'name',
      component: {
        type: 'drawerSelect',
      },
    },
    {
      interface: 'json',
      type: 'json',
      name: 'component',
      title: '前端组件',
      defaultValue: {},
      component: {
        type: 'hidden',
      },
    },
    {
      interface: 'json',
      type: 'json',
      name: 'options',
      title: '配置信息',
      defaultValue: {},
      component: {
        type: 'hidden',
      },
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
      title: '创建',
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
      type: 'details',
      name: 'details',
      title: '详情',
      template: 'Details',
      actionNames: ['update'],
    },
    {
      type: 'table',
      name: 'simple',
      title: '简易模式',
      template: 'SimpleTable',
      default: true,
      actionNames: ['create', 'destroy'],
      detailsViewName: 'details',
      updateViewName: 'form',
      paginated: false,
    },
    {
      type: 'table',
      name: 'table',
      title: '列表',
      template: 'Table',
      actionNames: ['create', 'destroy'],
    },
  ],
} as TableOptions;
