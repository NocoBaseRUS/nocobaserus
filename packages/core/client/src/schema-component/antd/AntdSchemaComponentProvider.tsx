import React from 'react';
import * as components from '.';
import { Plugin } from '../../application-v2/Plugin';
import * as common from '../common';
import { SchemaComponentOptions } from '../core';
import { useFilterActionProps } from './filter/useFilterActionProps';
import { requestChartData } from './g2plot/requestChartData';

// TODO: delete this, replaced by `AntdSchemaComponentPlugin`
export const AntdSchemaComponentProvider = (props) => {
  const { children } = props;
  return (
    <SchemaComponentOptions
      scope={{ requestChartData, useFilterActionProps }}
      components={{ ...components, ...common } as any}
    >
      {children}
    </SchemaComponentOptions>
  );
};

export class AntdSchemaComponentPlugin extends Plugin {
  static pluginName = 'antd-schema-component';

  async load() {
    this.addComponents();
    this.addScopes();
  }

  addComponents() {
    this.app.addComponents({
      ...(components as any),
      ...common,
    });
  }

  addScopes() {
    this.app.addScopes({
      requestChartData,
      useFilterActionProps,
    });
  }
}
