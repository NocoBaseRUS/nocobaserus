/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Database, Model } from '@nocobase/database';

const typeMap = {
  nanoid: 'string',
  sequence: 'string',
};

export const createForeignKey = (db: Database) => {
  return async (model: Model, { transaction }) => {
    const { type, collectionName, target, targetKey, foreignKey } = model.get();
    if (type !== 'belongsToArray') {
      return;
    }
    const r = db.getRepository('fields');
    const instance = await r.findOne({
      filter: {
        collectionName,
        name: foreignKey,
      },
      transaction,
    });
    if (!instance) {
      const targetField = await r.findOne({
        filter: {
          collectionName: target,
          name: targetKey,
        },
        transaction,
      });
      if (!targetField) {
        throw new Error(`${target}.${targetKey} not found`);
      }
      const field = await r.create({
        values: {
          interface: 'json',
          collectionName,
          name: foreignKey,
          type: 'set',
          dataType: 'array',
          elementType: typeMap[targetField.type] || targetField.type,
          isForeignKey: true,
          uiSchema: {
            type: 'object',
            title: foreignKey,
            'x-component': 'Input.JSON',
            'x-read-pretty': true,
          },
        },
        transaction,
      });
      await field.load();
    }
  };
};
