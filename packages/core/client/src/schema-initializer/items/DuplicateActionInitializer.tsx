import React from 'react';
import { ActionInitializer } from './ActionInitializer';

export const DuplicateActionInitializer = (props) => {
  const schema = {
    type: 'void',
    'x-action': 'duplicate',
    title: "{{t('Duplicate')}}",
    'x-designer': 'Action.Designer',
    'x-component': 'Action.Link',
    'x-decorator': 'ACLActionProvider',
    'x-component-props': {
      openMode: 'drawer',
      component: 'DuplicateAction',
    },
    // title: '{{ t("Duplicate") }}',
    // 'x-action': 'duplicate',
    // 'x-designer': 'Action.Designer',
    // 'x-component': DuplicateAction,
    // 'x-component-props': {
    //   openMode: 'drawer',
    //   icon: 'EditOutlined',
    // },
    properties: {
      drawer: {
        type: 'void',
        title: '{{ t("Duplicate") }}',
        'x-component': 'Action.Container',
        'x-component-props': {
          className: 'nb-action-popup',
        },
        properties: {
          tabs: {
            type: 'void',
            'x-component': 'Tabs',
            'x-component-props': {},
            'x-initializer': 'TabPaneInitializers',
            properties: {
              tab1: {
                type: 'void',
                title: '{{t("Duplicate")}}',
                'x-component': 'Tabs.TabPane',
                'x-designer': 'Tabs.Designer',
                'x-component-props': {},
                properties: {
                  grid: {
                    type: 'void',
                    'x-component': 'Grid',
                    'x-initializer': 'CreateFormBlockInitializers',
                    properties: {},
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  return <ActionInitializer {...props} schema={schema} />;
};
