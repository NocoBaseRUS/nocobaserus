import { Context } from '@nocobase/actions';

export function createMoveAction(databaseMoveAction) {
  return async function move(ctx: Context, next) {
    const repository = ctx.getCurrentRepository();

    if (repository.move) {
      ctx.body = await repository.move(ctx.action.params);
      await next();
      return;
    }

    if (repository.database) {
      ctx.databaseRepository = repository;
      return databaseMoveAction(ctx, next);
    }

    throw new Error(`Repository can not handle action move for ${ctx.action.resourceName}`);
  };
}
