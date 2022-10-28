import { LockOutlined } from '@ant-design/icons';
import { ISchema } from '@formily/react';
import { uid } from '@formily/shared';
import { Card } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { PluginManager } from '../plugin-manager';
import { ActionContext, SchemaComponent } from '../schema-component';
import * as components from './Configuration';

const schema: ISchema = {
  type: 'object',
  properties: {
    [uid()]: {
      'x-component': 'Action.Drawer',
      type: 'void',
      title: '{{t("Roles & Permissions")}}',
      properties: {
        hello1: {
          type: 'void',
          'x-component': 'RoleTable',
        },
      },
    },
  },
};

const schema2: ISchema = {
  type: 'object',
  properties: {
    [uid()]: {
      'x-component': 'RoleTable',
    },
  },
};

export const ACLPane = () => {
  return (
    <Card bordered={false}>
      <SchemaComponent components={components} schema={schema2} />
    </Card>
  );
};

export const ACLShortcut = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <PluginManager.Toolbar.Item
      icon={<LockOutlined />}
      title={t('Roles & Permissions')}
      onClick={() => {
        history.push('/admin/settings/acl/roles');
      }}
    />
  );
};

export const ACLShortcut2 = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <ActionContext.Provider value={{ visible, setVisible }}>
      <PluginManager.Toolbar.Item
        icon={<LockOutlined />}
        title={t('Roles & Permissions')}
        onClick={() => {
          setVisible(true);
        }}
      />
      <SchemaComponent components={components} schema={schema} />
    </ActionContext.Provider>
  );
};
