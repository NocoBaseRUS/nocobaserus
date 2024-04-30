/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { render } from '@testing-library/react';
import React from 'react';
import { FilterBlockProvider, useFilterBlock } from '../FilterProvider';

describe('useFilter', () => {
  test('should get a empty array', () => {
    let getDataBlocks = null;
    const Comp = () => {
      ({ getDataBlocks } = useFilterBlock());
      return null;
    };
    const App = () => {
      return (
        <FilterBlockProvider>
          <Comp />
        </FilterBlockProvider>
      );
    };
    render(<App />);
    expect(getDataBlocks()).toEqual([]);
  });

  test('should not repeat', () => {
    let getDataBlocks = null,
      recordDataBlocks = null;
    const Comp = () => {
      ({ getDataBlocks, recordDataBlocks } = useFilterBlock());
      return null;
    };
    const App = () => {
      return (
        <FilterBlockProvider>
          <Comp />
        </FilterBlockProvider>
      );
    };
    render(<App />);

    recordDataBlocks({
      name: 'test',
      collection: {},
      doFilter: () => {},
    });
    expect(getDataBlocks().length).toBe(1);

    // avoid repeat
    recordDataBlocks({
      name: 'test',
      collection: {},
      doFilter: () => {},
    });
    expect(getDataBlocks().length).toBe(1);
  });
});
