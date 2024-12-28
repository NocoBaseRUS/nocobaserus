/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { ISchema } from '@formily/json-schema';
import { uid } from '@formily/shared';
import _ from 'lodash';

export enum NocoBaseDesktopRouteType {
  group = 'group',
  page = 'page',
  link = 'link',
  tabs = 'tabs',
}

/**
 * 尽量与移动端的结构保持一致
 */
export interface NocoBaseDesktopRoute {
  id?: number;
  parentId?: number;
  parent?: NocoBaseDesktopRoute;
  children?: NocoBaseDesktopRoute[];

  title?: string;
  icon?: string;
  schemaUid?: string;
  tabSchemaName?: string;
  /**
   * schemaUid 是用于存储菜单的 schema uid，pageSchemaUid 是用于存储菜单中的页面的 schema uid
   *
   * 注意：仅 type 为 page 时，pageSchemaUid 才有值
   */
  pageSchemaUid?: string;
  type?: NocoBaseDesktopRouteType;
  options?: any;
  sort?: number;
  hideInMenu?: boolean;

  // 关联字段
  roles?: Array<{
    name: string;
    title: string;
  }>;

  // 系统字段
  createdAt?: string;
  updatedAt?: string;
  createdBy?: any;
  updatedBy?: any;
}

/**
 * 为了简化菜单的重构，直接讲路由数据转换为 Schema 数据。这样就可以实现在不大改组件的前提下，完成菜单的重构。
 * 注：菜单重构指的是将菜单的结构由原来的 Schema 结构改为一个树结构，并保存在 desktopRoutes 中。
 * @param routes
 */
export function convertRoutesToSchema(routes: NocoBaseDesktopRoute[]) {
  const routesSchemaList = routes.map((route) => convertRouteToSchema(route)).filter(Boolean);

  return {
    type: 'void',
    'x-component': 'Menu',
    'x-designer': 'Menu.Designer',
    'x-initializer': 'MenuItemInitializers',
    'x-component-props': {
      mode: 'mix',
      theme: 'dark',
      onSelect: '{{ onSelect }}',
      sideMenuRefScopeKey: 'sideMenuRef',
    },
    properties: _.fromPairs(routesSchemaList.map((schema) => [uid(), schema])),
    name: 'wecmvuxtid7',
    'x-uid': 'nocobase-admin-menu',
    'x-async': false,
  } as ISchema;
}

const routeTypeToComponent = {
  [NocoBaseDesktopRouteType.page]: 'Menu.Item',
  [NocoBaseDesktopRouteType.group]: 'Menu.SubMenu',
  [NocoBaseDesktopRouteType.link]: 'Menu.URL',
};

function convertRouteToSchema(route: NocoBaseDesktopRoute) {
  // tabs 需要在页面 Schema 中处理
  if (route.type === NocoBaseDesktopRouteType.tabs) {
    return null;
  }

  if (route.hideInMenu) {
    return null;
  }

  const children = route.children?.map((child) => convertRouteToSchema(child)).filter(Boolean);

  return {
    _isJSONSchemaObject: true,
    version: '2.0',
    type: 'void',
    title: route.title,
    'x-component': routeTypeToComponent[route.type],
    'x-decorator': 'ACLMenuItemProvider',
    'x-component-props': {
      icon: route.icon,
      href: route.options?.href,
      params: route.options?.params,
      hidden: route.hideInMenu,
    },
    properties: children
      ? _.fromPairs(
          children.map((child) => [
            uid(), // 生成唯一的 key
            child,
          ]),
        )
      : {},
    'x-app-version': '1.5.0-beta.12',
    'x-uid': route.schemaUid,
    'x-async': false,
    __route__: route,
  };
}
