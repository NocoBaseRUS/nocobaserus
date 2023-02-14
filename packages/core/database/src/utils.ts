import crypto from 'crypto';
import { IdentifierError } from './errors/identifier-error';
import { Model } from './model';
import lodash from 'lodash';
import Database from './database';

type HandleAppendsQueryOptions = {
  templateModel: any;
  queryPromises: Array<any>;
};

export async function handleAppendsQuery(options: HandleAppendsQueryOptions) {
  const { templateModel, queryPromises } = options;

  if (!templateModel) {
    return [];
  }

  const primaryKey = templateModel.constructor.primaryKeyAttribute;

  const results = await Promise.all(queryPromises);

  let rows: Array<Model>;

  for (const appendedResult of results) {
    if (!rows) {
      rows = appendedResult.rows;

      if (rows.length == 0) {
        return [];
      }

      const modelOptions = templateModel['_options'];
      for (const row of rows) {
        row['_options'] = {
          ...row['_options'],
          include: modelOptions['include'],
          includeNames: modelOptions['includeNames'],
          includeMap: modelOptions['includeMap'],
        };
      }
      continue;
    }

    for (let i = 0; i < appendedResult.rows.length; i++) {
      const appendingRow = appendedResult.rows[i];
      const key = appendedResult.include.association;
      const val = appendingRow.get(key);

      const rowKey = appendingRow.get(primaryKey);

      const targetIndex = rows.findIndex((row) => row.get(primaryKey) === rowKey);

      if (targetIndex === -1) {
        throw new Error('target row not found');
      }

      rows[targetIndex].set(key, val, {
        raw: true,
      });
    }
  }

  return rows;
}

export function md5(value: string) {
  return crypto.createHash('md5').update(value).digest('hex');
}

const MAX_IDENTIFIER_LENGTH = 63;

export function checkIdentifier(value: string) {
  if (value.length > MAX_IDENTIFIER_LENGTH) {
    throw new IdentifierError(`Identifier ${value} is too long`);
  }
}

export function getTableName(collectionName: string, options) {
  return options.underscored ? snakeCase(collectionName) : collectionName;
}

export function snakeCase(name: string) {
  return require('sequelize').Utils.underscore(name);
}

export function patchSequelizeQueryInterface(db: Database) {
  if (db.inDialect('postgres')) {
    //@ts-ignore
    const queryGenerator = db.sequelize.dialect.queryGenerator;

    queryGenerator.showConstraintsQuery = (tableName, constraintName) => {
      const lines = [
        'SELECT constraint_catalog AS "constraintCatalog",',
        'constraint_schema AS "constraintSchema",',
        'constraint_name AS "constraintName",',
        'table_catalog AS "tableCatalog",',
        'table_schema AS "tableSchema",',
        'table_name AS "tableName",',
        'constraint_type AS "constraintType",',
        'is_deferrable AS "isDeferrable",',
        'initially_deferred AS "initiallyDeferred"',
        'from INFORMATION_SCHEMA.table_constraints',
        `WHERE table_name='${tableName}'`,
        `AND constraint_name='${constraintName}'`,
      ];

      if (db.options.schema && db.options.schema !== 'public') {
        lines.push(`AND table_schema='${db.options.schema}'`);
      }

      return lines.join(' ');
    };
  }
}
