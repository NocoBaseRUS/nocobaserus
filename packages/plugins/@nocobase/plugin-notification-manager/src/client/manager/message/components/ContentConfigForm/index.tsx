/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React from 'react';
import { SchemaComponent } from '@nocobase/client';
import { observer } from '@formily/react';
import { useChannelTypeMap } from '../../../../hooks';
import { useNotificationTranslation } from '../../../../locale';
export const ContentConfigForm = observer<{ variableOptions: any; channelType: string }>(
  ({ variableOptions, channelType }) => {
    const { t } = useNotificationTranslation();

    const providerMap = useChannelTypeMap();
    const { ContentConfigForm = () => null } = (channelType ? providerMap[channelType] : {}).components || {};
    const schema = {
      type: 'void',
      'x-component': 'ContentConfigForm',
      'x-component-props': {
        variableOptions,
      },
    };
    return <SchemaComponent schema={schema} components={{ ContentConfigForm }} scope={{ t, variableOptions }} />;
  },
  { displayName: 'MessageConfigForm' },
);
