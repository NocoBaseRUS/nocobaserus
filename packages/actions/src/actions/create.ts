import { Context } from '..';
import { getRepositoryFromParams } from './utils';

export default async function create(ctx: Context, next) {
  const repository = getRepositoryFromParams(ctx);
  const instance = await repository.create({
    values: ctx.action.params.values,
  });
  ctx.body = instance;
}
