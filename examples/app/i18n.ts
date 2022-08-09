/*
# 国际化多语言

Step 1:
yarn run:example examples/app/i18n.ts start

Step 2:
curl http://localhost:13000/api/test:get
curl http://localhost:13000/api/test:get?locale=en-US
curl --location --request GET 'http://localhost:13000/api/test:get' --header 'X-Locale: en-US'
*/
import { Application } from '@nocobase/server';

const app = new Application({
  database: {
    logging: process.env.DB_LOGGING === 'on' ? console.log : false,
    dialect: process.env.DB_DIALECT as any,
    storage: process.env.DB_STORAGE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as any,
    timezone: process.env.DB_TIMEZONE,
    tablePrefix: process.env.DB_TABLE_PREFIX,
  },
  resourcer: {
    prefix: '/api',
  },
  i18n: {
    defaultNS: 'test',
    resources: {
      'en-US': {
        test: {
          hello: 'Hello',
        },
      },
      'zh-CN': {
        test: {
          hello: '你好',
        },
      },
    },
  },
});

app.i18n.addResources('zh-CN', 'test', {
  world: '世界',
});

app.i18n.addResources('en-US', 'test', {
  world: 'World',
});

// 改变全局 app.i18n 的多语言，一般用于 cli 环境的多语言
app.i18n.changeLanguage('zh-CN');

app.resource({
  name: 'test',
  actions: {
    async get(ctx, next) {
      ctx.body = ctx.t('hello') + ' ' + ctx.t('world');
      await next();
    },
  },
});

if (require.main === module) {
  app.runAsCLI();
}

export default app;
