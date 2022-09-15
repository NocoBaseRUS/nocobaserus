
export default {
  '/introduction': [
    '/introduction/index',
    '/introduction/features',
    '/introduction/when',
    '/introduction/quickstart',
    '/introduction/roadmap',
    '/introduction/thanks',
  ],
  '/getting-started': [
    {
      title: 'Installation',
      'title.zh-CN': '安装',
      type: 'subMenu',
      children: [
        '/getting-started/installation/index',
        '/getting-started/installation/docker-compose',
        '/getting-started/installation/create-nocobase-app',
        '/getting-started/installation/git-clone'
      ]
    },
    '/getting-started/upgrading',
  ],
  '/manual': [
    '/manual/functional-zoning',
    '/manual/collections',
    '/manual/menus',
    '/manual/blocks',
    '/manual/actions',
    '/manual/roles-permissions',
    '/manual/tabs',
    '/manual/file-storages',
    '/manual/system-settings',
    '/manual/plugins',
  ],
  // {
  //   title: 'Development',
  //   'title.zh-CN': '开发指南',
  //   type: 'group',
  //   children: [
  //     '/development/directory-structure',
  //     '/development/env',
  //     '/development/nocobase-cli',
  //     {
  //       title: 'HTTP API',
  //       'title.zh-CN': 'HTTP API',
  //       type: 'subMenu',
  //       children: [
  //         '/development/http-api/index',
  //         '/development/http-api/rest-api',
  //         '/development/http-api/action-api',
  //         '/development/http-api/javascript-sdk',
  //         '/development/http-api/filter-operators',
  //       ],
  //     },
  //     '/development/javascript-sdk',
  //     {
  //       title: 'Plugin development',
  //       'title.zh-CN': '插件开发',
  //       type: 'subMenu',
  //       children: [
  //         '/development/plugin-development/index',
  //         {
  //           title: 'Server',
  //           'title.zh-CN': 'Server',
  //           type: 'subMenu',
  //           children: [
  //             '/development/plugin-development/server/overview',
  //             '/development/plugin-development/server/database',
  //             '/development/plugin-development/server/resourcer',
  //             '/development/plugin-development/server/middleware',
  //             '/development/plugin-development/server/acl',
  //             '/development/plugin-development/server/events',
  //             '/development/plugin-development/server/i18n',
  //             '/development/plugin-development/server/cli',
  //             '/development/plugin-development/server/app-manager',
  //             '/development/plugin-development/server/plugin-manager',
  //           ],
  //         },
  //         {
  //           title: 'Client',
  //           'title.zh-CN': 'Client',
  //           type: 'subMenu',
  //           children: [
  //             '/development/plugin-development/client/overview',
  //             {
  //               title: 'Providers',
  //               'title.zh-CN': 'Providers',
  //               type: 'subMenu',
  //               children: [
  //                 '/development/plugin-development/client/providers/acl',
  //                 '/development/plugin-development/client/providers/antd',
  //                 '/development/plugin-development/client/providers/api-client',
  //                 '/development/plugin-development/client/providers/collection-manager',
  //                 '/development/plugin-development/client/providers/i18n',
  //                 '/development/plugin-development/client/providers/route-switch',
  //                 '/development/plugin-development/client/providers/schema-component',
  //                 '/development/plugin-development/client/providers/schema-initializer',
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  '/api': [
    '/api/index',
    '/api/env',
    {
      title: '@nocobase/server',
      type: 'subMenu',
      children: [
        '/api/server/application',
        '/api/server/plugin-manager',
        '/api/server/i18n',
      ]
    },
    {
      title: '@nocobase/database',
      type: 'subMenu',
      children: [
        '/api/database/index',
        '/api/database/collection',
        '/api/database/field',
        '/api/database/repository',
        '/api/database/operators',
      ]
    },
    {
      title: '@nocobase/resourcer',
      type: 'subMenu',
      children: [
        '/api/resourcer/index',
        '/api/resourcer/resource',
        '/api/resourcer/action',
        '/api/resourcer/middleware',
      ]
    },
    {
      title: '@nocobase/acl',
      path: '/api/acl'
    },
    {
      title: '@nocobase/client',
      type: 'subMenu',
      children: [
        '/api/client/index',
      ]
    },
    {
      title: '@nocobase/cli',
      path: '/api/cli'
    },
    {
      title: '@nocobase/sdk',
      path: '/api/sdk'
    },
    {
      title: 'HTTP API',
      type: 'subMenu',
      children: [
        '/api/http-api/index',
        '/api/http-api/rest-api',
        '/api/http-api/action-api',
        '/api/http-api/filter-operators'
      ]
    },
  ]
};
