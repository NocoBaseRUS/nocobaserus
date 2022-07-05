import { ISchema } from '@formily/react';
import { defaultProps, operators } from './properties';
import { IField } from './types';
import { i18n } from '../../i18n';

export const input: IField = {
  name: 'input',
  type: 'object',
  group: 'basic',
  order: 1,
  title: '{{t("Single line text")}}',
  sortable: true,
  default: {
    interface: 'input',
    type: 'string',
    uiSchema: {
      type: 'string',
      'x-component': 'Input',
    },
  },
  properties: {
    ...defaultProps,
  },
  filterable: {
    operators: operators.string,
  },
  schemaInitialize(schema: ISchema, { block }) {
    if (['Table', 'Kanban'].includes(block)) {
      schema['x-component-props'] = schema['x-component-props'] || {};
      schema['x-component-props']['ellipsis'] = true;
    }
  },
  validateSchema(fieldSchema) {
    console.log('validateSchema', fieldSchema?.['x-validator']);
    const formItemStyle = {
      labelCol: 8,
      wrapperCol: 16,
    }
    return {
      type: 'array',
      default: fieldSchema?.['x-validator'],
      'x-component': 'ArrayCollapse',
      'x-decorator': 'FormItem',
      'x-component-props': {
        // title: '{{ t("Validation rule") }}',
        accordion: true,
      },
      maxItems: 3,
      items: {
        type: 'object',
        'x-component': 'ArrayCollapse.CollapsePanel',
        'x-component-props': {
          header: '{{ t("Validation rule") }}',
        },
        properties: {
          index: {
            type: 'void',
            'x-component': 'ArrayCollapse.Index',
          },
          max: {
            type: 'number',
            title: '{{ t("Max length") }}',
            minimum: 0,
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              ...formItemStyle
            },
            'x-component': 'InputNumber',
            'x-component-props': {
              precision: 0
            },
          },
          min: {
            type: 'number',
            title: '{{ t("Min length") }}',
            minimum: 0,
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              ...formItemStyle
            },
            'x-component': 'InputNumber',
            'x-component-props': {
              precision: 0
            },
          },
          len: {
            type: 'number',
            title: '{{ t("Length") }}',
            minimum: 0,
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              ...formItemStyle
            },
            'x-component': 'InputNumber',
            'x-component-props': {
              precision: 0
            },
          },
          format: {
            type: 'string',
            title: '{{ t("Format") }}',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              ...formItemStyle
            },
            'x-component': 'Select',
            enum: [{
              label: '{{ t("url") }}',
              value: 'url',
            }, {
              label: '{{ t("email") }}',
              value: 'email',
            }, {
              label: '{{ t("ipv6") }}',
              value: 'ipv6',
            }, {
              label: '{{ t("ipv4") }}',
              value: 'ipv4',
            }, {
              label: '{{ t("number") }}',
              value: 'number',
            }, {
              label: '{{ t("integer") }}',
              value: 'integer',
            }, {
              label: '{{ t("idcard") }}',
              value: 'idcard',
            }, {
              label: '{{ t("qq") }}',
              value: 'qq',
            }, {
              label: '{{ t("phone") }}',
              value: 'phone',
            }, {
              label: '{{ t("money") }}',
              value: 'money',
            }, {
              label: '{{ t("zh") }}',
              value: 'zh',
            }, {
              label: '{{ t("date") }}',
              value: 'date',
            }, {
              label: '{{ t("zip") }}',
              value: 'zip',
            }]
          },
          pattern: {
            type: 'string',
            title: '{{ t("Pattern") }}',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              ...formItemStyle
            },
            'x-component': 'Input',
            'x-component-props': {
              prefix: '/',
              suffix: '/',
            }
          },
          message: {
            type: 'string',
            title: '{{ t("Error message") }}',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              ...formItemStyle
            },
            'x-component': 'Input.TextArea',
            'x-component-props': {
              autoSize: {
                minRows: 2,
                maxRows: 2
              }
            }
          },
          remove: {
            type: 'void',
            'x-component': 'ArrayCollapse.Remove',
          },
          moveUp: {
            type: 'void',
            'x-component': 'ArrayCollapse.MoveUp',
          },
          moveDown: {
            type: 'void',
            'x-component': 'ArrayCollapse.MoveDown',
          },
        }
      },
      properties: {
        add: {
          type: 'void',
          title: '{{ t("Add validation rule") }}',
          'x-component': 'ArrayCollapse.Addition',
          'x-reactions': {
            dependencies: ['rules'],
            fulfill: {
              state: {
                disabled: '{{$deps[0].length >= 3}}'
              }
            }
          }
        },
      }
      // type: 'object',
      // default: fieldSchema?.['x-validator'],
      // properties: {
      //   max: {
      //     type: 'number',
      //     title: '{{ t("Max length") }}',
      //     minimum: 0,
      //     'x-decorator': 'FormItem',
      //     'x-component': 'InputNumber',
      //     'x-component-props': {
      //       precision: 0
      //     },
      //     'x-reactions': `{{(field) => {
      //       const targetValue = field.query('rules.min').value();
      //       field.selfErrors =
      //         !!targetValue && !!field.value && targetValue > field.value ? '${i18n.t('Max length must greater than min length')}' : ''
      //     }}}`,
      //   },
      //   min: {
      //     type: 'number',
      //     title: '{{ t("Min length") }}',
      //     minimum: 0,
      //     'x-decorator': 'FormItem',
      //     'x-component': 'InputNumber',
      //     'x-component-props': {
      //       precision: 0
      //     },
      //     'x-reactions': {
      //       dependencies: ['rules.max'],
      //       fulfill: {
      //         state: {
      //           selfErrors: `{{!!$deps[0] && !!$self.value && $deps[0] < $self.value ? '${i18n.t('Min length must less than max length')}' : ''}}`,
      //         },
      //       },
      //     },
      //   },
      // }
    } as ISchema;
  }
};
