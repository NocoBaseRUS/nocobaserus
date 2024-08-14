/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { DataTypes } from 'sequelize';
import { DateField } from './date-field';
import { BaseColumnFieldOptions } from './field';

export class UnixTimestampField extends DateField {
  get dataType() {
    return DataTypes.BIGINT;
  }

  additionalSequelizeOptions(): {} {
    const { name } = this.options;
    let { accuracy } = this.options;

    if (this.options?.uiSchema['x-component-props']?.accuracy) {
      accuracy = this.options?.uiSchema['x-component-props']?.accuracy;
    }

    if (!accuracy) {
      accuracy = 'second';
    }

    let rationalNumber = 1000;

    if (accuracy === 'millisecond') {
      rationalNumber = 1;
    }

    return {
      get() {
        const value = this.getDataValue(name);
        if (value === null || value === undefined) {
          return value;
        }

        return new Date(value * rationalNumber);
      },
      set(value) {
        if (value === null || value === undefined) {
          this.setDataValue(name, value);
        } else {
          // date to unix timestamp
          this.setDataValue(name, Math.floor(new Date(value).getTime() / rationalNumber));
        }
      },
    };
  }
}

export interface UnixTimestampFieldOptions extends BaseColumnFieldOptions {
  type: 'unix-timestamp';
}
