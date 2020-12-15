import Api from '../../../server/src';
import dotenv from 'dotenv';
import path from 'path';
import actions from '../../../actions/src';
import associated from '../../../actions/src/middlewares/associated';
import { Op } from 'sequelize';

const sync = {
  force: true,
  alter: {
    drop: true,
  },
};

console.log('process.env.NOCOBASE_ENV', process.env.NOCOBASE_ENV);

dotenv.config();

const api = Api.create({
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
    logging: false,
    define: {},
    sync,
  },
  resourcer: {
    prefix: '/api',
  },
});

api.resourcer.use(async (ctx: actions.Context, next) => {
  const { resourceName } = ctx.action.params;
  const table = ctx.db.getTable(resourceName);
  // ctx.state.developerMode = {[Op.not]: null};
  ctx.state.developerMode = false;
  if (table && table.hasField('developerMode') && ctx.state.developerMode === false) {
    ctx.action.setParam('filter.developerMode', ctx.state.developerMode);
  }
  if (table) {
    const except = [];
    for (const [name, field] of table.getFields()) {
      if (field.options.hidden) {
        except.push(field.options.name);
      }
    }
    if (except.length) {
      ctx.action.setParam('fields.except', except);
    }
  }
  await next();
});
api.resourcer.use(associated);
api.resourcer.registerActionHandlers({...actions.common, ...actions.associate});

(async () => {
  await api
    .plugins([
      [path.resolve(__dirname, '../../../plugin-collections'), {}],
      [path.resolve(__dirname, '../../../plugin-pages'), {}],
      [path.resolve(__dirname, '../../../plugin-users'), {}],
      // [path.resolve(__dirname, '../../../plugin-permissions'), {}],
      // [path.resolve(__dirname, '../../../plugin-file-manager'), {}],
    ]);

  // await api.database.getModel('collections').load();

  api.listen(process.env.HTTP_PORT, () => {
    console.log(`http://localhost:${process.env.HTTP_PORT}/`);
  });
})();
