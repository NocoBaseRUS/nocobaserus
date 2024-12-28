/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { FormLayout } from '@formily/antd-v5';
import { SchemaOptionsContext } from '@formily/react';
import { uid } from '@formily/shared';
import React, { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SchemaInitializerItem, useSchemaInitializer } from '../../application';
import { useGlobalTheme } from '../../global-theme';
import { NocoBaseDesktopRouteType } from '../../route-switch/antd/admin-layout/convertRoutesToSchema';
import {
  FormDialog,
  SchemaComponent,
  SchemaComponentOptions,
  useNocoBaseRoutes,
  useParentRoute,
} from '../../schema-component';
import { useStyles } from '../../schema-component/antd/menu/MenuItemInitializers';

export const PageMenuItem = () => {
  const { insert } = useSchemaInitializer();
  const { t } = useTranslation();
  const options = useContext(SchemaOptionsContext);
  const { theme } = useGlobalTheme();
  const { componentCls, hashId } = useStyles();
  const parentRoute = useParentRoute();
  const { createRoute } = useNocoBaseRoutes();

  const handleClick = useCallback(async () => {
    const values = await FormDialog(
      t('Add page'),
      () => {
        return (
          <SchemaComponentOptions scope={options.scope} components={{ ...options.components }}>
            <FormLayout layout={'vertical'}>
              <SchemaComponent
                schema={{
                  properties: {
                    title: {
                      title: t('Menu item title'),
                      required: true,
                      'x-component': 'Input',
                      'x-decorator': 'FormItem',
                    },
                    icon: {
                      title: t('Icon'),
                      'x-component': 'IconPicker',
                      'x-decorator': 'FormItem',
                    },
                  },
                }}
              />
            </FormLayout>
          </SchemaComponentOptions>
        );
      },
      theme,
    ).open({
      initialValues: {},
    });
    const { title, icon } = values;
    const menuSchemaUid = uid();
    const pageSchemaUid = uid();
    const tabSchemaUid = uid();

    // 创建一个路由到 desktopRoutes 表中
    const {
      data: { data: route },
    } = await createRoute(
      {
        type: NocoBaseDesktopRouteType.page,
        title: values.title,
        icon: values.icon,
        parentId: parentRoute?.id,
        schemaUid: menuSchemaUid,
        pageSchemaUid,
      },
      false,
    );

    await createRoute(
      {
        type: NocoBaseDesktopRouteType.tabs,
        title: '{{t("Tab")}}',
        parentId: route.id,
        schemaUid: tabSchemaUid,
      },
      false,
    );

    // 同时插入一个对应的 Schema
    insert(getPageMenuSchema({ title, icon, pageSchemaUid, tabSchemaUid, menuSchemaUid }));
  }, [insert, options.components, options.scope, t, theme]);
  return <SchemaInitializerItem title={t('Page')} onClick={handleClick} className={`${componentCls} ${hashId}`} />;
};

export function getPageMenuSchema({ title, icon, pageSchemaUid, tabSchemaUid, menuSchemaUid }) {
  return {
    type: 'void',
    title,
    'x-component': 'Menu.Item',
    'x-decorator': 'ACLMenuItemProvider',
    'x-component-props': {
      icon,
    },
    properties: {
      page: {
        type: 'void',
        'x-component': 'Page',
        'x-async': true,
        properties: {
          tab1: {
            type: 'void',
            'x-component': 'Grid',
            'x-initializer': 'page:addBlock',
            properties: {},
            'x-uid': tabSchemaUid,
          },
        },
        'x-uid': pageSchemaUid,
      },
    },
    'x-uid': menuSchemaUid,
  };
}
