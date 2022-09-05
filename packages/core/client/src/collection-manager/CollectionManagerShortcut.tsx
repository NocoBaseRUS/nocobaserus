import { DatabaseOutlined } from '@ant-design/icons';
import { ISchema } from '@formily/react';
import { uid } from '@formily/shared';
import { Card } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PluginManager } from '../plugin-manager';
import { ActionContext, SchemaComponent } from '../schema-component';
import { AddFieldAction, ConfigurationTable, EditFieldAction } from './Configuration';

const schema: ISchema = {
  type: 'object',
  properties: {
    [uid()]: {
      'x-component': 'Action.Drawer',
      type: 'void',
      title: '{{t("Collections & Fields")}}',
      properties: {
        configuration: {
          'x-component': 'ConfigurationTable',
        },
      },
    },
  },
};

const schema2: ISchema = {
  type: 'object',
  properties: {
    [uid()]: {
      'x-component': 'ConfigurationTable',
    },
  },
};

export const CollectionManagerPane = () => {
  return (
    <Card bordered={false}>
      <SchemaComponent schema={schema2} components={{ ConfigurationTable, AddFieldAction, EditFieldAction }} />
    </Card>
  );
};

export const CollectionManagerShortcut = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <ActionContext.Provider value={{ visible, setVisible }}>
      <PluginManager.Toolbar.Item
        icon={<DatabaseOutlined />}
        title={t('Collections & Fields')}
        onClick={() => {
          setVisible(true);
        }}
      />
      <SchemaComponent schema={schema} components={{ ConfigurationTable, AddFieldAction, EditFieldAction }} />
    </ActionContext.Provider>
  );
};
