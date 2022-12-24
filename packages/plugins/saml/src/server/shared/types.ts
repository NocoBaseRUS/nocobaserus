export interface SAMLProvider {
  title?: string;
  clientId?: string;
  issuer?: string;
  loginUrl?: string;
  certificate?: string;
  redirectUrl?: string;
  enabled?: boolean;
}
