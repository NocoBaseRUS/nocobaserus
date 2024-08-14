/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { MockDatabase, MockServer, createMockServer } from '@nocobase/test';
import { OriginRecord, SyncDataType, UserDataResource, UserDataResourceManager } from '../user-data-resource-manager';

class MockUsersResource extends UserDataResource {
  name = 'mock-users';
  accepts: SyncDataType[] = ['user'];
  data = [];

  async update(record: OriginRecord, resourcePk: number) {
    this.data[resourcePk] = record.metaData;
  }

  async create(record: OriginRecord) {
    this.data.push(record.metaData);
    return this.data.length - 1;
  }
}

class ErrorResource extends UserDataResource {
  async update() {}
  async create() {
    return 0;
  }
}

describe('user-data-resource-manager', () => {
  let app: MockServer;
  let db: MockDatabase;
  let resourceManager: UserDataResourceManager;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['user-data-sync'],
    });
    db = app.db;
    resourceManager = new UserDataResourceManager();
    resourceManager.db = db;
  });

  afterEach(async () => {
    await db.clean({ drop: true });
    await app.destroy();
  });

  it('register resource error', async () => {
    try {
      const errResource = new ErrorResource(db, app.logger);
      expect(resourceManager.registerResource(errResource)).toThrowError(
        '"name" for user data synchronize resource is required',
      );
      const errResource2 = new ErrorResource(db, app.logger);
      errResource2.name = 'error';
      expect(resourceManager.registerResource(errResource2)).toThrowError(
        '"accepts" for user data synchronize resource is required',
      );
    } catch (error) {
      // ...
    }
  });

  it('register resource in order', async () => {
    const usersResource = new MockUsersResource(db, app.logger);
    resourceManager.registerResource(usersResource, { after: 'mock-users2' });
    const usersResource2 = new MockUsersResource(db, app.logger);
    usersResource2.name = 'mock-users2';
    resourceManager.registerResource(usersResource2);
    const nodes = resourceManager.resources.nodes;
    expect(nodes.length).toBe(2);
    expect(nodes).toEqual([usersResource2, usersResource]);
  });

  it('create for a resource', async () => {
    const mockUsersResource = new MockUsersResource(db, app.logger);
    resourceManager.registerResource(mockUsersResource);
    await resourceManager.updateOrCreate({
      sourceName: 'test',
      dataType: 'user',
      records: [
        {
          id: 1,
          nickname: 'test',
        },
      ],
      uniqueKey: 'id',
    });
    expect(mockUsersResource.data.length).toBe(1);
    expect(mockUsersResource.data[0]).toMatchObject({
      id: 1,
      nickname: 'test',
    });
    const originRecords = await resourceManager.findOriginRecords({
      sourceName: 'test',
      dataType: 'user',
      sourceUks: [1],
    });
    expect(originRecords.length).toBe(1);
    expect(originRecords[0]).toMatchObject({
      sourceName: 'test',
      dataType: 'user',
      sourceUk: '1',
      metaData: {
        id: 1,
        nickname: 'test',
      },
      resources: [
        {
          resource: 'mock-users',
          resourcePk: '0',
        },
      ],
    });
  });

  it('update for a resource', async () => {
    const mockUsersResource = new MockUsersResource(db, app.logger);
    resourceManager.registerResource(mockUsersResource);
    await resourceManager.updateOrCreate({
      sourceName: 'test',
      dataType: 'user',
      records: [
        {
          id: 1,
          nickname: 'test',
        },
      ],
      uniqueKey: 'id',
    });
    expect(mockUsersResource.data.length).toBe(1);
    expect(mockUsersResource.data[0]).toMatchObject({
      id: 1,
      nickname: 'test',
    });
    await resourceManager.updateOrCreate({
      sourceName: 'test',
      dataType: 'user',
      records: [
        {
          id: 1,
          nickname: 'test2',
        },
      ],
      uniqueKey: 'id',
    });
    expect(mockUsersResource.data.length).toBe(1);
    expect(mockUsersResource.data[0]).toMatchObject({
      id: 1,
      nickname: 'test2',
    });
    const originRecords = await resourceManager.findOriginRecords({
      sourceName: 'test',
      dataType: 'user',
      sourceUks: [1],
    });
    expect(originRecords.length).toBe(1);
    expect(originRecords[0]).toMatchObject({
      sourceName: 'test',
      dataType: 'user',
      sourceUk: '1',
      metaData: {
        id: 1,
        nickname: 'test2',
      },
      lastMetaData: {
        id: 1,
        nickname: 'test',
      },
    });
  });

  it('should update by associate resource', async () => {
    const mockUsersResource = new MockUsersResource(db, app.logger);
    resourceManager.registerResource(mockUsersResource);
    const mockUsersResource2 = new MockUsersResource(db, app.logger);
    mockUsersResource2.name = 'mock-users2';
    mockUsersResource2.accepts = [
      {
        dataType: 'user',
        associateResource: 'mock-users',
      },
    ];
    resourceManager.registerResource(mockUsersResource2, { after: 'mock-users' });
    const spyCreate1 = vi.spyOn(mockUsersResource, 'create');
    const spyUpdate1 = vi.spyOn(mockUsersResource, 'update');
    const spyCreate2 = vi.spyOn(mockUsersResource2, 'create');
    const spyUpdate2 = vi.spyOn(mockUsersResource2, 'update');
    await resourceManager.updateOrCreate({
      sourceName: 'test',
      dataType: 'user',
      records: [
        {
          id: 1,
          nickname: 'test',
        },
      ],
      uniqueKey: 'id',
    });
    expect(spyCreate1).toBeCalledTimes(1);
    expect(spyUpdate1).toBeCalledTimes(0);
    expect(spyCreate2).toBeCalledTimes(0);
    expect(spyUpdate2).toBeCalledTimes(1);
  });
});
