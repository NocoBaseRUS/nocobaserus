import { getAppComponent } from '@nocobase/test/web';
import { Space, App as AntdApp } from 'antd';
import { useAPIClient, ActionProps } from '@nocobase/client';

const useCustomActionProps = (): ActionProps => {
  const api = useAPIClient();
  const { message } = AntdApp.useApp();

  return {
    onClick: async () => {
      const { data } = await api.request({ url: 'test' });
      if (data.data.result === 'ok') {
        message.success('Success!');
      }
    },
  };
};

const App = getAppComponent({
  schema: {
    type: 'void',
    name: 'root',
    'x-component': Space,
    properties: {
      test1: {
        type: 'void',
        'x-component': 'Action',
        title: 'test1',
        'x-use-component-props': useCustomActionProps, // function type
      },
      test2: {
        type: 'void',
        'x-component': 'Action',
        title: 'test2',
        'x-use-component-props': function useCustomActionProps(): ActionProps {
          // inline function type
          const api = useAPIClient();
          const { message } = AntdApp.useApp();

          return {
            onClick: async () => {
              const { data } = await api.request({ url: 'test' });
              if (data.data.result === 'ok') {
                message.success('Success!');
              }
            },
          };
        },
      },
      test3: {
        type: 'void',
        'x-component': 'Action',
        title: 'test2',
        'x-use-component-props': 'useCustomActionProps', // string type
      },
    },
  },
  appOptions: {
    scopes: {
      useCustomActionProps,
    },
  },
  apis: {
    test: { data: { result: 'ok' } },
  },
});

export default App;
