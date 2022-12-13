import { BaseColumnFieldOptions, Field, FieldContext } from '@nocobase/database';
import { DataTypes } from 'sequelize';

// @ts-ignore
class Circle extends DataTypes.ABSTRACT {
  key = 'Circle';
}


export class CircleField extends Field {
  constructor(options?: any, context?: FieldContext) {
    const { name } = options
    super(
      {
        get() {
          const value = this.getDataValue(name);
          return value ? [value.x, value.y, value.radius] : null
        },
        set(value: number[]) {
          this.setDataValue(name, value.join(','))
        },
        ...options,
      },
      context,
    );
  }

  get dataType() {
    return Circle;
  }

}

export interface CircleFieldOptions extends BaseColumnFieldOptions {
  type: 'circle';
}
