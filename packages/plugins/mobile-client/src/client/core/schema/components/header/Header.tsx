import { css, cx } from '@emotion/css';
import { useField } from '@formily/react';
import { SortableItem, useCompile, useDesigner, useDocumentTitle } from '@nocobase/client';
import { NavBar, NavBarProps } from 'antd-mobile';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateNTemplate } from '../../../../locale';
import { HeaderDesigner } from './Header.Designer';

export interface HeaderProps extends NavBarProps {
  title?: string;
  showBack?: boolean;
}
const InternalHeader = (props: HeaderProps) => {
  const field = useField();
  const { title = generateNTemplate('Untitled'), showBack = false } = { ...props, ...field?.componentProps };
  const Designer = useDesigner();
  const compile = useCompile();
  const compiledTitle = compile(title);
  const navigate = useNavigate();
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    // sync title
    setTitle(compiledTitle);
  }, [compiledTitle]);

  return (
    <SortableItem
      className={cx(
        'nb-mobile-header',
        css`
          width: 100%;
          background: #fff;
        `,
      )}
    >
      <NavBar backArrow={showBack} onBack={() => navigate(-1)}>
        {compiledTitle}
      </NavBar>
      <Designer />
    </SortableItem>
  );
};

export const MHeader = InternalHeader as unknown as typeof InternalHeader & {
  Designer: typeof HeaderDesigner;
};

MHeader.Designer = HeaderDesigner;
