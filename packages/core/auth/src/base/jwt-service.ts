import jwt, { SignOptions } from 'jsonwebtoken';

export interface JwtOptions {
  secret: string;
  expiresIn?: string;
}

export type SignPayload = Record<string, any>;

export class JwtService {
  constructor(protected options: JwtOptions) {
    const { secret, expiresIn } = options || {};
    this.options = {
      secret: secret || process.env.APP_KEY,
      expiresIn: expiresIn || process.env.JWT_EXPIRES_IN || '7d',
    };
  }

  private expiresIn() {
    return this.options.expiresIn;
  }

  private secret() {
    return this.options.secret;
  }

  sign(payload: SignPayload, options?: SignOptions) {
    return jwt.sign(payload, this.secret(), { expiresIn: this.expiresIn(), ...options });
  }

  decode(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secret(), (err: any, decoded: any) => {
        if (err) {
          return reject(err);
        }

        resolve(decoded);
      });
    });
  }
}
