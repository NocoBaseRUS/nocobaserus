/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { ISchema, useFieldSchema } from '@formily/react';
import _ from 'lodash';
import { useCallback, useContext } from 'react';
import { useLocationNoUpdate, useNavigateNoUpdate } from '../../../application';
import {
  CollectionRecord,
  useAssociationName,
  useCollection,
  useCollectionManager,
  useCollectionParentRecord,
  useCollectionRecord,
  useDataBlockRequest,
  useDataSourceKey,
} from '../../../data-source';
import { ActionContext } from '../action/context';
import { PopupVisibleProviderContext, useCurrentPopupContext } from './PagePopups';
import { usePopupSettings } from './PopupSettingsProvider';
import { PopupContext, usePopupContextInActionOrAssociationField } from './usePopupContextInActionOrAssociationField';

export interface PopupParams {
  /** popup uid */
  popupuid: string;
  /** record id */
  filterbytk?: string;
  /** source id */
  sourceid?: string;
  /** tab uid */
  tab?: string;
}

export interface PopupContextStorage extends PopupContext {
  schema?: ISchema;
  record?: CollectionRecord;
  parentRecord?: CollectionRecord;
  /** used to refresh data for block */
  service?: any;
  sourceId?: string;
}

const popupsContextStorage: Record<string, PopupContextStorage> = {};

export const getStoredPopupContext = (popupUid: string) => {
  return popupsContextStorage[popupUid];
};

export const storePopupContext = (popupUid: string, params: PopupContextStorage) => {
  popupsContextStorage[popupUid] = params;
};

export const getPopupParamsFromPath = _.memoize((path: string) => {
  const popupPaths = path.split('/popups/');
  return popupPaths.filter(Boolean).map((popupPath) => {
    const [popupUid, ...popupParams] = popupPath.split('/').filter(Boolean);
    const obj = {};

    for (let i = 0; i < popupParams.length; i += 2) {
      obj[popupParams[i]] = decodePathValue(popupParams[i + 1]);
    }

    return {
      popupuid: popupUid,
      ...obj,
    } as PopupParams;
  });
});

export const getPopupPathFromParams = (params: PopupParams) => {
  const { popupuid: popupUid, tab, filterbytk, sourceid } = params;
  const popupPath = [
    popupUid,
    filterbytk && 'filterbytk',
    filterbytk,
    sourceid && 'sourceid',
    sourceid,
    tab && 'tab',
    tab,
  ].filter(Boolean);

  return `/popups/${popupPath.map((item) => encodePathValue(item)).join('/')}`;
};

export const usePagePopup = () => {
  const navigate = useNavigateNoUpdate();
  const location = useLocationNoUpdate();
  const fieldSchema = useFieldSchema();
  const dataSourceKey = useDataSourceKey();
  const record = useCollectionRecord();
  const parentRecord = useCollectionParentRecord();
  const collection = useCollection();
  const cm = useCollectionManager();
  const association = useAssociationName();
  const { visible, setVisible } = useContext(PopupVisibleProviderContext) || { visible: false, setVisible: () => {} };
  const { params: popupParams } = useCurrentPopupContext();
  const service = useDataBlockRequest();
  const { isPopupVisibleControlledByURL } = usePopupSettings();
  const { setVisible: setVisibleFromAction } = useContext(ActionContext);
  const { updatePopupContext } = usePopupContextInActionOrAssociationField();
  const getSourceId = useCallback(
    (_parentRecordData?: Record<string, any>) =>
      (_parentRecordData || parentRecord?.data)?.[cm.getSourceKeyByAssociation(association)],
    [parentRecord, association],
  );
  const uid = fieldSchema['x-uid'];

  const getNewPathname = useCallback(
    ({
      tabKey,
      popupUid,
      recordData,
      sourceId,
    }: {
      popupUid: string;
      recordData: Record<string, any>;
      sourceId: string;
      tabKey?: string;
    }) => {
      const filterByTK = cm.getFilterByTK(association || collection, recordData);
      return getPopupPathFromParams({
        popupuid: popupUid,
        filterbytk: filterByTK,
        sourceid: sourceId,
        tab: tabKey,
      });
    },
    [association, cm, collection, dataSourceKey, parentRecord?.data, association],
  );

  const getPopupContext = useCallback(() => {
    const context = {
      dataSource: dataSourceKey,
      collection: association ? undefined : collection.name,
      association,
    };

    return _.omitBy(context, _.isNil) as PopupContext;
  }, [dataSourceKey, collection, association]);

  const openPopup = useCallback(
    ({
      recordData,
      parentRecordData,
    }: {
      recordData?: Record<string, any>;
      parentRecordData?: Record<string, any>;
    } = {}) => {
      if (!isPopupVisibleControlledByURL) {
        return setVisibleFromAction?.(true);
      }

      const sourceId = getSourceId(parentRecordData);

      recordData = recordData || record?.data;
      const pathname = getNewPathname({ popupUid: uid, recordData, sourceId });
      let url = location.pathname;
      if (_.last(url) === '/') {
        url = url.slice(0, -1);
      }

      storePopupContext(uid, {
        schema: fieldSchema,
        record: new CollectionRecord({ isNew: false, data: recordData }),
        parentRecord: parentRecordData ? new CollectionRecord({ isNew: false, data: parentRecordData }) : parentRecord,
        service,
        dataSource: dataSourceKey,
        collection: collection.name,
        association,
        sourceId,
      });

      updatePopupContext(getPopupContext());

      navigate(withSearchParams(`${url}${pathname}`));
    },
    [
      association,
      cm,
      collection,
      dataSourceKey,
      fieldSchema,
      getNewPathname,
      navigate,
      parentRecord,
      record,
      service,
      location,
      isPopupVisibleControlledByURL,
      getSourceId,
      getPopupContext,
      uid,
    ],
  );

  const closePopup = useCallback(() => {
    if (!isPopupVisibleControlledByURL) {
      return setVisibleFromAction?.(false);
    }

    // 1. If there is a value in the cache, it means that the current popup was opened by manual click, so we can simply return to the previous record;
    // 2. If there is no value in the cache, it means that the current popup was opened by clicking the URL elsewhere, and since there is no history,
    //    we need to construct the URL of the previous record to return to;
    if (getStoredPopupContext(uid)) {
      navigate(-1);
    } else {
      navigate(withSearchParams(removeLastPopupPath(location.pathname)), { replace: true });
    }
  }, [navigate, location, isPopupVisibleControlledByURL, uid]);

  const changeTab = useCallback(
    (key: string) => {
      const sourceId = getSourceId();
      const pathname = getNewPathname({
        tabKey: key,
        popupUid: popupParams?.popupuid,
        recordData: record?.data,
        sourceId,
      });
      let url = removeLastPopupPath(location.pathname);
      if (_.last(url) === '/') {
        url = url.slice(0, -1);
      }
      navigate(`${url}${pathname}`, {
        replace: true,
      });
    },
    [getNewPathname, navigate, popupParams?.popupuid, record?.data, location],
  );

  return {
    /**
     * used to open popup by changing the url
     */
    openPopup,
    /**
     * used to close popup by changing the url
     */
    closePopup,
    visibleWithURL: visible,
    setVisibleWithURL: setVisible,
    popupParams,
    changeTab,
    getPopupContext,
  };
};

// e.g. /popups/popupUid/popups/popupUid2 -> /popups/popupUid/
export function removeLastPopupPath(path: string) {
  if (!path.includes('popups')) {
    return path;
  }

  const result = path.split('popups').slice(0, -1).join('popups');

  return result.endsWith('/') ? result.slice(0, -1) : result;
}

export function withSearchParams(path: string) {
  return `${path}${window.location.search}`;
}

/**
 * Prevent problems when "popups" appears in the path
 * @param value
 * @returns
 */
export function encodePathValue(value: string) {
  const encodedValue = encodeURIComponent(value);
  if (encodedValue === 'popups') {
    return window.btoa(value);
  }
  return encodedValue;
}

/**
 * Prevent problems when "popups" appears in the path
 * @param value
 * @returns
 */
export function decodePathValue(value: string) {
  if (value === window.btoa('popups')) {
    return 'popups';
  }
  return decodeURIComponent(value);
}
