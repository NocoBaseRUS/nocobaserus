import { getAppComponent } from '@nocobase/test/web';

const App = getAppComponent({
  schema: {
    type: 'void',
    name: 'root',
    'x-decorator': 'FormV2',
    'x-component': 'ShowFormData',
    'x-read-pretty': 'true',
    properties: {
      test: {
        type: 'boolean',
        default: true,
        title: 'Test title1',
        'x-decorator': 'FormItem',
        'x-component': 'Checkbox',
      },
      test2: {
        type: 'boolean',
        default: false,
        title: 'Test title2',
        'x-decorator': 'FormItem',
        'x-component': 'Checkbox',
      },
      test3: {
        type: 'boolean',
        default: false,
        title: 'Test title3',
        'x-decorator': 'FormItem',
        'x-component': 'Checkbox',
        'x-component-props': {
          showUnchecked: true,
        },
      },
    },
  },
});

export default App;
