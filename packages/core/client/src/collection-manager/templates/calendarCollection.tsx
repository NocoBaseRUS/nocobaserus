import { ISchema } from '@formily/react';
import { defaultProps, defaultSystemFields, defaultCollectionOptions } from './properties';
import { IField } from './types';

export const calendarCollection: IField = {
  name: 'calendarCollection',
  type: 'object',
  title: '{{t("Calendar collection")}}',
  isAssociation: true,
  order: 1,
  color: 'orange',
  presetFields: [
    ...defaultSystemFields,
    {
      name: 'cron',
      type: 'string',
      allowNull: false,
      uiSchema: {
        type: 'string',
        title: '{{t("Cron")}}',
        'x-component': 'Select',
        enum: [
          { value: '0 0 * * *', label: '每天' },
          { value: '0 0 ? * 1', label: '每个星期一' },
          { value: '0 0 12 * * ?', label: '每天中午12点' },
          { value: '0 0 10,14,16 * * ?', label: '每天上午10点,下午2点,4点 ' },
        ],
      },
      interface: 'select',
    },
    {
      name: 'exclude',
      type: 'json',
      allowNull: false,
      interface: 'json',
      uiSchema: {
        type: 'string',
        title: '{{t("Exclude")}}',
        'x-component': 'Input.JSON',
        'x-component-props': {
          autoSize: {
            minRows: 5,
          },
        },
      },
    },
  ],
  properties: {
    ...defaultProps,
    ...defaultCollectionOptions,
  },
  include:[],
  exclude:[]
};
