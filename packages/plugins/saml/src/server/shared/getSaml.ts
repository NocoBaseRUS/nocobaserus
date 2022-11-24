import { SAML, SamlConfig } from '@node-saml/node-saml';
import { SAMLProvider } from './types';

export const getSaml = (provider: SAMLProvider) => {
  const options: SamlConfig = {
    entryPoint: provider.loginUrl,
    issuer: provider.issuer,
    cert: provider.certificate,
  };

  return new SAML(options);
};
