import { AppstoreAddOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useACLRoleContext } from '../acl/ACLProvider';
import { PluginManager } from '../plugin-manager';
import { ActionContext, useCompile } from '../schema-component';
import { getPluginsTabs, SettingsCenterContext } from './index';

export const PluginManagerLink = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <ActionContext.Provider value={{ visible, setVisible }}>
      <PluginManager.Toolbar.Item
        icon={<AppstoreAddOutlined />}
        title={t('Plugin manager')}
        onClick={() => {
          history.push('/admin/pm/list');
        }}
      />
    </ActionContext.Provider>
  );
};

const getBookmarkTabs = (data) => {
  const bookmarkTabs = [];
  data.forEach((plugin) => {
    const tabs = plugin.tabs;
    tabs.forEach((tab) => {
      tab.isBookmark && tab.isAllow && bookmarkTabs.push({ ...tab, path: `${plugin.key}/${tab.key}` });
    });
  });
  return bookmarkTabs;
};
export const SettingsCenterDropdown = () => {
  const { snippets = [] } = useACLRoleContext();
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const compile = useCompile();
  const history = useHistory();
  const itemData = useContext(SettingsCenterContext);
  const pluginsTabs = getPluginsTabs(itemData, snippets);
  const bookmarkTabs = getBookmarkTabs(pluginsTabs);
  return (
    <ActionContext.Provider value={{ visible, setVisible }}>
      <Dropdown
        placement="bottom"
        overlay={
          <Menu>
            <Menu.ItemGroup title={t('Bookmark')}>
              {bookmarkTabs.map((tab) => {
                return (
                  <Menu.Item
                    onClick={() => {
                      history.push('/admin/settings/' + tab.path);
                    }}
                    key={tab.path}
                  >
                    {compile(tab.title)}
                  </Menu.Item>
                );
              })}
            </Menu.ItemGroup>
            <Menu.Divider></Menu.Divider>
            <Menu.Item
              onClick={() => {
                history.push('/admin/settings');
              }}
              key="/admin/settings"
            >
              {t('All plugin settings')}
            </Menu.Item>
          </Menu>
        }
      >
        <PluginManager.Toolbar.Item
          icon={<SettingOutlined />}
          // title={t('All plugin settings')}
        ></PluginManager.Toolbar.Item>
      </Dropdown>
    </ActionContext.Provider>
  );
};
