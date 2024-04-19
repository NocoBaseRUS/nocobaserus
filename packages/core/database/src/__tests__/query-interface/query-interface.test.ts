import { Database, mockDatabase } from '@nocobase/database';

describe('query interface', async () => {
  let db: Database;

  beforeEach(async () => {
    db = mockDatabase({
      logging: console.log,
    });

    await db.clean({ drop: true });
  });

  afterEach(async () => {
    await db.close();
  });

  it('should get auto incr info', async () => {
    const User = db.collection({
      name: 'users',
      autoGenId: false,
      fields: [
        {
          type: 'bigInt',
          name: 'id',
          primaryKey: true,
          autoIncrement: true,
        },
        {
          type: 'string',
          name: 'name',
        },
      ],
    });

    await db.sync();

    await User.repository.create({
      values: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
    });

    const incrInfo = await db.queryInterface.getAutoIncrementInfo({
      tableInfo: {
        tableName: User.model.tableName,
        schema: process.env['DB_DIALECT'] === 'postgres' ? User.options.schema || 'public' : undefined,
      },
      fieldName: 'id',
    });

    if (db.isMySQLCompatibleDialect()) {
      expect(incrInfo.currentVal).toBe(4);
    } else {
      expect(incrInfo.currentVal).toBe(3);
    }

    await db.queryInterface.setAutoIncrementVal({
      tableInfo: {
        tableName: User.model.tableName,
        schema: process.env['DB_DIALECT'] === 'postgres' ? User.options.schema || 'public' : undefined,
      },
      columnName: 'id',
      currentVal: 100,
      seqName: incrInfo.seqName,
    });

    const userD = await User.repository.create({
      values: {
        name: 'd',
      },
    });

    if (db.isMySQLCompatibleDialect()) {
      expect(userD.id).toBe(100);
    } else {
      expect(userD.id).toBe(101);
    }
  });
});
