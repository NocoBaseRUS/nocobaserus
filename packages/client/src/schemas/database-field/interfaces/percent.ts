import { ISchema } from '@formily/react';
import { defaultProps } from './properties';

export const percent: ISchema = {
  name: 'percent',
  type: 'object',
  group: 'basic',
  order: 6,
  title: '百分比',
  sortable: true,
  default: {
    dataType: 'float',
    // name,
    uiSchema: {
      type: 'string',
      // title,
      'x-component': 'InputNumber',
      'x-component-props': {
        stringMode: true,
        step: '0',
        addonAfter: '%',
      },
      'x-decorator': 'FormItem',
      'x-designable-bar': 'InputNumber.DesignableBar',
    } as ISchema,
  },
  properties: {
    ...defaultProps,
    'uiSchema.x-component-props.step': {
      type: 'string',
      title: '精度',
      'x-component': 'Select',
      'x-decorator': 'FormItem',
      default: '0',
      enum: [
        { value: '0', label: '1' },
        { value: '0.1', label: '1.0' },
        { value: '0.01', label: '1.00' },
        { value: '0.001', label: '1.000' },
        { value: '0.0001', label: '1.0000' },
        { value: '0.00001', label: '1.00000' },
      ]
    },
  },
  operations: [
    { label: '等于', value: 'eq' },
    { label: '不等于', value: 'ne' },
  ],
};
