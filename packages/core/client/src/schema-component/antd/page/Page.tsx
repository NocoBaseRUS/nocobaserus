import { PlusOutlined } from '@ant-design/icons';
import { PageHeader as AntdPageHeader } from '@ant-design/pro-layout';
import { css } from '@emotion/css';
import { FormDialog, FormLayout } from '@formily/antd-v5';
import { Schema, SchemaOptionsContext, useFieldSchema } from '@formily/react';
import { Button, Spin, Tabs } from 'antd';
import classNames from 'classnames';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDocumentTitle } from '../../../document-title';
import { FilterBlockProvider } from '../../../filter-provider/FilterProvider';
import { Icon } from '../../../icon';
import { DndContext } from '../../common';
import { SortableItem } from '../../common/sortable-item';
import { SchemaComponent, SchemaComponentOptions } from '../../core';
import { useCompile, useDesignable } from '../../hooks';
import { ErrorFallback } from '../error-fallback';
import FixedBlock from './FixedBlock';
import { PageDesigner, PageTabDesigner } from './PageTabDesigner';

const designerCss = css`
  position: relative;
  &:hover {
    > .general-schema-designer {
      display: block;
    }
  }
  &.nb-action-link {
    > .general-schema-designer {
      top: var(--nb-designer-offset);
      bottom: var(--nb-designer-offset);
      right: var(--nb-designer-offset);
      left: var(--nb-designer-offset);
    }
  }
  > .general-schema-designer {
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    background: rgba(241, 139, 98, 0.06);
    border: 0;
    pointer-events: none;
    > .general-schema-designer-icons {
      position: absolute;
      right: 2px;
      top: 2px;
      line-height: 16px;
      pointer-events: all;
      .ant-space-item {
        background-color: #f18b62;
        color: #fff;
        line-height: 16px;
        width: 16px;
        padding-left: 1px;
      }
    }
  }
`;

const pageDesignerCss = css`
  position: relative;
  z-index: 20;
  flex: 1;
  display: flex;
  flex-direction: column;

  &:hover {
    > .general-schema-designer {
      display: block;
    }
  }
  .ant-page-header {
    z-index: 1;
    position: relative;
  }
  > .general-schema-designer {
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    /* background: rgba(241, 139, 98, 0.06); */
    border: 0;
    pointer-events: none;
    > .general-schema-designer-icons {
      z-index: 9999;
      position: absolute;
      right: 2px;
      top: 2px;
      line-height: 16px;
      pointer-events: all;
      .ant-space-item {
        background-color: #f18b62;
        color: #fff;
        line-height: 16px;
        width: 16px;
        padding-left: 1px;
      }
    }
  }
`;

const pageWithFixedBlockCss = classNames([
  'nb-page-content',
  css`
    height: 100%;
    > .nb-grid:not(:last-child) {
      > .nb-schema-initializer-button {
        display: none;
      }
    }
  `,
]);

const pageHeaderCss = css`
  background-color: white;
  &.ant-page-header-has-footer {
    padding-top: 12px;
    padding-bottom: 0;
    .ant-page-header-heading-left {
      /* margin: 0; */
    }
    .ant-page-header-footer {
      margin-top: 0;
    }
  }
  .ant-tabs-nav {
    margin-bottom: 0;
  }
`;

const height0 = css`
  font-size: 0;
  height: 0;
`;

export const Page = (props) => {
  const { children, ...others } = props;
  const compile = useCompile();
  const { title, setTitle } = useDocumentTitle();
  const fieldSchema = useFieldSchema();
  const dn = useDesignable();

  // react18  tab 动画会卡顿，所以第一个 tab 时，动画禁用，后面的 tab 才启用
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!title) {
      setTitle(fieldSchema.title);
    }
  }, [fieldSchema.title, title]);
  const disablePageHeader = fieldSchema['x-component-props']?.disablePageHeader;
  const enablePageTabs = fieldSchema['x-component-props']?.enablePageTabs;
  const hidePageTitle = fieldSchema['x-component-props']?.hidePageTitle;
  const { t } = useTranslation();
  const options = useContext(SchemaOptionsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const activeKey = useMemo(
    () => searchParams.get('tab') || Object.keys(fieldSchema.properties || {}).shift(),
    [fieldSchema.properties, searchParams],
  );

  const [height, setHeight] = useState(0);

  const handleErrors = (error) => {
    console.error(error);
  };

  const pageHeaderTitle = hidePageTitle ? undefined : fieldSchema.title || compile(title);
  return (
    <FilterBlockProvider>
      <div className={pageDesignerCss}>
        <PageDesigner title={fieldSchema.title || title} />
        <div
          ref={(ref) => {
            setHeight(Math.floor(ref?.getBoundingClientRect().height || 0) + 1);
          }}
        >
          {!disablePageHeader && (
            <AntdPageHeader
              className={classNames(pageHeaderCss, pageHeaderTitle || enablePageTabs ? '' : height0)}
              ghost={false}
              // 如果标题为空的时候会导致 PageHeader 不渲染，所以这里设置一个空白字符，然后再设置高度为 0
              title={pageHeaderTitle || ' '}
              {...others}
              footer={
                enablePageTabs && (
                  <DndContext>
                    <Tabs
                      size={'small'}
                      animated={hasMounted}
                      activeKey={activeKey}
                      onTabClick={(activeKey) => {
                        setLoading(true);
                        setSearchParams([['tab', activeKey]]);
                        setTimeout(() => {
                          setLoading(false);
                        }, 50);
                      }}
                      tabBarExtraContent={
                        dn.designable && (
                          <Button
                            icon={<PlusOutlined />}
                            className={css`
                              border-color: rgb(241, 139, 98) !important;
                              color: rgb(241, 139, 98) !important;
                            `}
                            type={'dashed'}
                            onClick={async () => {
                              const values = await FormDialog(t('Add tab'), () => {
                                return (
                                  <SchemaComponentOptions scope={options.scope} components={{ ...options.components }}>
                                    <FormLayout layout={'vertical'}>
                                      <SchemaComponent
                                        schema={{
                                          properties: {
                                            title: {
                                              title: t('Tab name'),
                                              'x-component': 'Input',
                                              'x-decorator': 'FormItem',
                                              required: true,
                                            },
                                            icon: {
                                              title: t('Icon'),
                                              'x-component': 'IconPicker',
                                              'x-decorator': 'FormItem',
                                            },
                                          },
                                        }}
                                      />
                                    </FormLayout>
                                  </SchemaComponentOptions>
                                );
                              }).open({
                                initialValues: {},
                              });
                              const { title, icon } = values;
                              dn.insertBeforeEnd({
                                type: 'void',
                                title,
                                'x-icon': icon,
                                'x-component': 'Grid',
                                'x-initializer': 'BlockInitializers',
                                properties: {},
                              });
                            }}
                          >
                            {t('Add tab')}
                          </Button>
                        )
                      }
                      items={fieldSchema.mapProperties((schema) => {
                        return {
                          label: (
                            <SortableItem
                              id={schema.name as string}
                              schema={schema}
                              className={classNames('nb-action-link', designerCss, props.className)}
                            >
                              {schema['x-icon'] && <Icon style={{ marginRight: 8 }} type={schema['x-icon']} />}
                              <span>{schema.title || t('Unnamed')}</span>
                              <PageTabDesigner schema={schema} />
                            </SortableItem>
                          ),
                          key: schema.name as string,
                        };
                      })}
                    />
                  </DndContext>
                )
              }
            />
          )}
        </div>
        <div className="nb-page-wrapper" style={{ margin: 'var(--nb-spacing)', flex: 1 }}>
          <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleErrors}>
            {loading ? (
              <Spin />
            ) : !disablePageHeader && enablePageTabs ? (
              fieldSchema.mapProperties((schema) => {
                if (schema.name !== activeKey) return null;
                return (
                  <FixedBlock
                    key={schema.name}
                    height={
                      // header 46 margin --nb-spacing * 2
                      `calc(${height}px + 46px + var(--nb-spacing) * 2)`
                    }
                  >
                    <SchemaComponent
                      schema={
                        new Schema({
                          properties: {
                            [schema.name]: schema,
                          },
                        })
                      }
                    />
                  </FixedBlock>
                );
              })
            ) : (
              <FixedBlock
                height={
                  // header 46 margin --nb-spacing * 2
                  `calc(${height}px + 46px + var(--nb-spacing) * 2)`
                }
              >
                <div className={pageWithFixedBlockCss}>{props.children}</div>
              </FixedBlock>
            )}
          </ErrorBoundary>
        </div>
      </div>
    </FilterBlockProvider>
  );
};
