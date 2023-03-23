import { Database, ViewFieldInference } from '@nocobase/database';

export default {
  name: 'dbViews',
  actions: {
    async get(ctx, next) {
      const { filterByTk } = ctx.action.params;
      const db = ctx.app.db as Database;
      const fields = await ViewFieldInference.inferFields({
        db,
        viewName: filterByTk,
      });

      ctx.body = {
        fields,
        sources: Object.values(fields)
          .map((field) => field.source)
          .filter(Boolean)
          .map((source) => source.split('.')[0]),
      };

      await next();
    },
    async list(ctx, next) {
      const db = ctx.app.db as Database;
      const dbViews = await db.queryInterface.listViews();
      ctx.body = dbViews.map((dbView) => {
        return {
          ...dbView,
        };
      });

      await next();
    },

    async query(ctx, next) {
      const { resourceIndex } = ctx.action.params;
      const sql = `SELECT *
                   FROM ${resourceIndex}`;
      const results = await ctx.app.db.sequelize.query(sql, { type: 'SELECT' });
      ctx.body = results;
      await next();
    },
  },
};
