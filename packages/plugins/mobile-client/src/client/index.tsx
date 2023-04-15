import { SchemaComponentOptions, SettingsCenterProvider } from '@nocobase/client';
import React from 'react';
import { useTranslation } from './locale';
import { AppConfiguration, InterfaceConfiguration } from './configuration';
import { MobileRouteSwitchProvider } from './routes/RouterSwitch';
import { MobileCore } from './core';

export default React.memo((props) => {
  const { t } = useTranslation();

  return (
    <SettingsCenterProvider
      settings={{
        ['mobile-client']: {
          title: t('Mobile Client-side'),
          icon: 'MobileOutlined',
          tabs: {
            interface: {
              title: t('Interface Configuration'),
              component: InterfaceConfiguration,
            },
            app: {
              title: t('App Configuration'),
              component: AppConfiguration,
            },
          },
        },
      }}
    >
      <MobileRouteSwitchProvider>
        <MobileCore>{props.children}</MobileCore>
      </MobileRouteSwitchProvider>
    </SettingsCenterProvider>
  );
});
