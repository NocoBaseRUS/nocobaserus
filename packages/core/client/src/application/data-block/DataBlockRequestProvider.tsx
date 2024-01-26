import { useDeepCompareEffect } from 'ahooks';
import React, { FC, createContext, useContext, useEffect } from 'react';

import { UseRequestResult, useAPIClient, useRequest } from '../../api-client';
import { useDataBlockResourceV2 } from './DataBlockResourceProvider';
import { RecordProviderV2 } from '../collection';
import { AllDataBlockProps, useDataBlockPropsV2 } from './DataBlockProvider';

export const BlockRequestContextV2 = createContext<UseRequestResult<any>>(null);
BlockRequestContextV2.displayName = 'BlockRequestContextV2';

function useCurrentRequest<T>(options: Omit<AllDataBlockProps, 'type'>) {
  const resource = useDataBlockResourceV2();
  const { action, params = {}, record, requestService, requestOptions } = options;
  if (params.filterByTk === undefined) {
    delete params.filterByTk;
  }
  const request = useRequest<T>(
    requestService
      ? requestService
      : () => {
          if (record) return Promise.resolve({ data: record });
          if (!action) {
            throw new Error(
              `[nocobase]: The 'action' parameter is missing in the 'DataBlockRequestProvider' component`,
            );
          }
          return resource[action](params).then((res) => res.data);
        },
    {
      ...requestOptions,
      manual: true,
    },
  );

  // 因为修改 Schema 会导致 params 对象发生变化，所以这里使用 `DeepCompare`
  useDeepCompareEffect(() => {
    if (action) {
      request.run();
    }
  }, [params, action, record]);

  useEffect(() => {
    if (action) {
      request.run();
    }
  }, [resource]);

  return request;
}

function useParentRequest<T>(options: Omit<AllDataBlockProps, 'type'>) {
  const { sourceId, association, parentRecord } = options;
  const api = useAPIClient();
  return useRequest<T>(
    async () => {
      if (parentRecord) return Promise.resolve({ data: parentRecord });
      if (!association) return Promise.resolve({ data: undefined });
      // "association": "Collection.Field"
      const arr = association.split('.');
      // <collection>:get/<filterByTk>
      const url = `${arr[0]}:get/${sourceId}`;
      const res = await api.request({ url });
      return res.data;
    },
    {
      refreshDeps: [association, parentRecord, sourceId],
    },
  );
}

export const BlockRequestProviderV2: FC = ({ children }) => {
  const props = useDataBlockPropsV2();
  const {
    action,
    filterByTk,
    sourceId,
    params = {},
    association,
    collection,
    record,
    parentRecord,
    requestOptions,
    requestService,
  } = props;
  const currentRequest = useCurrentRequest<{ data: any }>({
    action,
    sourceId,
    record,
    association,
    collection,
    requestOptions,
    requestService,
    params: {
      ...params,
      filterByTk: filterByTk || params.filterByTk,
    },
  });

  const parentRequest = useParentRequest<{ data: any }>({
    sourceId,
    association,
    parentRecord,
  });

  return (
    <BlockRequestContextV2.Provider value={currentRequest}>
      {action !== 'list' ? (
        <RecordProviderV2
          isNew={action === undefined}
          record={currentRequest.data?.data}
          parentRecord={parentRequest.data?.data}
        >
          {children}
        </RecordProviderV2>
      ) : (
        children
      )}
    </BlockRequestContextV2.Provider>
  );
};

export const useDataBlockRequestV2 = <T extends {}>(): UseRequestResult<{ data: T }> => {
  const context = useContext(BlockRequestContextV2);
  if (!context) {
    throw new Error('useBlockRequest() must be used within a DataBlockRequestProvider');
  }

  return context;
};
