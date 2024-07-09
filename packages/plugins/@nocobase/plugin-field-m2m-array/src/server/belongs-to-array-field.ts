/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { BaseColumnFieldOptions, BelongsToArrayAssociation, Model, RelationField } from '@nocobase/database';

export const elementTypeMap = {
  nanoid: 'string',
  sequence: 'string',
};

export class BelongsToArrayField extends RelationField {
  get dataType() {
    return 'BelongsToArray';
  }

  private setForeignKeyArray = async (model: Model, { values, transaction }) => {
    const { name, foreignKey, target, targetKey } = this.options;
    if (!values || values[name] === undefined) {
      return;
    }
    const value: any[] = values[name] || [];
    const tks = [];
    const items = [];
    for (const item of value) {
      if (typeof item !== 'object') {
        tks.push(item);
        continue;
      }
      items.push(item);
    }
    const repo = this.database.getRepository(target);
    const itemTks = items.map((item) => item[targetKey]).filter((tk) => tk);
    const instances = await repo.find({
      filter: {
        [targetKey]: itemTks,
      },
      transaction,
    });
    tks.push(...instances.map((instance: Model) => instance[targetKey]));
    const toCreate = items.filter((item) => !item[targetKey] || !tks.includes(item[targetKey]));
    const m = this.database.getModel(target);
    const newInstances = await m.bulkCreate(toCreate, { transaction });
    tks.push(...newInstances.map((instance: Model) => instance[targetKey]));
    model.set(foreignKey, tks);
  };

  init() {
    super.init();
    const { name, ...opts } = this.options;
    this.collection.model.associations[name] = new BelongsToArrayAssociation({
      db: this.database,
      source: this.collection.model,
      as: name,
      ...opts,
    }) as any;
  }

  checkAssociationKeys() {
    const { foreignKey, target, targetKey } = this.options;

    if (!targetKey) {
      throw new Error('Target key is required in the options of many to many (array) field.');
    }

    const targetField = this.database.getCollection(target)?.getField(targetKey);
    if (!targetField) {
      throw new Error(`Target key "${targetKey}" not found in collection "${target}"`);
    }

    const foreignField = this.collection.getField(foreignKey);
    if (!foreignField) {
      return;
    }

    if (!['array', 'set'].includes(foreignField.type)) {
      throw new Error(
        `Foreign key "${foreignKey}" must be an array or set field in collection "${this.collection.name}"`,
      );
    }

    if (this.database.sequelize.getDialect() !== 'postgres') {
      return;
    }

    const targetFieldType = elementTypeMap[targetField.type] || targetField.type;
    if (foreignField.options.dataType === 'array' && foreignField.options.elementType !== targetFieldType) {
      throw new Error(
        `The element type "${foreignField.options.elementType}" of foreign key "${foreignKey}" does not match the type "${targetFieldType}" of target key "${targetKey}" in collection "${target}"`,
      );
    }
  }

  bind() {
    this.checkAssociationKeys();
    this.on('beforeSave', this.setForeignKeyArray);
  }

  unbind() {
    delete this.collection.model.associations[this.name];
    this.off('beforeSave', this.setForeignKeyArray);
  }
}

export interface BelongsToArrayFieldOptions extends BaseColumnFieldOptions {
  type: 'belongsToArray';
  foreignKey: string;
  target: string;
  targetKey: string;
}
