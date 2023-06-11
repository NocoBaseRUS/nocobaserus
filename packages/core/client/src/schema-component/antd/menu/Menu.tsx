import { css } from '@emotion/css';
import {
  FieldContext,
  observer,
  RecursionField,
  Schema,
  SchemaContext,
  SchemaExpressionScopeContext,
  useField,
  useFieldSchema,
} from '@formily/react';
import { error } from '@nocobase/utils/client';
import { Menu as AntdMenu, MenuProps } from 'antd';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { createDesignable, DndContext, SortableItem, useDesignable, useDesigner } from '../..';
import { Icon, useAPIClient, useSchemaInitializer } from '../../../';
import { useCollectMenuItems, useMenuItem } from '../../../hooks/useMenuItem';
import { useProps } from '../../hooks/useProps';
import { MenuDesigner } from './Menu.Designer';
import { findKeysByUid, findMenuItem } from './util';

const subMenuDesignerCss = css`
  position: relative;
  display: inline-block;
  margin-left: -24px;
  margin-right: -34px;
  padding: 0 34px 0 24px;
  width: calc(100% + 58px);
  &:hover {
    > .general-schema-designer {
      display: block;
    }
  }
  &.nb-action-link {
    > .general-schema-designer {
      top: -10px;
      bottom: -10px;
      left: -10px;
      right: -10px;
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

const designerCss = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -20px;
  margin-right: -20px;
  padding: 0 20px;
  width: calc(100% + 40px);
  &:hover {
    > .general-schema-designer {
      display: block;
    }
  }
  &.nb-action-link {
    > .general-schema-designer {
      top: -10px;
      bottom: -10px;
      left: -10px;
      right: -10px;
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

const headerMenuClass = css`
  .ant-menu-item:hover {
    > .ant-menu-title-content > div {
      .general-schema-designer {
        display: block;
      }
    }
  }
`;

const sideMenuClass = css`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  .ant-menu-item {
    > .ant-menu-title-content {
      margin-left: -24px;
      margin-right: -16px;
      padding: 0 16px 0 24px;
      > div {
        > .general-schema-designer {
          right: 6px !important;
        }
      }
    }
  }
  .ant-menu-submenu-title {
    .ant-menu-title-content {
      margin-left: -24px;
      margin-right: -34px;
      padding: 0 34px 0 24px;
      > div {
        > .general-schema-designer {
          right: 6px !important;
        }
        > span.anticon {
          margin-right: 10px;
        }
      }
    }
  }
`;

const menuItemClass = css`
  :active {
    background: inherit;
  }
`;

type ComposedMenu = React.FC<any> & {
  Item?: React.FC<any>;
  URL?: React.FC<any>;
  SubMenu?: React.FC<any>;
  Designer?: React.FC<any>;
};

const HeaderMenu = ({
  others,
  schema,
  mode,
  setSideMenuSchema,
  onSelect,
  setLoading,
  setDefaultSelectedKeys,
  defaultSelectedKeys,
  defaultOpenKeys,
  selectedKeys,
  designable,
  render,
  children,
}) => {
  const { Component, getMenuItems } = useMenuItem();
  const items = useMemo(() => {
    const designerBtn = {
      key: 'x-designer-button',
      disabled: true,
      style: { padding: '0 8px', order: 9999 },
      label: render({ style: { background: 'none' } }),
      notdelete: true,
    };
    const result = getMenuItems(() => {
      return children;
    });
    if (designable) {
      result.push(designerBtn);
    }

    return result;
  }, [children, designable]);

  return (
    <>
      <Component />
      <AntdMenu
        {...others}
        className={headerMenuClass}
        onSelect={(info: any) => {
          const s = schema.properties[info.key];
          if (mode === 'mix') {
            setSideMenuSchema(s);
            if (s['x-component'] !== 'Menu.SubMenu') {
              onSelect && onSelect(info);
            } else {
              const menuItemSchema = findMenuItem(s);
              if (!menuItemSchema) {
                return;
              }
              // TODO
              setLoading(true);
              const keys = findKeysByUid(schema, menuItemSchema['x-uid']);
              setDefaultSelectedKeys(keys);
              setTimeout(() => {
                setLoading(false);
              }, 100);
              onSelect &&
                onSelect({
                  key: menuItemSchema.name,
                  item: {
                    props: {
                      schema: menuItemSchema,
                    },
                  },
                });
            }
          } else {
            onSelect && onSelect(info);
          }
        }}
        mode={mode === 'mix' ? 'horizontal' : mode}
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={selectedKeys}
        items={items}
      />
    </>
  );
};

const SideMenu = ({
  loading,
  mode,
  sideMenuSchema,
  sideMenuRef,
  defaultOpenKeys,
  defaultSelectedKeys,
  onSelect,
  render,
  t,
  api,
  refresh,
}) => {
  const { Component, getMenuItems } = useMenuItem();

  const items = useMemo(() => {
    const result = getMenuItems(() => {
      return <RecursionField schema={sideMenuSchema} onlyRenderProperties />;
    });
    result.push({
      key: 'x-designer-button',
      disabled: true,
      label: render({
        insert: (s) => {
          const dn = createDesignable({
            t,
            api,
            refresh,
            current: sideMenuSchema,
          });
          dn.loadAPIClientEvents();
          dn.insertAdjacent('beforeEnd', s);
        },
      }),
      order: 1,
      notdelete: true,
    });

    return result;
  }, [render, sideMenuSchema]);

  if (loading) {
    return null;
  }

  return (
    mode === 'mix' &&
    sideMenuSchema?.['x-component'] === 'Menu.SubMenu' &&
    sideMenuRef?.current?.firstChild &&
    createPortal(
      <MenuModeContext.Provider value={'inline'}>
        <Component />
        <AntdMenu
          mode={'inline'}
          defaultOpenKeys={defaultOpenKeys}
          defaultSelectedKeys={defaultSelectedKeys}
          onSelect={(info) => {
            onSelect && onSelect(info);
          }}
          className={sideMenuClass}
          items={items as MenuProps['items']}
        />
      </MenuModeContext.Provider>,
      sideMenuRef.current.firstChild,
    )
  );
};

const MenuModeContext = createContext(null);

MenuModeContext.displayName = 'MenuModeContext';

const useSideMenuRef = () => {
  const schema = useFieldSchema();
  const scope = useContext(SchemaExpressionScopeContext);
  const scopeKey = schema?.['x-component-props']?.['sideMenuRefScopeKey'];
  if (!scopeKey) {
    return;
  }
  return scope[scopeKey];
};

const MenuItemDesignerContext = createContext(null);
MenuItemDesignerContext.displayName = 'MenuItemDesignerContext';

export const Menu: ComposedMenu = observer(
  (props) => {
    const {
      onSelect,
      mode,
      selectedUid,
      defaultSelectedUid,
      sideMenuRefScopeKey,
      defaultSelectedKeys: dSelectedKeys,
      defaultOpenKeys: dOpenKeys,
      children,
      ...others
    } = useProps(props);
    const { t } = useTranslation();
    const Designer = useDesigner();
    const schema = useFieldSchema();
    const { refresh } = useDesignable();
    const api = useAPIClient();
    const { render } = useSchemaInitializer(schema['x-initializer']);
    const sideMenuRef = useSideMenuRef();
    const [selectedKeys, setSelectedKeys] = useState<string[]>();
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(() => {
      if (dSelectedKeys) {
        return dSelectedKeys;
      }
      if (defaultSelectedUid) {
        return findKeysByUid(schema, defaultSelectedUid);
      }
      return [];
    });
    const [loading, setLoading] = useState(false);
    const [defaultOpenKeys, setDefaultOpenKeys] = useState(() => {
      if (['inline', 'mix'].includes(mode)) {
        return dOpenKeys || defaultSelectedKeys;
      }
      return dOpenKeys;
    });
    const [sideMenuSchema, setSideMenuSchema] = useState<Schema>(() => {
      const key = defaultSelectedKeys?.[0] || null;
      if (mode === 'mix' && key) {
        const s = schema.properties?.[key];
        if (s['x-component'] === 'Menu.SubMenu') {
          return s;
        }
      }
      return null;
    });
    useEffect(() => {
      if (!selectedUid) {
        setSelectedKeys(undefined);
        return;
      }

      const keys = findKeysByUid(schema, selectedUid);
      setSelectedKeys(keys);
      if (['inline', 'mix'].includes(mode)) {
        setDefaultOpenKeys(dOpenKeys || keys);
      }
      const key = keys?.[0] || null;
      if (mode === 'mix') {
        if (key) {
          const s = schema.properties?.[key];
          if (s['x-component'] === 'Menu.SubMenu') {
            setSideMenuSchema(s);
          }
        } else {
          setSideMenuSchema(null);
        }
      }
    }, [selectedUid]);
    useEffect(() => {
      if (['inline', 'mix'].includes(mode)) {
        setDefaultOpenKeys(defaultSelectedKeys);
      }
    }, [defaultSelectedKeys]);
    const { designable } = useDesignable();
    return (
      <DndContext>
        <MenuItemDesignerContext.Provider value={Designer}>
          <MenuModeContext.Provider value={mode}>
            <HeaderMenu
              others={others}
              schema={schema}
              mode={mode}
              setSideMenuSchema={setSideMenuSchema}
              onSelect={onSelect}
              setLoading={setLoading}
              setDefaultSelectedKeys={setDefaultSelectedKeys}
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              selectedKeys={selectedKeys}
              designable={designable}
              render={render}
            >
              {children}
            </HeaderMenu>
            <SideMenu
              loading={loading}
              mode={mode}
              sideMenuSchema={sideMenuSchema}
              sideMenuRef={sideMenuRef}
              defaultOpenKeys={defaultOpenKeys}
              defaultSelectedKeys={defaultSelectedKeys}
              onSelect={onSelect}
              render={render}
              t={t}
              api={api}
              refresh={refresh}
            />
          </MenuModeContext.Provider>
        </MenuItemDesignerContext.Provider>
      </DndContext>
    );
  },
  { displayName: 'Menu' },
);

Menu.Item = observer(
  (props) => {
    const { pushMenuItem } = useCollectMenuItems();
    const { icon, children, ...others } = props;
    const schema = useFieldSchema();
    const field = useField();
    const Designer = useContext(MenuItemDesignerContext);
    const item = useMemo(() => {
      return {
        ...others,
        className: menuItemClass,
        key: schema.name,
        eventKey: schema.name,
        schema,
        label: (
          <SchemaContext.Provider value={schema}>
            <FieldContext.Provider value={field}>
              <SortableItem className={designerCss} removeParentsIfNoChildren={false}>
                <Icon type={icon} />
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'inline-block',
                    width: '100%',
                    verticalAlign: 'middle',
                  }}
                >
                  {field.title}
                </span>
                {Designer && <Designer />}
              </SortableItem>
            </FieldContext.Provider>
          </SchemaContext.Provider>
        ),
      };
    }, [field.title, icon, schema]);

    if (!pushMenuItem) {
      error('Menu.Item must be wrapped by GetMenuItemsContext.Provider');
      return null;
    }

    pushMenuItem(item);
    return null;
  },
  { displayName: 'Menu.Item' },
);

Menu.URL = observer(
  (props) => {
    const { pushMenuItem } = useCollectMenuItems();
    const { icon, children, ...others } = props;
    const schema = useFieldSchema();
    const field = useField();
    const Designer = useContext(MenuItemDesignerContext);

    if (!pushMenuItem) {
      error('Menu.URL must be wrapped by GetMenuItemsContext.Provider');
      return null;
    }

    const item = useMemo(() => {
      return {
        ...others,
        className: menuItemClass,
        key: schema.name,
        eventKey: schema.name,
        schema,
        onClick: () => {
          window.open(props.href, '_blank');
        },
        label: (
          <SchemaContext.Provider value={schema}>
            <FieldContext.Provider value={field}>
              <SortableItem className={designerCss} removeParentsIfNoChildren={false}>
                <Icon type={icon} />
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'inline-block',
                    width: '100%',
                    verticalAlign: 'middle',
                  }}
                >
                  {field.title}
                </span>
                {Designer && <Designer />}
              </SortableItem>
            </FieldContext.Provider>
          </SchemaContext.Provider>
        ),
      };
    }, [field.title, icon, props.href, schema]);

    pushMenuItem(item);
    return null;
  },
  { displayName: 'MenuURL' },
);

Menu.SubMenu = observer(
  (props) => {
    const { Component, getMenuItems } = useMenuItem();
    const { pushMenuItem } = useCollectMenuItems();
    const { icon, children, ...others } = props;
    const schema = useFieldSchema();
    const field = useField();
    const mode = useContext(MenuModeContext);
    const Designer = useContext(MenuItemDesignerContext);
    const submenu = useMemo(() => {
      return {
        ...others,
        className: menuItemClass,
        key: schema.name,
        eventKey: schema.name,
        label: (
          <SchemaContext.Provider value={schema}>
            <FieldContext.Provider value={field}>
              <SortableItem className={subMenuDesignerCss} removeParentsIfNoChildren={false}>
                <Icon type={icon} />
                {field.title}
                {Designer && <Designer />}
              </SortableItem>
            </FieldContext.Provider>
          </SchemaContext.Provider>
        ),
        children: getMenuItems(() => {
          return <RecursionField schema={schema} onlyRenderProperties />;
        }),
      };
    }, [field.title, icon, schema]);

    if (!pushMenuItem) {
      error('Menu.SubMenu must be wrapped by GetMenuItemsContext.Provider');
      return null;
    }

    if (mode === 'mix') {
      return <Menu.Item {...props} />;
    }

    pushMenuItem(submenu);
    return <Component />;
  },
  { displayName: 'Menu.SubMenu' },
);

Menu.Designer = MenuDesigner;
