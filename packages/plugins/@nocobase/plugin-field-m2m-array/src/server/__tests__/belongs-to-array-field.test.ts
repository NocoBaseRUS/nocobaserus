/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { MockDatabase, MockServer, createMockServer } from '@nocobase/test';
import { Repository } from '@nocobase/database';

describe('belongs to array field', () => {
  let app: MockServer;
  let db: MockDatabase;
  let fieldRepo: Repository;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['field-m2m-array', 'data-source-manager', 'data-source-main', 'error-handler'],
    });
    db = app.db;
    fieldRepo = db.getRepository('fields');
    await db.getRepository('collections').create({
      values: {
        name: 'tags',
        fields: [
          {
            name: 'id',
            type: 'bigInt',
            unique: true,
          },
          {
            name: 'stringCode',
            type: 'string',
            unique: true,
          },
          {
            name: 'title',
            type: 'string',
          },
        ],
      },
    });
    await db.getRepository('collections').create({
      values: {
        name: 'users',
        fields: [
          {
            name: 'id',
            type: 'bigInt',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          {
            name: 'username',
            type: 'string',
          },
          {
            name: 'tag_ids',
            type: 'set',
            dataType: 'array',
            elementType: 'string',
          },
        ],
      },
    });
    // @ts-ignore
    await db.getRepository('collections').load();
    await db.sync();
  });

  afterEach(async () => {
    await db.clean({ drop: true });
    await app.destroy();
  });

  describe('association keys check', async () => {
    it('targetKey is required', async () => {
      try {
        await db.sequelize.transaction(async (transaction) => {
          const field = await fieldRepo.create({
            values: {
              interface: 'mbm',
              collectionName: 'users',
              name: 'tags',
              type: 'belongsToArray',
              foreignKey: 'tag_ids',
              target: 'tags',
            },
            transaction,
          });
          await field.load({ transaction });
        });
      } catch (error) {
        expect(error.message).toContain('Target key is required');
      }
    });

    it('targetKey should exist', async () => {
      try {
        await db.sequelize.transaction(async (transaction) => {
          const field = await fieldRepo.create({
            values: {
              interface: 'mbm',
              collectionName: 'users',
              name: 'tags',
              type: 'belongsToArray',
              foreignKey: 'tag_ids',
              target: 'tags',
              targetKey: 'fake_id',
            },
            transaction,
          });
          await field.load({ transaction });
        });
      } catch (error) {
        expect(error.message).toContain('Target key "fake_id" not found in collection "tags"');
      }
    });

    it('foreign field must be an array or set field', async () => {
      try {
        await db.sequelize.transaction(async (transaction) => {
          const field = await fieldRepo.create({
            values: {
              interface: 'mbm',
              collectionName: 'users',
              name: 'tags',
              type: 'belongsToArray',
              foreignKey: 'username',
              target: 'tags',
              targetKey: 'id',
            },
            transaction,
          });
          await field.load({ transaction });
        });
      } catch (error) {
        expect(error.message).toContain('Foreign key "username" must be an array or set field in collection "users"');
      }
    });

    it('element type of foreign field must be match the type of target field', async () => {
      if (db.sequelize.getDialect() !== 'postgres') {
        return;
      }
      try {
        await db.sequelize.transaction(async (transaction) => {
          const field = await fieldRepo.create({
            values: {
              interface: 'mbm',
              collectionName: 'users',
              name: 'tags',
              type: 'belongsToArray',
              foreignKey: 'tag_ids',
              target: 'tags',
              targetKey: 'id',
            },
            transaction,
          });
          await field.load({ transaction });
        });
      } catch (error) {
        expect(error.message).toContain(
          'The element type "string" of foreign key "tag_ids" does not match the type "bigInt" of target key "id" in collection "tags"',
        );
      }

      expect(
        db.sequelize.transaction(async (transaction) => {
          const field = await fieldRepo.create({
            values: {
              interface: 'mbm',
              collectionName: 'users',
              name: 'tags',
              type: 'belongsToArray',
              foreignKey: 'tag_ids',
              target: 'tags',
              targetKey: 'stringCode',
            },
            transaction,
          });
          await field.load({ transaction });
        }),
      ).resolves.not.toThrow();
    });
  });
});
