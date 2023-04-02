import Database, { Repository, ViewCollection } from '@nocobase/database';
import Application from '@nocobase/server';
import { createApp } from '../index';

describe('view collection', function () {
  let db: Database;
  let app: Application;

  let collectionRepository: Repository;

  let fieldsRepository: Repository;

  beforeEach(async () => {
    app = await createApp({
      database: {
        tablePrefix: '',
      },
    });

    db = app.db;

    collectionRepository = db.getCollection('collections').repository;
    fieldsRepository = db.getCollection('fields').repository;
  });

  afterEach(async () => {
    await app.destroy();
  });

  it('should support view with dot field', async () => {
    const dropViewSQL = `DROP VIEW IF EXISTS test_view`;
    await db.sequelize.query(dropViewSQL);
    const viewSQL = `CREATE VIEW test_view AS select 1+1 as "dot.results"`;
    await db.sequelize.query(viewSQL);

    await collectionRepository.create({
      values: {
        name: 'view_collection',
        viewName: 'test_view',
        fields: [{ type: 'string', name: 'dot_result', field: 'dot.results' }],
        schema: db.inDialect('postgres') ? 'public' : undefined,
      },
      context: {},
    });

    const viewCollection = db.getCollection('view_collection');

    const results = await viewCollection.repository.find();
    expect(results.length).toBe(1);
  });

  it('should support view with uppercase field in underscored env', async () => {
    if (!db.options.underscored) {
      return;
    }

    const dropViewSQL = `DROP VIEW IF EXISTS test_view`;
    await db.sequelize.query(dropViewSQL);
    const viewSQL = `CREATE VIEW test_view AS select 1+1 as "Uppercase"`;
    await db.sequelize.query(viewSQL);

    await collectionRepository.create({
      values: {
        name: 'view_collection',
        viewName: 'test_view',
        isView: true,
        fields: [{ type: 'string', name: 'Uppercase', field: 'Uppercase' }],
        schema: db.inDialect('postgres') ? 'public' : undefined,
      },
      context: {},
    });

    const viewCollection = db.getCollection('view_collection');

    expect(viewCollection.model.rawAttributes['Uppercase'].field).toEqual('Uppercase');
    const results = await viewCollection.repository.find();
    expect(results.length).toBe(1);
  });

  it('should create view collection by view name', async () => {
    const dropViewSQL = `DROP VIEW IF EXISTS test_view`;
    await db.sequelize.query(dropViewSQL);
    const viewSQL = `CREATE VIEW test_view AS select 1+1 as result`;
    await db.sequelize.query(viewSQL);

    await collectionRepository.create({
      values: {
        name: 'view_collection',
        viewName: 'test_view',
        fields: [{ type: 'string', name: 'result' }],
        schema: db.inDialect('postgres') ? 'public' : undefined,
      },
      context: {},
    });

    const viewCollection = db.getCollection('view_collection');
    expect(viewCollection).toBeInstanceOf(ViewCollection);

    const results = await viewCollection.repository.find();
    expect(results.length).toBe(1);
  });

  it('should destroy collection view', async () => {
    const dropViewSQL = `DROP VIEW IF EXISTS test_view`;
    await db.sequelize.query(dropViewSQL);
    const viewSQL = `CREATE VIEW test_view AS select 1+1 as result`;
    await db.sequelize.query(viewSQL);

    await collectionRepository.create({
      values: {
        name: 'view_collection',
        viewName: 'test_view',
        fields: [{ type: 'string', name: 'result' }],
      },
      context: {},
    });

    expect(
      await fieldsRepository.findOne({
        filter: {
          collectionName: 'view_collection',
          name: 'result',
        },
      }),
    ).toBeTruthy();

    await fieldsRepository.destroy({
      filter: {
        collectionName: 'view_collection',
        name: 'result',
      },
      context: {},
    });

    expect(
      await fieldsRepository.findOne({
        filter: {
          collectionName: 'view_collection',
          name: 'result',
        },
      }),
    ).toBeFalsy();

    await collectionRepository.destroy({
      filterByTk: 'view_collection',
    });

    expect(db.getCollection('view_collection')).toBeUndefined();
  });
});
