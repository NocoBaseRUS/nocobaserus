import { RecursionField, useFieldSchema } from '@formily/react';
import { ActionBarProvider, css, cx, SortableItem, TabsContextProvider, useDesigner } from '@nocobase/client';
import { TabsProps } from 'antd';
import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { countGridCol } from '../../helpers';
import { PageDesigner } from './Page.Designer';

const globalActionCSS = css`
  #nb-position-container > & {
    height: 49px;
    border-top: 1px solid #f0f2f5;
    margin-bottom: 0px !important;
    padding: 0 var(--nb-spacing);
    align-items: center;
    overflow-x: auto;
    background: #ffffff;
    z-index: 100;
  }
`;

const InternalPage: React.FC = (props) => {
  const Designer = useDesigner();
  const fieldSchema = useFieldSchema();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabsSchema = fieldSchema.properties?.['tabs'];
  // Only support globalActions in page
  const onlyInPage = fieldSchema.root === fieldSchema.parent;
  let hasGlobalActions = false;
  if (!tabsSchema && fieldSchema.properties) {
    hasGlobalActions = countGridCol(fieldSchema.properties['grid'], 2) === 1;
  } else if (searchParams.has('tab') && tabsSchema?.properties?.[searchParams.get('tab')]) {
    hasGlobalActions = countGridCol(tabsSchema.properties[searchParams.get('tab')]?.properties?.['grid'], 2) === 1;
  } else if (tabsSchema?.properties) {
    const schema = Object.values(tabsSchema.properties).sort((t1, t2) => t1['x-index'] - t2['x-index'])[0];
    if (schema) {
      setTimeout(() => {
        setSearchParams([['tab', schema.name.toString()]], {
          replace: true,
        });
      });
    }
  }

  const onTabsChange = useCallback<TabsProps['onChange']>(
    (key) => {
      setSearchParams([['tab', key]], {
        replace: true,
      });
    },
    [setSearchParams],
  );

  const GlobalActionProvider = useCallback(
    (props) => {
      if (hasGlobalActions) {
        return (
          <TabsContextProvider>
            <ActionBarProvider
              container={
                (typeof props.active !== 'undefined' ? props.active : true) && onlyInPage
                  ? document.getElementById('nb-position-container')
                  : null
              }
              forceProps={{
                layout: 'one-column',
                className: globalActionCSS,
              }}
            >
              {props.children}
            </ActionBarProvider>
          </TabsContextProvider>
        );
      }
      return <>{props.children}</>;
    },
    [hasGlobalActions, onlyInPage],
  );

  return (
    <SortableItem
      eid="nb-mobile-scroll-wrapper"
      className={cx(
        'nb-mobile-page',
        css`
          background: #f0f2f5;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          padding-bottom: var(--nb-spacing);
        `,
      )}
    >
      <Designer {...fieldSchema?.['x-designer-props']}></Designer>
      <div
        style={{
          paddingBottom: tabsSchema ? null : 'var(--nb-spacing)',
        }}
        className={cx(
          'nb-mobile-page-header',
          css`
            & > .ant-tabs > .ant-tabs-nav {
              .ant-tabs-tab {
                margin: 0 !important;
                padding: 0 16px !important;
              }
              background: #fff;
            }
            display: flex;
            flex-direction: column;
          `,
        )}
      >
        <RecursionField
          schema={fieldSchema}
          filterProperties={(s) => {
            return 'MHeader' === s['x-component'];
          }}
        ></RecursionField>
        <TabsContextProvider
          PaneRoot={GlobalActionProvider}
          activeKey={searchParams.get('tab')}
          onChange={onTabsChange}
        >
          <RecursionField
            schema={fieldSchema}
            filterProperties={(s) => {
              return 'Tabs' === s['x-component'];
            }}
          ></RecursionField>
        </TabsContextProvider>
      </div>
      <GlobalActionProvider>
        {!tabsSchema && (
          <RecursionField
            schema={fieldSchema}
            filterProperties={(s) => {
              return s['x-component'] !== 'MHeader';
            }}
          ></RecursionField>
        )}
      </GlobalActionProvider>
    </SortableItem>
  );
};

export const MPage = InternalPage as unknown as typeof InternalPage & {
  Designer: typeof PageDesigner;
};
MPage.Designer = PageDesigner;
MPage.displayName = 'MPage';
