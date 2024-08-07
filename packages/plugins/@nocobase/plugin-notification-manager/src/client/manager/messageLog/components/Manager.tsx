/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Card } from 'antd';
import { messageLogsManagerSchema } from '../schemas';
import { SchemaComponent, SchemaComponentContext, useSchemaComponentContext } from '@nocobase/client';
import React, { useState } from 'react';

import { useNotificationTranslation } from '../../../locale';

export const MessageLogManager = () => {
  const { t } = useNotificationTranslation();
  const scCtx = useSchemaComponentContext();
  return (
    <SchemaComponentContext.Provider value={{ ...scCtx, designable: false }}>
      <Card bordered={false}>
        <SchemaComponent schema={messageLogsManagerSchema} scope={{ t }} />
      </Card>
    </SchemaComponentContext.Provider>
  );
};

MessageLogManager.displayName = 'MessageLogManager';
