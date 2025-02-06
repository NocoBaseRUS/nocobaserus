/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Plugin } from '@nocobase/client';
import { DesktopRoutesManager } from './DesktopRoutesManager';
import { lang as t } from './locale';
import { MobileRoutesManager } from './MobileRoutesManager';

class PluginClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('routes', {
      title: t('Routes'),
      icon: 'ApartmentOutlined',
      aclSnippet: 'pm.routes',
    });
    this.app.pluginSettingsManager.add(`routes.desktop`, {
      title: t('Desktop routes'),
      Component: DesktopRoutesManager,
      aclSnippet: 'pm.routes.desktop',
      sort: 1,
    });

    const mobilePlugin: any = this.app.pluginManager.get('@nocobase/plugin-mobile');

    if (mobilePlugin?.options?.enabled) {
      this.app.pluginSettingsManager.add(`routes.mobile`, {
        title: t('Mobile routes'),
        Component: MobileRoutesManager,
        aclSnippet: 'pm.routes.mobile',
        sort: 2,
      });
    }
  }
}

export default PluginClient;
