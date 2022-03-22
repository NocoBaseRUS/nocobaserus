import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'applications',
  model: 'ApplicationModel',
  autoGenId: false,
  fields: [
    {
      type: 'string',
      name: 'name',
      primaryKey: true,
    },
    {
      type: 'hasMany',
      name: 'plugins',
      target: 'applicationPlugins',
      foreignKey: 'applicationName',
    },
  ],
});
