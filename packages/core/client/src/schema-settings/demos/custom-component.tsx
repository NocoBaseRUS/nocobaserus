/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React from 'react';
import { Application, Plugin, SchemaSettings, useSchemaSettingsRender } from '@nocobase/client';
import { Button } from 'antd';

const mySchemaSetting = new SchemaSettings({
  name: 'MySchemaSetting',
  Component: Button, // 自定义组件
  componentProps: {
    type: 'primary',
    children: '自定义按钮',
  },
  // Component: () => <Button type='primary'>自定义按钮</Button>, // 等同于上面效果
  items: [
    {
      name: 'demo1',
      type: 'item',
      componentProps: {
        title: 'DEMO',
      },
    },
  ],
});

const Root = () => {
  const { render } = useSchemaSettingsRender('MySchemaSetting');
  return <div>{render()}</div>;
};

class MyPlugin extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(mySchemaSetting);
  }
}

const app = new Application({
  plugins: [MyPlugin],
  providers: [Root],
});

export default app.getRootComponent();
