/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Database, Repository } from '@nocobase/database';
import { MockServer, createMockServer } from '@nocobase/test';
import compose from 'koa-compose';
import { parseBuilder, parseFieldAndAssociations, queryData } from '../actions/query';

describe('api', () => {
  let app: MockServer;
  let db: Database;
  let repo: Repository;

  beforeAll(async () => {
    app = await createMockServer({
      acl: true,
      plugins: ['users', 'auth', 'data-visualization'],
    });
    db = app.db;

    db.collection({
      name: 'chart_test',
      fields: [
        {
          type: 'bigInt',
          name: 'id',
        },
        {
          type: 'double',
          name: 'price',
        },
        {
          type: 'bigInt',
          name: 'count',
        },
        {
          type: 'string',
          name: 'title',
        },
        {
          type: 'date',
          name: 'createdAt',
        },
      ],
    });
    await db.sync();
    repo = db.getRepository('chart_test');
    await repo.create({
      values: [
        { id: 1, price: 1, count: 1, title: 'title1', createdAt: '2023-02-02' },
        { id: 2, price: 2, count: 2, title: 'title2', createdAt: '2023-01-01' },
      ],
    });
  });

  afterAll(async () => {
    await app.destroy();
  });

  test('query', async () => {
    const ctx = {
      app,
      db,
      action: {
        params: {
          values: {
            collection: 'chart_test',
            measures: [
              {
                field: ['price'],
                alias: 'Price',
              },
              {
                field: ['count'],
                alias: 'Count',
              },
            ],
            dimensions: [
              {
                field: ['title'],
                alias: 'Title',
              },
            ],
          },
        },
      },
    } as any;
    await compose([parseFieldAndAssociations, parseBuilder, queryData])(ctx, async () => {});
    expect(ctx.action.params.values.data).toBeDefined();
  });

  test('query with sort', async () => {
    const ctx = {
      app,
      db,
      action: {
        params: {
          values: {
            collection: 'chart_test',
            measures: [
              {
                field: ['price'],
                aggregation: 'sum',
                alias: 'Price',
              },
            ],
            dimensions: [
              {
                field: ['title'],
                alias: 'Title',
              },
              {
                field: ['createdAt'],
                format: 'YYYY-MM',
              },
            ],
            orders: [{ field: 'createdAt', order: 'asc' }],
          },
        },
      },
    } as any;
    await compose([parseFieldAndAssociations, parseBuilder, queryData])(ctx, async () => {});
    expect(ctx.action.params.values.data).toBeDefined();
    expect(ctx.action.params.values.data).toMatchObject([{ createdAt: '2023-01' }, { createdAt: '2023-02' }]);
  });

  test('datetime format with timezone', async () => {
    const dialect = db.sequelize.getDialect();
    if (dialect === 'sqlite') {
      await repo.create({
        values: {
          id: 3,
          createdAt: '2024-05-14 19:32:30.175 +00:00',
        },
      });
    } else if (dialect === 'postgres') {
      await repo.create({
        values: {
          id: 3,
          createdAt: '2024-05-14 19:32:30.175+00',
        },
      });
    } else {
      expect(true).toBe(true);
      return;
    }
    const ctx = {
      app,
      db,
      timezone: '+08:25',
      action: {
        params: {
          values: {
            collection: 'chart_test',
            measures: [
              {
                field: ['id'],
                aggregation: 'count',
              },
            ],
            dimensions: [
              {
                field: ['createdAt'],
                format: 'YYYY-MM-DD',
              },
            ],
            filter: {
              id: 3,
            },
          },
        },
      },
    } as any;
    await compose([parseFieldAndAssociations, parseBuilder, queryData])(ctx, async () => {});
    expect(ctx.action.params.values.data).toBeDefined();
    expect(ctx.action.params.values.data).toMatchObject([{ createdAt: '2024-05-15' }]);
  });
});
