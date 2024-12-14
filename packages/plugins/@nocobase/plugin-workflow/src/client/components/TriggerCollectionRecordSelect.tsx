/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React from 'react';

import { parseCollectionName, RemoteSelect, useApp } from '@nocobase/client';

import { useFlowContext } from '../FlowContext';

export function TriggerCollectionRecordSelect(props) {
  const { workflow } = useFlowContext();
  const app = useApp();

  const [dataSourceName, collectionName] = parseCollectionName(workflow.config.collection);
  const { collectionManager } = app.dataSourceManager.getDataSource(dataSourceName);
  const collection = collectionManager.getCollection(collectionName);

  return (
    <RemoteSelect
      objectValue
      dataSource={dataSourceName}
      fieldNames={{
        label: collection.titleField,
        value: 'id',
      }}
      service={{
        resource: collectionName,
      }}
      manual={false}
      {...props}
    />
  );
}
