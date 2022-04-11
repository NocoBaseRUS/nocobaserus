// 日历的操作配置
export const CalendarActionInitializers = {
  title: 'Configure actions',
  icon: 'SettingOutlined',
  style: { marginLeft: 8 },
  items: [
    {
      type: 'itemGroup',
      title: 'Enable actions',
      children: [
        {
          type: 'item',
          title: 'Today',
          component: 'ActionInitializer',
          schema: {
            title: 'Today',
            'x-component': 'CalendarV2.Today',
            'x-action': `calendar:today`,
            'x-align': 'left',
          },
        },
        {
          type: 'item',
          title: 'Turn pages',
          component: 'ActionInitializer',
          schema: {
            title: 'Turn pages',
            'x-component': 'CalendarV2.Nav',
            'x-action': `calendar:nav`,
            'x-align': 'left',
          },
        },
        {
          type: 'item',
          title: 'Title',
          component: 'ActionInitializer',
          schema: {
            title: 'Title',
            'x-component': 'CalendarV2.Title',
            'x-action': `calendar:title`,
            'x-align': 'left',
          },
        },
        {
          type: 'item',
          title: 'Select view',
          component: 'ActionInitializer',
          schema: {
            title: 'Select view',
            'x-component': 'CalendarV2.ViewSelect',
            'x-action': `calendar:viewSelect`,
            'x-align': 'right',
            'x-designer': 'Action.Designer',
          },
        },
        {
          type: 'item',
          title: "{{t('Filter')}}",
          component: 'FilterActionInitializer',
          schema: {
            'x-align': 'right',
          },
        },
        {
          type: 'item',
          title: '{{ t("Add new") }}',
          component: 'CreateActionInitializer',
          schema: {
            'x-align': 'right',
            'x-decorator': 'ACLActionProvider',
            'x-acl-action-props': {
              skipScopeCheck: true,
            },
          },
        },
      ],
    },
  ],
};
