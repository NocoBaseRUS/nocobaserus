import { Context } from '@nocobase/actions';
import { createOIDCClient } from '../shared/createOIDCClient';
import { OIDCProvider } from '../shared/types';

export const getAuthUrl = async (ctx: Context, next) => {
  const {
    params: { values },
  } = ctx.action;
  const providerRepo = ctx.db.getRepository('oidcProviders');
  const record = await providerRepo.findOne({
    filter: {
      clientId: values.clientId,
    },
  });
  const provider: OIDCProvider = record.toJSON();
  const client = await createOIDCClient(provider);

  ctx.body = client.authorizationUrl({
    nonce: ctx.OIDC_NONCE,
    scope: 'openid profile',
  });

  return next();
};
