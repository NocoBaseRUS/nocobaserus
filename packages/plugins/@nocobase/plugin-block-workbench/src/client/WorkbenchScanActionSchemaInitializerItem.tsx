/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import {
  SchemaSettings,
  useSchemaInitializer,
  useSchemaInitializerItem,
  useActionContext,
  ISchema,
  ButtonEditor,
} from '@nocobase/client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ModalActionSchemaInitializerItem } from './ModalActionSchemaInitializerItem';

export const workbenchActionSettingsScanQrCode = new SchemaSettings({
  name: 'workbench:actionSettings:scanQrCode',
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        return { hasIconColor: true };
      },
    },
    {
      name: 'd1',
      type: 'divider',
    },
    {
      type: 'remove',
      name: 'remove',
    },
  ],
});

export function WorkbenchScanActionSchemaInitializerItem(props) {
  const itemConfig = useSchemaInitializerItem();
  // 调用插入功能
  const { insert } = useSchemaInitializer();
  const { t } = useTranslation();
  const ctx = useActionContext();
  const useCancelAction = () => {
    const { setVisible } = useActionContext();
    return {
      run() {
        setVisible(false);
      },
    };
  };

  return (
    <ModalActionSchemaInitializerItem
      title={itemConfig.title}
      modalSchema={{
        title: 'Add Scan Qr code',
        properties: {
          title: {
            title: t('Title'),
            required: true,
            'x-component': 'Input',
            'x-decorator': 'FormItem',
          },
          icon: {
            title: t('Icon'),
            required: true,
            'x-component': 'IconPicker',
            'x-decorator': 'FormItem',
          },
          iconColor: {
            title: t('Color'),
            required: true,
            default: '#1677FF',
            'x-component': 'ColorPicker',
            'x-decorator': 'FormItem',
          },
        },
      }}
      onSubmit={(values) => {
        insert({
          type: 'void',
          title: values.title,
          'x-component': 'WorkbenchAction',
          'x-toolbar': 'ActionSchemaToolbar',
          'x-settings': 'workbench:actionSettings:scanQrCode',
          'x-component-props': {
            icon: values.icon,
            iconColor: values.iconColor,
            openMode: 'modal',
          },
          properties: {
            modal: {
              type: 'void',
              'x-component': 'Action.Modal',
              title: '扫一扫',
              'x-decorator': 'FormV2',
              properties: {
                scanner: {
                  'x-component': 'QRCodeScanner',
                  'x-component-props': {
                    fps: 10,
                    qrbox: 250,
                    disableFlip: false,
                  },
                },
                footer: {
                  type: 'void',
                  'x-component': 'Action.Modal.Footer',
                  properties: {
                    close: {
                      title: 'Close',
                      'x-component': 'Action',
                      'x-component-props': {
                        type: 'default',
                        useAction: useCancelAction,
                      },
                    },
                  },
                },
              },
            },
          },
        } as ISchema);
      }}
    />
  );
}
