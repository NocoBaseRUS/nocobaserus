import { MockServer } from '@nocobase/test';
import { Database } from '@nocobase/database';
import { createApp } from '../index';
import lodash from 'lodash';

describe('tree', () => {
  let app: MockServer;
  let agent;

  let db: Database;
  beforeEach(async () => {
    app = await createApp();

    agent = app.agent();
    db = app.db;
  });

  afterEach(async () => {
    await app.destroy();
  });

  it('should list tree', async () => {
    await db.getRepository('collections').create({
      values: {
        name: 'categories',
        tree: 'adjacency-list',
        fields: [
          { type: 'string', name: 'name' },
          {
            type: 'belongsTo',
            name: 'parent',
            foreignKey: 'parent_id',
            treeParent: true,
            target: 'categories',
          },
          {
            type: 'hasMany',
            name: 'children',
            foreignKey: 'parent_id',
            treeChildren: true,
            target: 'categories',
          },
        ],
      },
      context: {},
    });

    const c1 = await db.getRepository('categories').create({
      values: { name: 'c1' },
    });

    await db.getRepository('categories').create({
      values: [
        {
          name: 'c2',
          parent: {
            name: 'c1',
            id: c1.get('id'),
          },
        },
      ],
    });

    const listResponse = await agent.resource('categories').list({
      appends: ['parent'],
    });

    expect(listResponse.statusCode).toBe(200);

    console.log(listResponse.body);
  });
});
