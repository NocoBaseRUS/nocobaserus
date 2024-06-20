/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { SpinLoading } from 'antd-mobile';
import { useLocation, useNavigate } from 'react-router-dom';

import { PluginMobileClient } from '../../index';
import { useAPIClient, usePlugin, useRequest } from '@nocobase/client';
import { IResource } from '@nocobase/sdk';

export interface TabItem {
  id: number | string;
  url?: string;
  title: string;
  options: any;
  parentId?: number | string;
  children?: TabItem[];
}

export interface MobileTabContextValue {
  tabList?: TabItem[];
  refresh: () => void;
  resource: IResource;
}

export const MobileTabContext = createContext<MobileTabContextValue>(null);
MobileTabContext.displayName = 'MobileTabContext';

export const useMobileTabContext = () => {
  return useContext(MobileTabContext);
};

function useHomeNavigate(tabList: TabItem[]) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const mobilePlugin = usePlugin(PluginMobileClient);

  // 如果是根路径且没有自定义首页，则跳转到第一个 tab
  useEffect(() => {
    if (!tabList.length || pathname !== '/') return;
    const routesObject = mobilePlugin.mobileRouter.getRoutes();
    const hasCustomHomePage = Object.values(routesObject).find((route) => {
      return route.path === '/' && (route.Component !== 'MobileLayout' || route.element);
    });
    if (!hasCustomHomePage) {
      navigate(tabList[0].url);
    }
  }, [pathname, tabList]);
}

export const MobileTabContextProvider = ({ children }) => {
  const api = useAPIClient();
  const resource = useMemo(() => api.resource('mobile-tabs'), [api]);
  const {
    data,
    runAsync: refresh,
    loading,
  } = useRequest<{ data: any[] }>(() => resource.list().then((res) => res.data));
  const tabList = useMemo(() => data?.data || [], [data]);

  useHomeNavigate(tabList);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <SpinLoading />
      </div>
    );
  }
  return <MobileTabContext.Provider value={{ tabList, refresh, resource }}>{children}</MobileTabContext.Provider>;
};
