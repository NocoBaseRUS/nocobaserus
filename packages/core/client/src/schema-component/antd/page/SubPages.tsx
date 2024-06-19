/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { useFieldSchema } from '@formily/react';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {
  useCollectionParentRecord,
  useCollectionRecord,
  useCollectionRecordData,
} from '../../../data-source/collection-record/CollectionRecordProvider';
import { useAssociationName } from '../../../data-source/collection/AssociationProvider';
import { useCollectionManager } from '../../../data-source/collection/CollectionManagerProvider';
import { useCollection } from '../../../data-source/collection/CollectionProvider';
import { DataBlockProvider } from '../../../data-source/data-block/DataBlockProvider';
import { useDataSourceKey } from '../../../data-source/data-source/DataSourceProvider';
import { DeclareVariable } from '../../../modules/variable/DeclareVariable';
import { RemoteSchemaComponent } from '../../core/RemoteSchemaComponent';
import { useSubPagesStyle } from './SubPages.style';
import { TabsPropsProvider } from './TabsPropsProvider';
import { PopupParams } from './pagePopupUtils';

export interface SubPageParams extends Omit<PopupParams, 'popupUid'> {
  subPageUid: string;
}

const SubPageVariablesProvider: FC = (props) => {
  const { t } = useTranslation();
  const collection = useCollection();
  const recordData = useCollectionRecordData();
  return (
    <DeclareVariable name="$nPopupRecord" title={t('Current popup record')} value={recordData} collection={collection}>
      {props.children}
    </DeclareVariable>
  );
};

const SubPageTabsPropsProvider: FC<{ params: SubPageParams }> = (props) => {
  const navigate = useNavigate();
  const onTabClick = useCallback((key: string) => {
    let pathname = window.location.pathname.split('/tab/')[0];
    if (pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    navigate(`${pathname}/tab/${key}`);
  }, []);

  return (
    <TabsPropsProvider activeKey={props.params.tab} onTabClick={onTabClick}>
      {props.children}
    </TabsPropsProvider>
  );
};

const SubPageProvider: FC<{ params: SubPageParams }> = (props) => {
  return (
    <DataBlockProvider
      dataSource={props.params.datasource}
      collection={props.params.collection}
      association={props.params.association}
      filterByTk={props.params.filterbytk}
      sourceId={props.params.sourceid}
      action="get"
    >
      <SubPageTabsPropsProvider params={props.params}>
        <SubPageVariablesProvider>{props.children}</SubPageVariablesProvider>
      </SubPageTabsPropsProvider>
    </DataBlockProvider>
  );
};

export const SubPage = () => {
  const params: any = useParams();
  const { styles } = useSubPagesStyle();
  return (
    <div className={styles.container}>
      <SubPageProvider params={params}>
        <RemoteSchemaComponent uid={params.subPageUid} onlyRenderProperties />
      </SubPageProvider>
      <Outlet />
    </div>
  );
};

export const getSubPagePathFromParams = (params: SubPageParams) => {
  const { subPageUid, tab, datasource, filterbytk, collection, association, sourceid } = params;
  const popupPath = [
    subPageUid,
    'datasource',
    datasource,
    'filterbytk',
    filterbytk,
    collection && 'collection',
    collection,
    association && 'association',
    association,
    sourceid && 'sourceid',
    sourceid,
    tab && 'tab',
    tab,
  ].filter(Boolean);

  return `/subpages/${popupPath.join('/')}`;
};

export const useNavigateTOSubPage = () => {
  const navigate = useNavigate();
  const fieldSchema = useFieldSchema();
  const dataSourceKey = useDataSourceKey();
  const record = useCollectionRecord();
  const parentRecord = useCollectionParentRecord();
  const collection = useCollection();
  const cm = useCollectionManager();
  const association = useAssociationName();

  const navigateToSubPage = useCallback(() => {
    if (!fieldSchema['x-uid']) {
      return;
    }

    const subPageUid = fieldSchema.properties[Object.keys(fieldSchema.properties)[0]]['x-uid'];
    const filterByTK = record?.data?.[collection.getPrimaryKey()];
    const sourceId = parentRecord?.data?.[cm.getCollection(association?.split('.')[0])?.getPrimaryKey()];
    const params = {
      schema: fieldSchema,
      subPageUid,
      datasource: dataSourceKey,
      filterbytk: filterByTK,
      collection: association ? undefined : collection.name,
      association,
      sourceid: sourceId,
      record,
      parentRecord,
    };
    const pathname = getSubPagePathFromParams(params);

    navigate(`/admin${pathname}`);
  }, [fieldSchema]);

  return { navigateToSubPage };
};
