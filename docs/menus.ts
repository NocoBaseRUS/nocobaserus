export default [
  {
    title: 'Welcome',
    'title.zh-CN': '欢迎',
    type: 'group',
    children: [
      '/index',
      '/why',
      '/who',
      '/roadmap',
    ],
  },
  {
    title: 'Getting started',
    'title.zh-CN': '快速开始',
    type: 'group',
    children: [
      '/getting-started/installation',
      '/getting-started/upgrading',
    ],
  },
  {
    title: 'User manual',
    'title.zh-CN': '用户手册',
    type: 'group',
    children: [
      {
        '/user-manual/introduction/5-minutes-to-get-started',
      },
      {
        title: 'Advanced Guide',
        'title.zh-CN': '深入 NocoBase',
        type: 'subMenu',
        children: [
          '/user-manual/advanced-guide/functional-zoning',
          '/user-manual/advanced-guide/collections',
          '/user-manual/advanced-guide/menus',
          '/user-manual/advanced-guide/blocks',
          '/user-manual/advanced-guide/actions',
          '/user-manual/advanced-guide/roles-permissions',
          '/user-manual/advanced-guide/tabs',
          '/user-manual/advanced-guide/file-storages',
          '/user-manual/advanced-guide/system-settings',
          '/user-manual/advanced-guide/plugins',
        ],
      },
    ],
  },
  {
    title: 'Development',
    'title.zh-CN': '开发指南',
    type: 'group',
    children: [
      '/development/directory-structure',
      '/development/env',
      '/development/nocobase-cli',
      {
        title: 'HTTP API',
        'title.zh-CN': 'HTTP API',
        type: 'subMenu',
        children: [
          '/development/http-api/index',
          '/development/http-api/rest-api',
          '/development/http-api/action-api',
          '/development/http-api/javascript-sdk',
          '/development/http-api/filter-operators',
        ],
      },
      '/development/javascript-sdk',
      {
        title: 'Plugin development',
        'title.zh-CN': '插件开发',
        type: 'subMenu',
        children: [
          '/development/plugin-development/index',
          {
            title: 'Server',
            'title.zh-CN': 'Server',
            type: 'subMenu',
            children: [
              '/development/plugin-development/server/overview',
              '/development/plugin-development/server/database',
              '/development/plugin-development/server/resourcer',
              '/development/plugin-development/server/middleware',
              '/development/plugin-development/server/acl',
              '/development/plugin-development/server/events',
              '/development/plugin-development/server/i18n',
              '/development/plugin-development/server/cli',
              '/development/plugin-development/server/app-manager',
              '/development/plugin-development/server/plugin-manager',
            ],
          },
          {
            title: 'Client',
            'title.zh-CN': 'Client',
            type: 'subMenu',
            children: [
              '/development/plugin-development/client/overview',
              {
                title: 'Providers',
                'title.zh-CN': 'Providers',
                type: 'subMenu',
                children: [
                  '/development/plugin-development/client/providers/acl',
                  '/development/plugin-development/client/providers/antd',
                  '/development/plugin-development/client/providers/api-client',
                  '/development/plugin-development/client/providers/collection-manager',
                  '/development/plugin-development/client/providers/i18n',
                  '/development/plugin-development/client/providers/route-switch',
                  '/development/plugin-development/client/providers/schema-component',
                  '/development/plugin-development/client/providers/schema-initializer',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Community',
    'title.zh-CN': '社区',
    type: 'group',
    children: [
      '/contributing',
      '/release-notes',
      '/faq',
      '/thanks',
    ],
  }
];
