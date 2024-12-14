/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { NAMESPACE } from '../../locale';
import { appends, collection } from '../../schemas/collection';
import { SCHEDULE_MODE } from './constants';

export const ScheduleModes = {
  [SCHEDULE_MODE.STATIC]: {
    fieldset: {
      startsOn: {
        type: 'datetime',
        title: `{{t("Starts on", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'DatePicker',
        'x-component-props': {
          showTime: true,
        },
        required: true,
      },
      repeat: {
        type: 'string',
        title: `{{t("Repeat mode", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'RepeatField',
        'x-reactions': [
          {
            target: 'endsOn',
            fulfill: {
              state: {
                visible: '{{!!$self.value}}',
              },
            },
          },
          {
            target: 'limit',
            fulfill: {
              state: {
                visible: '{{!!$self.value}}',
              },
            },
          },
        ],
      },
      endsOn: {
        type: 'datetime',
        title: `{{t("Ends on", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'DatePicker',
        'x-component-props': {
          showTime: true,
        },
      },
      limit: {
        type: 'number',
        title: `{{t("Repeat limit", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'InputNumber',
        'x-component-props': {
          placeholder: `{{t("No limit", { ns: "${NAMESPACE}" })}}`,
          min: 0,
        },
      },
    },
    triggerFieldset: {
      date: {
        type: 'string',
        title: `{{t('Execute on', { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'DatePicker',
        'x-component-props': {
          showTime: true,
          placeholder: `{{t('Current time', { ns: "${NAMESPACE}" })}}`,
        },
      },
    },
  },
  [SCHEDULE_MODE.DATE_FIELD]: {
    fieldset: {
      collection: {
        ...collection,
        'x-component-props': {
          dataSourceFilter(item) {
            return item.options.key === 'main' || item.options.isDBInstance;
          },
        },
        'x-reactions': [
          ...collection['x-reactions'],
          {
            // only full path works
            target: 'startsOn',
            effects: ['onFieldValueChange'],
            fulfill: {
              state: {
                visible: '{{!!$self.value}}',
                value: '{{Object.create({})}}',
              },
            },
          },
        ],
      },
      startsOn: {
        type: 'object',
        title: `{{t("Starts on", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'OnField',
        'x-reactions': [
          {
            target: 'repeat',
            fulfill: {
              state: {
                visible: '{{!!$self.value}}',
              },
            },
          },
        ],
        required: true,
      },
      repeat: {
        type: 'string',
        title: `{{t("Repeat mode", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'RepeatField',
        'x-reactions': [
          {
            target: 'endsOn',
            fulfill: {
              state: {
                visible: '{{!!$self.value}}',
              },
            },
          },
          {
            target: 'limit',
            fulfill: {
              state: {
                visible: '{{!!$self.value}}',
              },
            },
          },
        ],
      },
      endsOn: {
        type: 'object',
        title: `{{t("Ends on", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'EndsByField',
      },
      limit: {
        type: 'number',
        title: `{{t("Repeat limit", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'InputNumber',
        'x-component-props': {
          placeholder: `{{t("No limit", { ns: "${NAMESPACE}" })}}`,
          min: 0,
        },
      },
      appends: {
        ...appends,
        'x-reactions': [
          {
            dependencies: ['mode', 'collection'],
            fulfill: {
              state: {
                visible: `{{$deps[0] === ${SCHEDULE_MODE.DATE_FIELD} && $deps[1]}}`,
              },
            },
          },
        ],
      },
    },
    triggerFieldset: {
      data: {
        type: 'object',
        title: `{{t("Trigger data", { ns: "${NAMESPACE}" })}}`,
        description: `{{t("Choose a record of the collection to trigger.", { ns: "${NAMESPACE}" })}}`,
        'x-decorator': 'FormItem',
        'x-component': 'TriggerCollectionRecordSelect',
        default: null,
        required: true,
      },
    },
    validate(config) {
      return config.collection && config.startsOn;
    },
  },
};
