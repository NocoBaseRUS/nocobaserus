import QueryInterface from './query-interface';
import { Collection } from '../collection';

export default class PostgresQueryInterface extends QueryInterface {
  constructor(db) {
    super(db);
  }

  async collectionTableExists(collection: Collection, options?) {
    const transaction = options?.transaction;

    const tableName = collection.model.tableName;
    const schema = collection.collectionSchema() || 'public';

    const sql = `SELECT EXISTS(SELECT 1 FROM information_schema.tables
                 WHERE  table_schema = '${schema}'
                 AND    table_name   = '${tableName}')`;

    const results = await this.db.sequelize.query(sql, { type: 'SELECT', transaction });
    return results[0]['exists'];
  }
}
