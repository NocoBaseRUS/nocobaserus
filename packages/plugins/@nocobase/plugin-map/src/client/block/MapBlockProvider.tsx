/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { useField, useFieldSchema } from '@formily/react';
import { BlockProvider, FixedBlockWrapper, SchemaComponentOptions, useBlockRequestContext } from '@nocobase/client';
import React, { createContext, useContext, useState } from 'react';
import { css } from '@emotion/css';
import { theme } from 'antd';

export const MapBlockContext = createContext<any>({});
MapBlockContext.displayName = 'MapBlockContext';

const InternalMapBlockProvider = (props) => {
  const { fieldNames } = props;
  const fieldSchema = useFieldSchema();
  const field = useField();
  const { resource, service } = useBlockRequestContext();
  const [selectedRecordKeys, setSelectedRecordKeys] = useState([]);
  const { token } = theme.useToken();

  return (
    <FixedBlockWrapper>
      <SchemaComponentOptions scope={{ selectedRecordKeys }}>
        <MapBlockContext.Provider
          value={{
            field,
            service,
            resource,
            fieldNames,
            fixedBlock: fieldSchema?.['x-decorator-props']?.fixedBlock,
            selectedRecordKeys,
            setSelectedRecordKeys,
          }}
        >
          {' '}
          <div
            className={css`
              .nb-action-bar {
                margin-bottom: ${token.margin}px;
              }
            `}
          >
            {props.children}
          </div>
        </MapBlockContext.Provider>
      </SchemaComponentOptions>
    </FixedBlockWrapper>
  );
};

export const MapBlockProvider = (props) => {
  const uField = useField();
  const { params, fieldNames } = props;
  const appends = params.appends || [];
  const { field } = fieldNames || {};
  if (Array.isArray(field) && field.length > 1) {
    appends.push(field[0]);
  }
  return (
    <BlockProvider
      name="map"
      {...props}
      runWhenParamsChanged
      params={{ ...params, appends, paginate: false, sort: uField.componentProps.lineSort }}
    >
      <InternalMapBlockProvider {...props} />
    </BlockProvider>
  );
};

export const useMapBlockContext = () => {
  return useContext(MapBlockContext);
};

export const useMapBlockProps = () => {
  const ctx = useMapBlockContext();

  return {
    ...ctx,
    dataSource: ctx?.service?.data?.data,
    zoom: ctx?.field?.componentProps?.zoom || 13,
    lineSort: ctx?.field?.componentProps?.lineSort,
  };
};
