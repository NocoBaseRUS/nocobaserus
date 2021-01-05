import { TableOptions } from '@nocobase/database';

export default {
  name: 'actions_permissions',
  title: '表操作权限',
  fields: [
    {
      comment: '程序操作名称（"list", "create" 等）',
      type: 'string',
      name: 'name',
    },
    {
      comment: '操作范围',
      type: 'jsonb',
      name: 'scope'
    },
    {
      type: 'belongsTo',
      name: 'permission',
    },
    {
      type: 'belongsToMany',
      name: 'fields',
      through: 'fields_permissions'
    },
    {
      type: 'hasMany',
      name: 'fields_permissions',
    },
  ],
} as TableOptions;
