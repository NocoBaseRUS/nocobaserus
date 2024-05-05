import { getAppComponent } from '@nocobase/test/web';

const App = getAppComponent({
  schema: {
    type: 'void',
    name: 'root',
    'x-decorator': 'FormV2',
    'x-component': 'ShowFormData',
    properties: {
      test1: {
        type: 'string',
        default: '2024-01-01 10:10:10',
        title: 'Test1',
        'x-decorator': 'FormItem',
        'x-component': 'DatePicker',
        'x-component-props': {
          gmt: true,
        },
      },
      test2: {
        type: 'string',
        default: '2024-01-01 10:10:10',
        title: 'Test2',
        'x-decorator': 'FormItem',
        'x-component': 'DatePicker',
        'x-component-props': {
          showTime: true,
          gmt: true,
        },
      },
    },
  },
});

export default App;
