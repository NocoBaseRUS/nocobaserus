import { Context } from '@nocobase/actions';
import UiSchemaRepository from '../repository';
import lodash from 'lodash';

const getRepositoryFromCtx = (ctx: Context) => {
  return ctx.db.getCollection('uiSchemas').repository as UiSchemaRepository;
};

const callRepositoryMethod = (method, paramsKey: 'resourceIndex' | 'values') => {
  return async (ctx, next) => {
    const params = lodash.get(ctx.action.params, paramsKey);

    const repository = getRepositoryFromCtx(ctx);
    const returnValue = await repository[method](params);

    ctx.body = returnValue || {
      result: 'ok',
    };

    await next();
  };
};

export const uiSchemaActions = {
  getJsonSchema: callRepositoryMethod('getJsonSchema', 'resourceIndex'),
  getProperties: callRepositoryMethod('getProperties', 'resourceIndex'),
  insert: callRepositoryMethod('insert', 'values'),
  remove: callRepositoryMethod('remove', 'resourceIndex'),
  patch: callRepositoryMethod('patch', 'values'),
  clearAncestor: callRepositoryMethod('clearAncestor', 'resourceIndex'),

  async insertAdjacent(ctx: Context, next) {
    const { resourceIndex, position, values, removeParentsIfNoChildren, breakRemoveOn } = ctx.action.params;
    const repository = getRepositoryFromCtx(ctx);

    ctx.body = await repository.insertAdjacent(position, resourceIndex, values, {
      removeParentsIfNoChildren,
      breakRemoveOn,
    });

    await next();
  },

  insertBeforeBegin: insertPositionActionBuilder('beforeBegin'),
  insertAfterBegin: insertPositionActionBuilder('afterBegin'),
  insertBeforeEnd: insertPositionActionBuilder('beforeEnd'),
  insertAfterEnd: insertPositionActionBuilder('afterEnd'),
};

function insertPositionActionBuilder(position: 'beforeBegin' | 'afterBegin' | 'beforeEnd' | 'afterEnd') {
  return async function (ctx: Context, next) {
    const { resourceIndex, values, removeParentsIfNoChildren, breakRemoveOn } = ctx.action.params;
    const repository = getRepositoryFromCtx(ctx);
    ctx.body = await repository.insertAdjacent(position, resourceIndex, values, {
      removeParentsIfNoChildren,
      breakRemoveOn,
    });
    await next();
  };
}
