/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { ISchema } from '@formily/json-schema';
import _ from 'lodash';
import { FC, default as React, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPIClient } from '../../../api-client';
import { DataBlockProvider } from '../../../data-source/data-block/DataBlockProvider';
import { BlockRequestContext } from '../../../data-source/data-block/DataBlockRequestProvider';
import { SchemaComponent } from '../../core';
import { TabsContextProvider } from '../tabs/context';
import {
  PopupParams,
  PopupParamsStorage,
  getPopupParamsFromPath,
  getStoredPopupParams,
  usePagePopup,
} from './pagePopupUtils';

interface PopupsVisibleProviderProps {
  visible: boolean;
  setVisible?: (value: boolean) => void;
}
interface PopupsProviderProps {
  popupParams: PopupParams;
}

export const PopupsVisibleProviderContext = React.createContext<PopupsVisibleProviderProps>(null);
export const PopupsProviderContext = React.createContext<PopupsProviderProps>(null);
PopupsVisibleProviderContext.displayName = 'PopupsVisibleProviderContext';
PopupsProviderContext.displayName = 'PopupsProviderContext';

/**
 * The difference between this component and ActionContextProvider is that
 * this component is only used to control the popups in the PagePopupsItem component (excluding the nested popups within it).
 * @param param0
 * @returns
 */
export const PopupsVisibleProvider: FC<PopupsVisibleProviderProps> = ({ children, visible, setVisible }) => {
  return (
    <PopupsVisibleProviderContext.Provider value={{ visible, setVisible }}>
      {children}
    </PopupsVisibleProviderContext.Provider>
  );
};

const PopupsProvider: FC<PopupsProviderProps> = (props) => {
  return (
    <PopupsProviderContext.Provider value={{ popupParams: props.popupParams }}>
      {props.children}
    </PopupsProviderContext.Provider>
  );
};

const TabsPropsProvider: FC<{ popupParams: PopupParamsStorage }> = ({ children, popupParams }) => {
  const { changeTab } = usePagePopup();
  const [activeKey, setActiveKey] = useState(popupParams.tab);
  const onTabClick = useCallback(
    (key: string) => {
      changeTab(key);
    },
    [changeTab],
  );

  useEffect(() => {
    // TODO: Suspect that Formily has a bug, the specific manifestation is: the params parameter in the schema is updated, but it is not refreshed when rendered.
    setTimeout(() => {
      setActiveKey(undefined);
    }, 100);
  });

  return (
    <TabsContextProvider activeKey={activeKey} onTabClick={onTabClick}>
      {children}
    </TabsContextProvider>
  );
};

const PagePopupsItemProvider: FC<{ params: PopupParams }> = ({ params, children }) => {
  const { closePopup } = usePagePopup();
  const [visible, _setVisible] = useState(true);
  const setVisible = (visible: boolean) => {
    if (!visible) {
      _setVisible(false);
      // Leave some time to refresh the block data
      setTimeout(closePopup, 300);
    }
  };
  const _params: PopupParamsStorage = params;
  const storedParams = { ...getStoredPopupParams(params.popupUid) };
  if (storedParams) {
    Object.assign(storedParams, _params);
  }

  return (
    <PopupsProvider popupParams={storedParams}>
      <PopupsVisibleProvider visible={visible} setVisible={setVisible}>
        <DataBlockProvider
          dataSource={storedParams.datasource}
          collection={storedParams.collection}
          association={storedParams.association}
          filterByTk={storedParams.filterbytk}
          sourceId={storedParams.sourceid}
          // @ts-ignore
          record={storedParams.record}
          parentRecord={storedParams.parentRecord}
          action="get"
        >
          {/* Pass the service of the block where the button is located down, to refresh the block's data when the popup is closed */}
          <BlockRequestContext.Provider value={storedParams.service}>
            <TabsPropsProvider popupParams={storedParams}>
              <div style={{ display: 'none' }}>{children}</div>
            </TabsPropsProvider>
          </BlockRequestContext.Provider>
        </DataBlockProvider>
      </PopupsVisibleProvider>
    </PopupsProvider>
  );
};

/**
 * insert childSchema to parentSchema to render the nested popups
 * @param childSchema
 * @param params
 * @param parentSchema
 */
export const insertToPopupSchema = (childSchema: ISchema, params: PopupParams, parentSchema: ISchema) => {
  const componentSchema = {
    type: 'void',
    'x-component': 'PagePopupsItemProvider',
    'x-component-props': {
      params,
    },
    properties: {
      popupAction: childSchema,
    },
  };

  if (parentSchema.properties) {
    const popupSchema = _.get(parentSchema.properties, Object.keys(parentSchema.properties)[0]);
    if (_.isEmpty(_.get(popupSchema, 'properties.nestedPopup'))) {
      _.set(popupSchema, 'properties.nestedPopup', componentSchema);
    }
  }
};

export const PagePopups = () => {
  const params = useParams();
  const popupParams = getPopupParamsFromPath(params['*']);
  const firstParams = popupParams[0];
  const { requestSchema } = useRequestSchema();
  const [rootSchema, setRootSchema] = useState<ISchema>(null);

  useEffect(() => {
    const run = async () => {
      const waitList = popupParams.map(
        (params) => getStoredPopupParams(params.popupUid)?.schema || requestSchema(params.popupUid),
      );
      const schemas = await Promise.all(waitList);
      const clonedSchemas = schemas.map((schema) => {
        return _.cloneDeep(_.omit(schema, 'parent'));
      });
      const rootSchema = clonedSchemas[0];
      for (let i = 1; i < clonedSchemas.length; i++) {
        insertToPopupSchema(clonedSchemas[i], popupParams[i], clonedSchemas[i - 1]);
      }
      setRootSchema(rootSchema);
    };
    run();
  }, [popupParams, requestSchema]);

  const components = useMemo(() => ({ PagePopupsItemProvider }), []);

  if (!rootSchema) {
    return null;
  }

  return (
    <PagePopupsItemProvider params={firstParams}>
      <SchemaComponent components={components} schema={rootSchema} onlyRenderProperties />;
    </PagePopupsItemProvider>
  );
};

const useRequestSchema = () => {
  const api = useAPIClient();

  const requestSchema = useCallback(async (uid: string) => {
    const data = await api.request({
      url: `/uiSchemas:getJsonSchema/${uid}`,
    });
    return data.data?.data as ISchema;
  }, []);

  return { requestSchema };
};
