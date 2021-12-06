import qs from 'qs';
import Koa from 'koa';
import merge from 'deepmerge';
import bodyParser from 'koa-bodyparser';
import supertest, { SuperAgentTest } from 'supertest';
import { Resourcer, Handlers, ResourceOptions } from '@nocobase/resourcer';
import Database, { DatabaseOptions, CollectionOptions } from '@nocobase/database';
import table2resource from '../../../server/src/middlewares/table2resource';

export function generatePrefixByPath() {
  const { id } = require.main;
  const key = id
    .replace(`${process.env.PWD}/packages`, '')
    .replace(/src\/__tests__/g, '')
    .replace('.test.ts', '')
    .replace(/[^\w]/g, '_')
    .replace(/_+/g, '_');
  return key;
}

export function getConfig(config = {}, options?: any): DatabaseOptions {
  return merge(
    {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG_SQL === 'on',
      sync: {
        force: true,
        alter: {
          drop: true,
        },
      },
      hooks: {
        beforeDefine(model, options) {
          options.tableName = `${generatePrefixByPath()}_${options.tableName || options.name.plural}`;
        },
      },
    },
    config || {},
    options,
  ) as any;
}

export function mockDatabase(options?: DatabaseOptions): Database {
  return new Database(getConfig(options));
}

interface ActionParams {
  fields?:
    | string[]
    | {
        only?: string[];
        except?: string[];
        appends?: string[];
      };
  filter?: any;
  sort?: string[];
  page?: number;
  perPage?: number;
  values?: any;
  resourceName?: string;
  resourceIndex?: string;
  associatedName?: string;
  associatedIndex?: string;
  [key: string]: any;
}

interface SortActionParams {
  resourceName?: string;
  resourceIndex?: any;
  associatedName?: string;
  associatedIndex?: any;
  sourceId?: any;
  targetId?: any;
  sortField?: string;
  method?: string;
  target?: any;
  sticky?: boolean;
  [key: string]: any;
}

interface Resource {
  get: (params?: ActionParams) => Promise<supertest.Response>;
  list: (params?: ActionParams) => Promise<supertest.Response>;
  create: (params?: ActionParams) => Promise<supertest.Response>;
  update: (params?: ActionParams) => Promise<supertest.Response>;
  destroy: (params?: ActionParams) => Promise<supertest.Response>;
  sort: (params?: SortActionParams) => Promise<supertest.Response>;
  [name: string]: (params?: ActionParams) => Promise<supertest.Response>;
}

export class MockServer extends Koa {
  db: Database;
  resourcer: Resourcer;

  constructor() {
    super();
    this.db = mockDatabase();
    this.resourcer = new Resourcer({
      prefix: '/api',
    });
    this.use(async (ctx, next) => {
      ctx.db = this.db;
      ctx.resourcer = this.resourcer;
      await next();
    });
    this.use(bodyParser());
    this.use(table2resource());
    this.use(
      this.resourcer.restApiMiddleware({
        prefix: '/api',
      }),
    );
  }

  collection(options: CollectionOptions) {
    this.db.collection(options);
  }

  resource(options: ResourceOptions) {
    this.resourcer.define(options);
  }

  async destroy() {
    return this.db.close();
  }

  actions(handlers: Handlers) {
    this.resourcer.registerActionHandlers(handlers);
  }

  agent(): SuperAgentTest & { resource: (name: string) => Resource } {
    const agent = supertest.agent(this.callback());
    const prefix = this.resourcer.options.prefix;
    const proxy = new Proxy(agent, {
      get(target, method: string, receiver) {
        if (method === 'resource') {
          return (name: string) => {
            const keys = name.split('.');
            const proxy = new Proxy(
              {},
              {
                get(target, method: string, receiver) {
                  return (params: ActionParams = {}) => {
                    const { associatedIndex, resourceIndex, values = {}, file, ...restParams } = params;
                    let url = prefix;
                    if (keys.length > 1) {
                      url += `/${keys[0]}/${associatedIndex}/${keys[1]}`;
                    } else {
                      url += `/${name}`;
                    }
                    url += `:${method as string}`;
                    if (resourceIndex) {
                      url += `/${resourceIndex}`;
                    }

                    console.log(url);

                    switch (method) {
                      case 'upload':
                        return agent
                          .post(`${url}?${qs.stringify(restParams)}`)
                          .attach('file', file)
                          .field(values);
                      case 'list':
                      case 'get':
                        return agent.get(`${url}?${qs.stringify(restParams)}`);
                      default:
                        return agent.post(`${url}?${qs.stringify(restParams)}`).send(values);
                    }
                  };
                },
              },
            );
            return proxy;
          };
        }
        return (...args: any[]) => {
          return agent[method](...args);
        };
      },
    });
    return proxy as any;
  }
}

export function mockServer() {
  return new MockServer();
}
