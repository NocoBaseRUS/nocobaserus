import { Context } from '@nocobase/actions';
import { CustomRequestCollectionName } from '../constants';

export const getConfiguration = async (ctx: Context, next) => {
  const {
    params: { type },
  } = ctx.action;

  const repo = ctx.db.getRepository(CustomRequestCollectionName);
  const record = await repo.findOne({
    filter: {
      type,
    },
  });

  ctx.body = record;
  return next();
};

export const setConfiguration = async (ctx: Context, next) => {
  const { params: values } = ctx.action;
  const repo = ctx.db.getRepository(CustomRequestCollectionName);
  const record = await repo.findOne({
    filter: {
      type: values.type,
    },
  });

  if (record) {
    await repo.update({
      values,
      filter: {
        type: values.type,
      },
    });
  } else {
    await repo.create({
      values,
    });
  }

  ctx.body = 'ok';
  return next();
};
