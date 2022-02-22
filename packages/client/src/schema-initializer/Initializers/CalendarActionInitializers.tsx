// 日历的操作配置
export const CalendarActionInitializers = {
  title: 'Configure actions',
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
            'x-component': 'Calendar.Today',
            'x-action': `calendar:today`,
            'x-align': 'left',
          },
        },
        {
          type: 'item',
          title: 'Turn pages',
          component: 'ActionInitializer',
          schema: {
            title: 'Turn page',
            'x-component': 'Calendar.Nav',
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
            'x-component': 'Calendar.Title',
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
            'x-component': 'Calendar.ViewSelect',
            'x-action': `calendar:viewSelect`,
            'x-align': 'right',
            'x-designer': 'Action.Designer',
          },
        },
        {
          type: 'item',
          title: 'Filter',
          component: 'ActionInitializer',
          schema: {
            title: '{{ t("Filter") }}',
            'x-action': 'filter',
            'x-align': 'right',
            'x-component': 'Action',
            'x-designer': 'Action.Designer',
          },
        },
        {
          type: 'item',
          title: '{{ t("Add new") }}',
          component: 'AddNewActionInitializer',
        },
      ],
    },
  ],
};
