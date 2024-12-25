/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Collection, Model } from '@nocobase/database';
import { Auth, AuthConfig } from '../auth';
import { JwtService } from './jwt-service';
import { IAccessControlService } from './access-control-service';
import { Cache } from '@nocobase/cache';

/**
 * BaseAuth
 * @description A base class with jwt provide some common methods.
 */
export class BaseAuth extends Auth {
  protected userCollection: Collection;

  constructor(
    config: AuthConfig & {
      userCollection: Collection;
    },
  ) {
    const { userCollection } = config;
    super(config);
    this.userCollection = userCollection;
  }

  get userRepository() {
    return this.userCollection.repository;
  }

  /**
   * @internal
   */
  get jwt(): JwtService {
    return this.ctx.app.authManager.jwt;
  }

  get accessController(): IAccessControlService {
    return this.ctx.app.authManager.accessController;
  }

  set user(user: Model) {
    this.ctx.state.currentUser = user;
  }

  get user() {
    return this.ctx.state.currentUser;
  }

  /**
   * @internal
   */

  getCacheKey(userId: number) {
    return `auth:${userId}`;
  }

  /**
   * @internal
   */
  validateUsername(username: string) {
    return /^[^@.<>"'/]{1,50}$/.test(username);
  }

  async check() {
    const token = this.ctx.getBearerToken();
    if (!token) {
      throw new Error('Empty token');
    }
    try {
      const { status, payload } = await this.jwt.verify(token);
      const { userId, roleName, iat, temp, jti } = payload;
      if (roleName) {
        this.ctx.res.setHeader('X-role', roleName);
      }
      const checkAccessResult = await this.accessController.canAccess(jti);
      if (checkAccessResult.allow === false) {
        this.ctx.res.setHeader('X-Authorized-Failed-Type', checkAccessResult.reason);
        throw new Error(checkAccessResult.reason);
      }
      const cache = this.ctx.cache as Cache;
      const user = await cache.wrap(this.getCacheKey(userId), () =>
        this.userRepository.findOne({
          filter: {
            id: userId,
          },
          raw: true,
        }),
      );
      if (temp && user.passwordChangeTz && iat * 1000 < user.passwordChangeTz) {
        throw new Error('Password expired');
      }

      if (status === 'expired') {
        const result = await this.accessController.refreshAccess(jti);
        if (result.status === 'failed') {
          this.ctx.res.setHeader('X-Authorized-Failed-Type', result.reason);
        } else {
          const newToken = this.jwt.sign({ userId, temp, roleName }, { jwtid: result.id });
          this.ctx.res.setHeader('x-new-token', newToken);
        }
        throw new Error('Unauthorized');
      } else if (status === 'valid') {
        this.accessController.updateAccess(jti, { lastAccessTime: Date.now() });
        return user;
      } else {
        throw new Error('Unauthorized');
      }
    } catch (err) {
      this.ctx.logger.error(err, { method: 'check' });
      throw new Error('Unauthorized');
    }
  }

  async validate(): Promise<Model> {
    return null;
  }

  async signIn() {
    let user: Model;
    try {
      user = await this.validate();
    } catch (err) {
      this.ctx.throw(err.status || 401, err.message);
    }
    if (!user) {
      this.ctx.throw(401, 'Unauthorized');
    }
    const token = this.jwt.sign({
      userId: user.id,
      temp: true,
    });
    return {
      user,
      token,
    };
  }

  async signOut(): Promise<any> {
    const token = this.ctx.getBearerToken();
    if (!token) {
      return;
    }
    const { userId } = await this.jwt.decode(token);
    await this.ctx.app.emitAsync('cache:del:roles', { userId });
    await this.ctx.cache.del(this.getCacheKey(userId));
    return await this.jwt.block(token);
  }
}
