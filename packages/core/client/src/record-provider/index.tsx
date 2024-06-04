/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React, { createContext, useContext, useMemo } from 'react';
import { CollectionRecordProvider, useCollection } from '../data-source';
import { useCurrentUserContext } from '../user';

/**
 * @deprecated
 */
export const RecordContext_deprecated = createContext({});
RecordContext_deprecated.displayName = 'RecordContext_deprecated';

/**
 * @deprecated
 */
export const RecordIndexContext = createContext(null);
RecordIndexContext.displayName = 'RecordIndexContext';

/**
 * @deprecated use `CollectionRecordProvider` instead
 */
export const RecordProvider: React.FC<{
  record: any;
  parent?: any;
  isNew?: boolean;
  collectionName?: string;
}> = (props) => {
  const { record, children, parent, isNew } = props;
  const collection = useCollection();
  const value = useMemo(() => {
    const res = { ...record };
    res['__parent'] = parent;
    res['__collectionName'] = collection?.name;
    return res;
  }, [record, parent, collection?.name]);

  return (
    <RecordContext_deprecated.Provider value={value}>
      <CollectionRecordProvider isNew={isNew} record={record} parentRecord={parent}>
        {children}
      </CollectionRecordProvider>
    </RecordContext_deprecated.Provider>
  );
};

/**
 * @deprecated
 */
export const RecordSimpleProvider: React.FC<{ value: Record<string, any>; children: React.ReactNode }> = (props) => {
  return <RecordContext_deprecated.Provider {...props} />;
};

/**
 * @deprecated
 */
export const RecordIndexProvider: React.FC<{ index: any }> = (props) => {
  const { index, children } = props;
  return <RecordIndexContext.Provider value={index}>{children}</RecordIndexContext.Provider>;
};

/**
 * @deprecated use `useCollectionRecord` instead
 */
export function useRecord<D = any>() {
  return useContext(RecordContext_deprecated) as D;
}

/**
 * @deprecated
 */
export function useRecordIndex() {
  return useContext(RecordIndexContext);
}

/**
 * @deprecated
 */
export const useRecordIsOwn = () => {
  const record = useRecord();
  const ctx = useCurrentUserContext();
  if (!record?.createdById) {
    return false;
  }
  return record?.createdById === ctx?.data?.data?.id;
};
