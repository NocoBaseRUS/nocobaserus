/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Plugin, useCollection_deprecated } from '@nocobase/client';
import { bulkEditActionSettings, deprecatedBulkEditActionSettings } from './BulkEditAction.Settings';
import { BulkEditActionInitializer } from './BulkEditActionInitializer';
import {
  BulkEditBlockInitializers_deprecated,
  CreateFormBulkEditBlockInitializers,
  bulkEditBlockInitializers,
} from './BulkEditBlockInitializers';
import {
  BulkEditFormActionInitializers_deprecated,
  bulkEditFormActionInitializers,
} from './BulkEditFormActionInitializers';
import { BulkEditFormItemInitializers_deprecated, bulkEditFormItemInitializers } from './BulkEditFormItemInitializers';
import { bulkEditFormItemSettings } from './bulkEditFormItemSettings';
import { BulkEditField } from './component/BulkEditField';
import { useCustomizeBulkEditActionProps } from './utils';
export class PluginActionBulkEditClient extends Plugin {
  async load() {
    this.app.addComponents({ BulkEditField });
    this.app.addScopes({ useCustomizeBulkEditActionProps });
    this.app.schemaSettingsManager.add(deprecatedBulkEditActionSettings);
    this.app.schemaSettingsManager.add(bulkEditActionSettings);
    this.app.schemaSettingsManager.add(bulkEditFormItemSettings);
    this.app.schemaInitializerManager.add(BulkEditFormItemInitializers_deprecated);
    this.app.schemaInitializerManager.add(bulkEditFormItemInitializers);
    this.app.schemaInitializerManager.add(CreateFormBulkEditBlockInitializers);
    this.app.schemaInitializerManager.add(BulkEditBlockInitializers_deprecated);
    this.app.schemaInitializerManager.add(bulkEditBlockInitializers);
    this.app.schemaInitializerManager.add(BulkEditFormActionInitializers_deprecated);
    this.app.schemaInitializerManager.add(bulkEditFormActionInitializers);

    const initializerData = {
      type: 'item',
      title: '{{t("Bulk edit")}}',
      name: 'bulkEdit',
      Component: BulkEditActionInitializer,
      schema: {
        'x-align': 'right',
        'x-decorator': 'ACLActionProvider',
        'x-action': 'customize:bulkEdit',
        'x-toolbar': 'ActionSchemaToolbar',
        'x-settings': 'actionSettings:bulkEdit',
        'x-acl-action': 'update',
        'x-acl-action-props': {
          skipScopeCheck: true,
        },
      },
      useVisible() {
        const collection = useCollection_deprecated() || ({} as any);
        const { unavailableActions } = collection;
        if (unavailableActions) {
          return !unavailableActions?.includes?.('update');
        }
        return true;
      },
    };

    this.app.schemaInitializerManager.addItem('table:configureActions', 'customize.bulkEdit', initializerData);
    this.app.schemaInitializerManager.addItem('gantt:configureActions', 'customize.bulkEdit', initializerData);
    this.app.schemaInitializerManager.addItem('map:configureActions', 'customize.bulkEdit', initializerData);
  }
}

export default PluginActionBulkEditClient;
