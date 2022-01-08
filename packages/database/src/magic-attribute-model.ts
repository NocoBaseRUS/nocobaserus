import { Model } from 'sequelize';
import { merge } from '@nocobase/utils';
import _ from 'lodash';
import Database from './database';

export class MagicAttributeModel extends Model {
  get magicAttribute() {
    const db: Database = (this.constructor as any).database;
    const collection = db.getCollection(this.constructor.name);
    return collection.options.magicAttribute || 'options';
  }

  set(key: any, value?: any, options?: any) {
    if (typeof key === 'string') {
      const [column] = key.split('.');
      if ((this.constructor as any).hasAlias(column)) {
        return super.set(key, value, options);
      }
      if ((this.constructor as any).rawAttributes[column]) {
        return super.set(key, value, options);
      }
      if (_.isPlainObject(value)) {
        const opts = super.get(this.magicAttribute) || {};
        return super.set(`${this.magicAttribute}.${key}`, merge(opts?.[key], value), options);
      }
      return super.set(`${this.magicAttribute}.${key}`, value, options);
    } else {
      Object.keys(key).forEach((k) => {
        this.set(k, key[k], options);
      });
    }
    return super.set(key, value, options);
  }

  get(key?: any, value?: any): any {
    if (typeof key === 'string') {
      const [column] = key.split('.');
      if ((this.constructor as any).hasAlias(column)) {
        return super.get(key, value);
      }
      if ((this.constructor as any).rawAttributes[column]) {
        return super.get(key, value);
      }
      const options = super.get(this.magicAttribute);
      return _.get(options, key);
    }
    const data = super.get(key, value);
    return {
      ..._.omit(data, this.magicAttribute),
      ...data[this.magicAttribute],
    };
  }
}
