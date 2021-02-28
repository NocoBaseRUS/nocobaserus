import path from 'path';
import { Application } from '@nocobase/server';
import { registerModels, registerFields } from '@nocobase/database';
import * as models from './models';
import collectionsBeforeValidate from './hooks/collections.beforeValidate';
import collectionsAfterCreate from './hooks/collections.afterCreate';
import fieldsBeforeValidate from './hooks/fields.beforeValidate';
import fieldsAfterCreate from './hooks/fields.afterCreate';

import { RANDOMSTRING } from './fields/randomString';
import { interfaces } from './interfaces';
import { merge } from './utils';

export default async function (this: Application, options = {}) {
  const database = this.database;
  const resourcer = this.resourcer;
  // 提供全局的 models 注册机制
  registerModels(models);
  registerFields({
    RANDOMSTRING,
  });

  database.addHook('beforeAddField', (options: any) => {
    const { interface: interfaceType } = options;
    if (interfaceType && interfaces.has(interfaceType)) {
      const defaults = interfaces.get(interfaceType).options;
      Object.assign(options, merge(defaults, options))
    }
    // console.log({options});
  });

  database.import({
    directory: path.resolve(__dirname, 'collections'),
  });

  database.getModel('collections').addHook('beforeValidate', collectionsBeforeValidate);
  database.getModel('fields').addHook('beforeValidate', fieldsBeforeValidate);
  database.getModel('collections').addHook('afterCreate', collectionsAfterCreate);
  database.getModel('fields').addHook('afterCreate', fieldsAfterCreate);
}
