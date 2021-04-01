import React, { useState } from 'react';
import { Space, Button, Popconfirm, Popover } from 'antd';
import {
  FilterOutlined,
  PlusOutlined,
  SelectOutlined,
  DeleteOutlined,
  PrinterOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import Drawer from '@/components/pages/AdminLoader/Drawer';
import View from '@/components/pages/AdminLoader/View';
import get from 'lodash/get';
import set from 'lodash/set';
import ReactToPrint from 'react-to-print';
import api from '@/api-client';

const ACTIONS = new Map<string, any>();

export function Create(props) {
  const { size, onFinish, schema = {}, associatedKey, ...restProps } = props;
  const { title, pageTitle, viewName, transform, componentProps = {} } = schema;
  return (
    <>
      <Button
        size={size}
        onClick={() => {
          Drawer.open({
            title: pageTitle || title,
            content: ({ resolve, closeWithConfirm }) => (
              <div>
                <View
                  {...restProps}
                  onValueChange={() => {
                    closeWithConfirm && closeWithConfirm(true);
                  }}
                  associatedKey={associatedKey}
                  viewName={viewName}
                  onReset={resolve}
                  onDraft={async item => {
                    const values = transform ? {} : item;
                    for (const [sourceKey, targetKey] of Object.entries<string>(
                      transform || {},
                    )) {
                      const value = get({ data: item }, sourceKey);
                      set(values, targetKey, value);
                    }
                    await resolve();
                    console.log('onFinish', values);
                    onFinish && (await onFinish(values));
                  }}
                  onFinish={async item => {
                    const values = transform ? {} : item;
                    for (const [sourceKey, targetKey] of Object.entries<string>(
                      transform || {},
                    )) {
                      const value = get({ data: item }, sourceKey);
                      set(values, targetKey, value);
                    }
                    await resolve();
                    console.log('onFinish', values);
                    onFinish && (await onFinish(values));
                  }}
                />
              </div>
            ),
          });
        }}
        icon={<PlusOutlined />}
        type={'primary'}
        {...componentProps}
      >
        {title}
      </Button>
    </>
  );
}

export function Update(props) {
  const { onFinish, data, schema = {}, associatedKey, ...restProps } = props;
  const { title, viewName } = schema;
  return (
    <>
      <Button
        onClick={() => {
          Drawer.open({
            title: title,
            content: ({ resolve, closeWithConfirm }) => (
              <div>
                <View
                  {...restProps}
                  associatedKey={associatedKey}
                  data={data}
                  viewName={viewName}
                  onReset={resolve}
                  onDraft={async values => {
                    await resolve();
                    onFinish && (await onFinish(values));
                  }}
                  onValueChange={() => {
                    closeWithConfirm && closeWithConfirm(true);
                  }}
                  onFinish={async values => {
                    await resolve();
                    onFinish && (await onFinish(values));
                  }}
                />
              </div>
            ),
          });
        }}
        icon={<PlusOutlined />}
        type={'primary'}
      >
        {title}
      </Button>
    </>
  );
}

export function Add(props) {
  const { size, onFinish, schema = {}, associatedKey, ...restProps } = props;
  console.log({ associatedKey }, 'add');
  const { filter, title, viewName, transform, componentProps = {} } = schema;
  return (
    <>
      <Button
        size={size}
        onClick={() => {
          Drawer.open({
            title: title,
            content: ({ resolve }) => {
              const [selectedRows, setSelectedRows] = useState([]);
              return (
                <div>
                  <View
                    {...restProps}
                    defaultFilter={filter}
                    viewName={viewName}
                    associatedKey={associatedKey}
                    onSelected={values => {
                      console.log(values);
                      setSelectedRows(
                        values.map(item => {
                          if (!transform) {
                            return;
                          }
                          const data = {};
                          for (const [sourceKey, targetKey] of Object.entries<
                            string
                          >(transform)) {
                            const value = get({ data: item }, sourceKey);
                            set(data, targetKey, value);
                          }
                          return data;
                        }),
                      );
                    }}
                  />
                  <Drawer.Footer>
                    <Space>
                      <Button onClick={resolve}>取消</Button>
                      <Button
                        type={'primary'}
                        onClick={async () => {
                          console.log({ schema, onFinish });
                          onFinish && (await onFinish(selectedRows));
                          resolve();
                        }}
                      >
                        确定
                      </Button>
                    </Space>
                  </Drawer.Footer>
                </div>
              );
            },
          });
        }}
        icon={<SelectOutlined />}
        {...componentProps}
      >
        {title}
      </Button>
    </>
  );
}

export function Destroy(props) {
  const { size, schema = {}, onFinish } = props;
  const { title, componentProps = {} } = schema;
  return (
    <Popconfirm
      title="确认删除吗？"
      onConfirm={async e => {
        onFinish && (await onFinish());
      }}
    >
      <Button
        size={size}
        danger
        type={'ghost'}
        icon={<DeleteOutlined />}
        {...componentProps}
      >
        {title}
      </Button>
    </Popconfirm>
  );
}

export function Filter(props) {
  const { schema = {}, onFinish } = props;
  const { title, fields = [] } = schema;
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [filterCount, setFilterCount] = useState(0);
  console.log('Filter', { visible, data });

  return (
    <>
      {visible && (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            zIndex: 1000,
            position: 'fixed',
            background: 'rgba(0, 0, 0, 0)',
            top: 0,
            left: 0,
          }}
          onClick={() => setVisible(false)}
        ></div>
      )}
      <Popover
        // title="设置筛选"
        trigger="click"
        visible={visible}
        defaultVisible={visible}
        placement={'bottomLeft'}
        destroyTooltipOnHide
        onVisibleChange={visible => {
          setVisible(visible);
        }}
        className={'filters-popover'}
        style={{}}
        overlayStyle={{
          minWidth: 500,
        }}
        content={
          <>
            <View
              data={data}
              onFinish={async values => {
                if (values) {
                  const items = values.filter.and || values.filter.or;
                  setFilterCount(Array.isArray(items) ? items.length : 0);
                  setData(values);
                  onFinish && (await onFinish(values));
                }
                setVisible(false);
              }}
              schema={{
                type: 'filterForm',
                fields: [
                  {
                    dataIndex: ['filter'],
                    name: 'filter',
                    interface: 'json',
                    type: 'json',
                    component: {
                      type: 'filter',
                      'x-component-props': {
                        fields,
                      },
                    },
                  },
                ],
              }}
            />
          </>
        }
      >
        <Button icon={<FilterOutlined />}>
          {filterCount ? `${filterCount} 个${title}项` : title}
        </Button>
      </Popover>
    </>
  );
}

export function Print(props) {
  const { schema = {}, contentRef } = props;
  const { title, buttonProps = {} } = schema;
  return (
    <ReactToPrint
      trigger={() => (
        <Button {...buttonProps} icon={<PrinterOutlined />}>
          {title}
        </Button>
      )}
      content={() => contentRef.current}
      pageStyle={`
        @page {
          margin: 1cm;
        }
        table { page-break-inside:auto }
        tr { page-break-inside:avoid; page-break-after:auto }
      `}
      documentTitle={' '}
    />
  );
}

export function Export(props) {
  const { schema = {}, onFinish } = props;
  const { title, buttonProps = {} } = schema;
  return (
    <Button
      {...buttonProps}
      icon={<ExportOutlined />}
      onClick={async () => {
        onFinish && (await onFinish({ fields: [] }));
      }}
    >
      {title}
    </Button>
  );
}

export function Actions(props) {
  const { onTrigger = {}, actions = [], style, ...restProps } = props;
  return (
    actions.length > 0 && (
      <div className={'action-buttons'} style={style}>
        {actions.map(
          action =>
            ACTIONS.has(action.type) && (
              <div className={`${action.type}-action-button action-button`}>
                <Action
                  {...restProps}
                  onFinish={onTrigger[action.type]}
                  schema={action}
                />
              </div>
            ),
        )}
      </div>
    )
  );
}

export default Actions;

export function registerAction(type: string, Action: any) {
  ACTIONS.set(type, Action);
}

export function getAction(type: string) {
  return ACTIONS.get(type);
}

export function Action(props) {
  const { schema = {} } = props;
  // cnsole.log(schema);
  const { type } = schema;
  const Component = getAction(type);
  return Component && <Component {...props} />;
}

registerAction('add', Add);
registerAction('update', Update);
registerAction('create', Create);
registerAction('destroy', Destroy);
registerAction('filter', Filter);
registerAction('print', Print);
registerAction('export', Export);
