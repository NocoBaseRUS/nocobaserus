import { getDateVars, parseFilter } from '@nocobase/utils';
import lodash from 'lodash';

function getUser(ctx) {
  return async ({ fields }) => {
    const userFields = fields.filter((f) => f && ctx.db.getFieldByPath('users.' + f));
    ctx.logger?.info('filter-parse: ', { userFields });
    if (!ctx.state.currentUser) {
      return;
    }
    if (!userFields.length) {
      return;
    }
    const user = await ctx.db.getRepository('users').findOne({
      filterByTk: ctx.state.currentUser.id,
      fields: userFields,
    });
    ctx.logger?.info('filter-parse: ', {
      $user: user?.toJSON(),
    });
    return user;
  };
}

function isNumeric(str: any) {
  if (typeof str === 'number') return true;
  if (typeof str != 'string') return false;
  return !isNaN(str as any) && !isNaN(parseFloat(str));
}

export const parseVariables = async (ctx, next) => {
  const reqPath = ctx.method === 'POST' ? 'values.filter' : 'filter';
  const filter = lodash.get(ctx.action.params, reqPath);
  if (!filter) {
    return next();
  }
  const parsedFilter = await parseFilter(filter, {
    timezone: ctx.get('x-timezone'),
    now: new Date().toISOString(),
    getField: (path: string) => {
      const fieldPath = path
        .split('.')
        .filter((p) => !p.startsWith('$') && !isNumeric(p))
        .join('.');
      const { resourceName } = ctx.action;
      return ctx.db.getFieldByPath(`${resourceName}.${fieldPath}`);
    },
    vars: {
      $system: {
        now: new Date().toISOString(),
      },
      $date: getDateVars(),
      $user: getUser(ctx),
    },
  });
  lodash.set(ctx.action.params, reqPath, parsedFilter);
  await next();
};
