import path from 'path';
import { Op } from 'sequelize';
import { Application } from '@nocobase/server';
import Database, { Operator } from '@nocobase/database';
import Resourcer from '@nocobase/resourcer';
import * as rolesCollectionsActions from './actions/roles.collections';
import * as rolesPagesActions from './actions/roles.pages';

// API
// const permissions = ctx.app.getPluginInstance('permissions');
// const result: boolean = permissions.check(ctx);

class Permissions {
  readonly app: Application;
  readonly options: any;

  static check(roles) {
    return Boolean(this.getActionPermissions(roles).length);
  }

  static getActionPermissions(roles) {
    const permissions = roles.reduce((permissions, role) => permissions.concat(role.get('permissions')), []);
    return permissions.reduce((actions, permission) => actions.concat(permission.get('actions_permissions')), []);
  }

  static getFieldPermissions(roles) {
    const permissions = roles.reduce((permissions, role) => permissions.concat(role.get('permissions')), []);
    return permissions.reduce((fields, permission) => fields.concat(permission.get('fields_permissions')), []);
  }

  constructor(app: Application, options) {
    this.app = app;
    this.options = options;

    const database: Database = app.database;
    const resourcer: Resourcer = app.resourcer;

    database.import({
      directory: path.resolve(__dirname, 'collections'),
    });

    Object.keys(rolesCollectionsActions).forEach(actionName => {
      resourcer.registerActionHandler(`roles.collections:${actionName}`, rolesCollectionsActions[actionName]);
    });

    Object.keys(rolesPagesActions).forEach(actionName => {
      resourcer.registerActionHandler(`roles.pages:${actionName}`, rolesPagesActions[actionName]);
    });

    // TODO(optimize): 临时处理，相关逻辑还需要更严格
    const usersTable = database.getTable('users');
    if (!usersTable.hasField('roles')) {
      usersTable.addField({
        type: 'belongsToMany',
        name: 'roles',
        through: 'users_roles'
      });
    }

    // 针对“自己创建的” scope 添加特殊的操作符以生成查询条件
    if (!Operator.has('$currentUser')) {
      Operator.register('$currentUser', (value, { ctx }) => {
        const user = this.getCurrentUser(ctx);
        return { [Op.eq]: user[user.constructor.primaryKeyAttribute] };
      });
    }

    // resourcer.use(this.middleware());
  }

  middleware() {
    return async (ctx, next) => {
      const {
        resourceName,
        actionName
      } = ctx.action.params;

      const roles = await this.getRolesWithPermissions(ctx);
      const actionPermissions = Permissions.getActionPermissions(roles);

      if (!actionPermissions.length) {
        return ctx.throw(404);
      }

      const filters = actionPermissions
        .filter(item => Boolean(item.scope) && Object.keys(item.scope.filter).length)
        .map(item => item.scope.filter);

      const fields = new Set();
      const fieldPermissions = Permissions.getFieldPermissions(roles);
      fieldPermissions.forEach(item => {
        const actions = item.get('actions');
        if (actions && actions.includes(`${resourceName}:${actionName}`)) {
          fields.add(item.get('field').get('name'));
        }
      });

      ctx.action.mergeParams({
        ...(filters.length
          ? { filter: filters.length > 1 ? { or: filters } : filters[0] }
          : {}),
        fields: Array.from(fields)
      });

      return next();
    };
  }

  getCurrentUser(ctx) {
    // TODO: 获取当前用户应调用当前依赖用户插件的相关方法
    return ctx.state.currentUser;
  }

  async getRolesWithPermissions(ctx) {
    // TODO: 还未定义关联数据的权限如何表达
    const {
      resourceName,
      associated,
      associatedName,
      associatedKey,
      actionName
    } = ctx.action.params;

    const Role = ctx.db.getModel('roles');
    const permissionInclusion = {
      association: 'permissions',
      where: {
        collection_name: resourceName
      },
      required: true,
      include: [
        {
          association: 'actions_permissions',
          where: {
            name: actionName
          },
          required: true,
          // 对 hasMany 关系可以进行拆分查询，避免联表过多标识符超过 PG 的 64 字符限制
          separate: true,
          include: [
            {
              association: 'scope',
              attribute: ['filter']
            }
          ]
        },
        {
          association: 'fields_permissions',
          include: [
            {
              association: 'field',
              attributes: ['name']
            }
          ],
          separate: true,
        }
      ],
    };
    // 获取匿名用户的角色及权限
    const anonymousRoles = await Role.findAll({
      where: {
        anonymous: true
      },
      include: [
        permissionInclusion
      ]
    });
    // 获取登入用户的角色及权限
    const currentUser = this.getCurrentUser(ctx);
    const userRoles = currentUser ? await currentUser.getRoles({
      include: [
        permissionInclusion
      ]
    }) : [];

    return [...anonymousRoles, ...userRoles];
  }
}

export default async function (options = {}) {
  const instance = new Permissions(this, options);

  return instance;
}
