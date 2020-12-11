import { TableOptions } from "@nocobase/database";

export default {
  name: 'posts',
  tableName: 'actions__posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'string',
      name: 'status',
      defaultValue: 'publish',
    },
    {
      type: 'date',
      name: 'published_at'
    },
    {
      type: 'belongsTo',
      name: 'user',
    },
    {
      type: 'hasMany',
      name: 'comments',
    },
    {
      type: 'belongsToMany',
      name: 'tags',
    },
    {
      type: 'sort',
      name: 'sort'
    },
    {
      type: 'sort',
      name: 'sort_in_status',
      scope: ['status']
    },
    {
      type: 'sort',
      name: 'sort_in_user',
      scope: ['user']
    },
    {
      type: 'json',
      name: 'meta'
    }
  ],
  scopes: {
    customTitle: (title, ctx) => {
      return {
        where: {
          title: title,
        },
      }
    }
  }
} as TableOptions;
