import { getAppComponent } from '@nocobase/test/web';

const App = getAppComponent({
  schema: {
    type: 'void',
    name: 'root',
    'x-decorator': 'FormV2',
    'x-component': 'ShowFormData',
    'x-read-pretty': true,
    properties: {
      test: {
        type: 'string',
        default: 'every_week',
        title: 'Test title',
        'x-decorator': 'FormItem',
        'x-component': 'CronSet',
        'x-component-props': {
          options: [
            {
              label: '{{t("Daily")}}',
              value: '0 0 0 * * ?',
            },
            {
              label: '{{t("Weekly")}}',
              value: 'every_week',
            },
            {
              label: '{{t("Monthly")}}',
              value: 'every_month',
            },
            {
              label: '{{t("Yearly")}}',
              value: 'every_year',
            },
          ],
        },
      },
    },
  },
});

export default App;
