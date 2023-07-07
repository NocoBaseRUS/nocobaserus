import { uid } from '@nocobase/utils';
import { Database, mockDatabase, ViewFieldInference } from '../../index';
import { ViewCollection } from '../../view-collection';

describe('create view', () => {
  let db: Database;

  beforeEach(async () => {
    db = mockDatabase({
      tablePrefix: '',
    });

    await db.clean({ drop: true });
  });

  afterEach(async () => {
    await db.close();
  });

  it('should update view collection', async () => {
    const UserCollection = db.collection({
      name: 'users',
      fields: [
        {
          name: 'name',
          type: 'string',
          interface: { type: 'string', title: '姓名' },
        },
        {
          name: 'group',
          type: 'belongsTo',
          foreignKey: 'group_id',
        },
      ],
    });

    const GroupCollection = db.collection({
      name: 'groups',
      fields: [
        {
          name: 'name',
          type: 'string',
          interface: { type: 'string', title: '分组名' },
        },
      ],
    });

    await db.sync();

    const viewName = `users_with_group`;
    const dropSQL = `DROP VIEW IF EXISTS ${viewName}`;
    await db.sequelize.query(dropSQL);
    const viewSQL = `CREATE VIEW ${viewName} AS SELECT users.id AS user_id, users.name AS user_name, groups.name AS group_name FROM ${UserCollection.quotedTableName()} AS users INNER JOIN ${GroupCollection.quotedTableName()} AS groups ON users.group_id = groups.id`;
    await db.sequelize.query(viewSQL);

    const inferredFields = await ViewFieldInference.inferFields({
      db,
      viewName,
      viewSchema: 'public',
    });

    const UsersWithGroup = db.collection({
      name: viewName,
      view: true,
      fields: Object.values(inferredFields),
      schema: db.inDialect('postgres') ? 'public' : undefined,
      writableView: true,
    });

    const u1WithG1 = await UsersWithGroup.repository.create({
      values: {
        user_name: 'u1',
        group_name: 'g1',
      },
    });

    console.log(u1WithG1);
  });

  it('should insert data into view collection', async () => {
    const User = db.collection({
      name: 'users',
      fields: [
        { type: 'string', name: 'name' },
        {
          type: 'belongsTo',
          name: 'group',
          foreignKey: 'group_id',
          target: 'groups',
        },
      ],
    });

    const Group = db.collection({
      name: 'groups',
      fields: [
        {
          type: 'string',
          name: 'name',
        },
      ],
    });

    await db.sync();

    const viewName = 'user_with_group';
    const dropViewSQL = `DROP VIEW IF EXISTS test_view`;
    await db.sequelize.query(dropViewSQL);

    const viewSQL = `
    CREATE VIEW ${viewName}
    AS SELECT users.id AS user_id, users.name AS user_name, groups.name AS group_name
    FROM ${User.quotedTableName()} AS ${db.sequelize.getQueryInterface().quoteIdentifier('users')}
    LEFT JOIN ${Group.quotedTableName()} AS ${db.sequelize.getQueryInterface().quoteIdentifier('groups')}
    ON users.group_id = groups.id`;

    await db.sequelize.query(viewSQL);

    const viewCollection = db.collection({
      name: viewName,
      viewName,
      writableView: true,
      timestamps: false,
      fields: [
        { type: 'bigInt', name: 'user_id' },
        { type: 'string', name: 'user_name' },
        { type: 'string', name: 'group_name' },
      ],
    });

    await db.sync();

    await viewCollection.repository.create({
      values: {
        user_name: 'u1',
        group_name: 'g1',
      },
    });

    const record = await viewCollection.repository.findOne();
    expect(record.get('name')).toBe('123');
  });

  it('should create view collection in difference schema', async () => {
    if (!db.inDialect('postgres')) return;
    const schemaName = `t_${uid(6)}`;
    const testSchemaSql = `CREATE SCHEMA IF NOT EXISTS ${schemaName};`;
    await db.sequelize.query(testSchemaSql);

    const viewName = 'test_view';

    const viewSQL = `CREATE OR REPLACE VIEW ${schemaName}.test_view AS SELECT 1+1 as result`;
    await db.sequelize.query(viewSQL);

    const viewCollection = db.collection({
      name: viewName,
      schema: schemaName,
      view: true,
      fields: [
        {
          type: 'string',
          name: 'result',
        },
      ],
    });

    const results = await viewCollection.repository.find();

    expect(results.length).toBe(1);
  });

  it('should create view collection', async () => {
    const UserCollection = db.collection({
      name: 'users',
      fields: [
        {
          type: 'string',
          name: 'name',
        },
        {
          type: 'hasOne',
          name: 'profile',
          foreignKey: 'user_id',
        },
      ],
    });

    const ProfileCollection = db.collection({
      name: 'profiles',
      fields: [
        {
          type: 'integer',
          name: 'age',
        },
        {
          type: 'belongsTo',
          name: 'user',
          foreignKey: 'user_id',
        },
      ],
    });

    await db.sync();

    await UserCollection.repository.create({
      values: {
        name: 'foo',
        profile: {
          age: 18,
        },
      },
    });
    const schema = UserCollection.collectionSchema();
    const viewName = 'users_with_profile';

    const appendSchema = db.inDialect('postgres') ? `"${schema}".` : '';

    const dropViewSQL = `DROP VIEW IF EXISTS ${appendSchema}${viewName}`;
    await db.sequelize.query(dropViewSQL);
    const viewSql = `CREATE VIEW ${appendSchema}${viewName} AS SELECT users.name, profiles.age FROM ${appendSchema}${UserCollection.model.tableName} as users LEFT JOIN ${appendSchema}${ProfileCollection.model.tableName} as profiles ON users.id = profiles.user_id;`;

    await db.sequelize.query(viewSql);

    db.collection({
      name: viewName,
      view: true,
      fields: [
        {
          type: 'string',
          name: 'name',
        },
        {
          type: 'integer',
          name: 'age',
        },
      ],
    });
    const UserWithProfileView = db.getCollection(viewName);
    expect(UserWithProfileView).toBeInstanceOf(ViewCollection);

    const fooData = await UserWithProfileView.repository.findOne({
      filter: {
        name: 'foo',
      },
    });

    expect(fooData.get('name')).toBe('foo');
    expect(fooData.get('age')).toBe(18);
  });

  it('should not sync view collection', async () => {
    const dropViewSQL = `DROP VIEW IF EXISTS test_view`;
    await db.sequelize.query(dropViewSQL);

    const viewSql = `CREATE VIEW test_view AS SELECT 1+1 as result`;

    await db.sequelize.query(viewSql);
    const viewCollection = db.collection({
      name: 'view_collection',
      viewName: 'test_view',
      fields: [
        {
          type: 'string',
          name: 'result',
        },
      ],
    });

    const jestFn = jest.fn();

    db.on('beforeSync', jestFn);

    await viewCollection.sync();
    expect(jestFn).not.toBeCalled();
  });

  it('should create view collection with source field options', async () => {
    const UserCollection = db.collection({
      name: 'users',
      fields: [
        {
          name: 'name',
          type: 'string',
          patterns: [
            {
              type: 'integer',
              options: { key: 1 },
            },
          ],
        },
      ],
    });

    await db.sync();

    const viewName = 'users_view';

    const dropViewSQL = `DROP VIEW IF EXISTS ${viewName}`;
    await db.sequelize.query(dropViewSQL);

    const viewSQL = `
       CREATE VIEW ${viewName} as SELECT users.* FROM ${UserCollection.quotedTableName()} as users
    `;

    await db.sequelize.query(viewSQL);

    // create view collection
    const ViewCollection = db.collection({
      name: viewName,
      view: true,
      fields: [
        {
          name: 'name',
          type: 'string',
          source: 'users.name',
        },
      ],
    });

    const viewNameField = ViewCollection.getField('name');
    expect(viewNameField.options.patterns).toEqual(UserCollection.getField('name').options.patterns);
  });
});
