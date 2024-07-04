/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React, { FC } from 'react';
import { Resizable } from 're-resizable';
import { useSize } from './sizeContext';

interface DesktopModeContentProps {
  children?: React.ReactNode;
}

export const DesktopModeContent: FC<DesktopModeContentProps> = ({ children }) => {
  const { size, setSize } = useSize();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Resizable
        style={{
          position: 'relative',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
        }}
        data-testid="desktop-mode-resizable"
        size={{ width: size.width, height: size.height }}
        onResizeStop={(_e, _direction, _ref, d) => {
          setSize({
            width: size.width + d.width,
            height: size.height + d.height,
          });
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100%',
            overflowX: 'hidden',
          }}
        >
          {children}
        </div>
      </Resizable>
    </div>
  );
};
