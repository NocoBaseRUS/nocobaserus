import { Mutex } from 'async-mutex';
import { isNumber } from 'lodash';
import { DataTypes } from 'sequelize';
import { BaseColumnFieldOptions, Field } from './field';

const sortFieldMutex = new Mutex();

export class SortField extends Field {
  get dataType() {
    return DataTypes.BIGINT;
  }

  setSortValue = async (instance, options) => {
    const { name, scopeKey } = this.options;
    const { model } = this.context.collection;

    if (isNumber(instance.get(name)) && instance._previousDataValues[scopeKey] == instance[scopeKey]) {
      return;
    }

    const where = {};

    if (scopeKey) {
      const value = instance.get(scopeKey);
      if (value !== undefined && value !== null) {
        where[scopeKey] = value;
      }
    }

    await sortFieldMutex.runExclusive(async () => {
      const max = await model.max<number, any>(name, { ...options, where });
      const newValue = (max || 0) + 1;
      instance.set(name, newValue);
    });
  };

  onScopeChange = async (instance, options) => {
    const { scopeKey } = this.options;
    if (scopeKey && !instance.isNewRecord && instance._previousDataValues[scopeKey] != instance[scopeKey]) {
      await this.setSortValue(instance, options);
    }
  };

  initRecordsSortValue = async ({ transaction }) => {
    const doInit = async (scopeKey = null, scopeValue = null) => {
      const filter = {};
      if (scopeKey && scopeValue) {
        filter[scopeKey] = scopeValue;
      }

      const totalCount = await this.collection.repository.count({
        filter,
        transaction,
      });

      const emptyCount = await this.collection.repository.count({
        filter: {
          [this.name]: null,
          ...filter,
        },
        transaction,
      });

      const orderKey = (() => {
        const model = this.collection.model;
        if (model.primaryKeyAttribute) {
          return model.primaryKeyAttribute;
        }
        if (model.rawAttributes['createdAt']) {
          return 'createdAt';
        }

        throw new Error(`can not find order key for collection ${this.collection.name}`);
      })();

      if (emptyCount === totalCount && emptyCount > 0) {
        const records = await this.collection.repository.find({
          order: [orderKey],
          filter,
          transaction,
        });

        let start = 1;
        for (const record of records) {
          await record.update(
            {
              sort: start,
            },
            {
              hooks: false,
              transaction,
              silent: true,
            },
          );

          start += 1;
        }
      }
    };

    const scopeKey = this.options.scopeKey;
    if (scopeKey) {
      const groups = await this.collection.repository.find({
        attributes: [scopeKey],
        group: [scopeKey],
        raw: true,
      });

      for (const group of groups) {
        await doInit(scopeKey, group[scopeKey]);
      }
    } else {
      await doInit();
    }
  };

  bind() {
    super.bind();
    this.on('afterSync', this.initRecordsSortValue);
    this.on('beforeUpdate', this.onScopeChange);
    this.on('beforeCreate', this.setSortValue);
  }

  unbind() {
    super.unbind();
    this.off('beforeUpdate', this.onScopeChange);
    this.off('beforeCreate', this.setSortValue);
    this.off('afterSync', this.initRecordsSortValue);
  }
}

export interface SortFieldOptions extends BaseColumnFieldOptions {
  type: 'sort';
  scopeKey?: string;
}
