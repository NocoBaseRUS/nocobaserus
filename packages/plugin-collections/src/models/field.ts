import _ from 'lodash';
import { Model } from '@nocobase/database';

export class Field extends Model {
  static async create(value?: any, options?: any): Promise<any> {
    const attributes = this.toAttributes(value);
    // @ts-ignore
    const model: Model = await super.create(attributes, options);
    return model;
  }

  static toAttributes(value = {}): any {
    const data: any = _.cloneDeep(value);
    const keys = [
      ...Object.keys(this.rawAttributes),
      ...Object.keys(this.associations),
    ];
    if (!data.dataType && data.type) {
      data.dataType = data.type;
    }
    const attrs = _.pick(data, keys);
    const options = _.omit(data, [...keys, 'type']);
    return { ...attrs, options };
  }

  async toProps() {
    const json = this.toJSON();
    const data: any = _.omit(json, ['options', 'created_at', 'updated_at']);
    const options = json['options'] || {};
    const fields = await this.getNestedFields();
    const props = { type: json['dataType'], ...data, ...options };
    if (fields.length) {
      props['children'] = fields;
    }
    const uiSchema = await this.getUiSchema();
    if (uiSchema) {
      // props['uiSchema1'] = uiSchema;
      props['uiSchema'] = await uiSchema.toJSONSchema();
    }
    return props;
  }

  async getNestedFields() {
    const fields = await this.getChildren();
    const items = [];
    for (const field of fields) {
      items.push(await field.toProps());
    }
    return items;
  }
}
