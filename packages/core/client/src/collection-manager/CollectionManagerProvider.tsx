import { Spin } from 'antd';
import React, { useContext, useState } from 'react';
import { keyBy } from 'lodash';
import { useAPIClient, useRequest } from '../api-client';
import { CollectionManagerSchemaComponentProvider } from './CollectionManagerSchemaComponentProvider';
import { CollectionManagerContext } from './context';
import { CollectionManagerOptions } from './types';
import { templateOptions } from '../collection-manager/Configuration/templates';
import * as defaultInterfaces from './interfaces';
import { useCollectionHistory } from './CollectionHistoryProvider';

export const CollectionManagerProvider: React.FC<CollectionManagerOptions> = (props) => {
  const { service, interfaces, collections = [], refreshCM, templates } = props;
  const defaultTemplates = keyBy(templateOptions(), (item) => item.name);
  const ctx = useContext(CollectionManagerContext);
  return (
    <CollectionManagerContext.Provider
      value={{
        ...ctx,
        service,
        interfaces: { ...defaultInterfaces, ...ctx.interfaces, ...interfaces },
        templates: { ...defaultTemplates, ...templates },
        collections,
        refreshCM,
      }}
    >
      <CollectionManagerSchemaComponentProvider>{props.children}</CollectionManagerSchemaComponentProvider>
    </CollectionManagerContext.Provider>
  );
};

export const RemoteCollectionManagerProvider = (props: any) => {
  const api = useAPIClient();
  const [contentLoading, setContentLoading] = useState(false);
  const { refreshCH } = useCollectionHistory();
  const options = {
    resource: 'collections',
    action: 'list',
    params: {
      paginate: false,
      appends: ['fields', 'fields.uiSchema'],
      filter: {
        // inherit: false,
      },
      sort: ['sort'],
    },
  };
  const service = useRequest(options);
  if (service.loading) {
    return <Spin />;
  }

  const refreshCM = async (opts) => {
    if (opts?.reload) {
      setContentLoading(true);
    }
    const { data } = await api.request(options);
    service.mutate(data);
    await refreshCH();
    if (opts?.reload) {
      setContentLoading(false);
    }
    return data?.data || [];
  };

  return (
    <CollectionManagerProvider
      service={{ ...service, contentLoading, setContentLoading }}
      collections={service?.data?.data}
      refreshCM={refreshCM}
      {...props}
    />
  );
};
