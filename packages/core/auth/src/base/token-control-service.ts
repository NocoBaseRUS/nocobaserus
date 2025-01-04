/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

export interface ITokenControlConfig {
  tokenExpirationTime: string;
  sessionExpirationTime: string;
  expiredTokenRefreshLimit: string;
}

export type TokenInfo = {
  jti: string;
  userId: number;
  issuedTime: EpochTimeStamp;
  signInTime: EpochTimeStamp;
  renewed: boolean;
};

export type JTIStatus = 'valid' | 'inactive' | 'blocked' | 'missing' | 'renewed' | 'expired';
export interface ITokenControlService {
  getConfig(): Promise<ITokenControlConfig>;
  setConfig(config: ITokenControlConfig): Promise<any>;
  renew(jti: string): Promise<TokenInfo>;
  add({ userId }: { userId: number }): Promise<TokenInfo>;
  set(id: string, value: Partial<TokenInfo>): Promise<void>;
  removeLoginExpiredTokens(userId: number): Promise<void>;
}
