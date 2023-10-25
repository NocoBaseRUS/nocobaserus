import React, { useContext, useEffect } from 'react';
import { SchemaComponentOptions } from '@nocobase/client';
import { ChartFilterItemDesigner } from './FilterItemDesigner';
import {
  useChartFilterActionProps,
  useChartFilterResetProps,
  useChartFilterCollapseProps,
} from './FilterActionInitializers';
import { ChartFilterGrid, ChartFilterForm } from './FilterBlockInitializer';
import { useChartsTranslation } from '../locale';
import { css } from '@emotion/css';
import { ChartFilterContext } from './FilterProvider';
import { ChartFilterCheckbox } from './FilterCheckbox';
import { ArrayItems } from '@formily/antd-v5';

export const ChartFilterBlockProvider: React.FC = (props) => {
  const { t } = useChartsTranslation();
  const { setEnabled } = useContext(ChartFilterContext);
  useEffect(() => {
    setEnabled(true);
  }, []);
  return (
    <div
      className={css`
        .ant-card {
          box-shadow: none;
          border: none;
          margin-bottom: 6px;
        }
      `}
    >
      <SchemaComponentOptions
        components={{ ChartFilterItemDesigner, ChartFilterForm, ChartFilterGrid, ChartFilterCheckbox, ArrayItems }}
        scope={{ t, useChartFilterActionProps, useChartFilterResetProps, useChartFilterCollapseProps }}
      >
        {props.children}
      </SchemaComponentOptions>
    </div>
  );
};
