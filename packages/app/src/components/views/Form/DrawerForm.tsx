import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import { Button, Drawer } from 'antd';
import { Tooltip, Input } from 'antd';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  createFormActions,
  createAsyncFormActions,
  Submit,
  Reset,
  FormButtonGroup,
  registerFormFields,
  FormValidator,
  setValidationLanguage,
} from '@formily/antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useRequest } from 'umi';
import api from '@/api-client';
import { Spin } from '@nocobase/client';

export const DrawerForm = forwardRef((props: any, ref) => {
  console.log(props);
  const {
    activeTab = {},
    pageInfo = {},
    schema,
    resourceName,
    associatedName,
    associatedKey,
  } = props;
  const [visible, setVisible] = useState(false);
  const { data, run, loading } = useRequest((resourceKey) => {
    const name = associatedName ? `${associatedName}.${resourceName}` : resourceName;
    return api.resource(name).get({
      resourceKey,
      associatedKey,
    });
  }, {
    manual: true,
  });
  useImperativeHandle(ref, () => ({
    setVisible,
    getData: run,
  }));
  const actions = createAsyncFormActions();
  const { title, fields: properties ={} } = props.schema||{};
  console.log({properties});
  return (
    <Drawer
      {...props}
      destroyOnClose
      visible={visible}
      width={'40%'}
      onClose={() => {
        setVisible(false);
      }}
      title={title}
      footer={[
        <Button type={'primary'} onClick={async () => {
          const values = await actions.submit();
          console.log(values);
        }}>提交</Button>
      ]}
    >
      {loading ? <Spin/> : (
        <SchemaForm 
          colon={true}
          layout={'vertical'}
          initialValues={data}
          actions={actions}
          schema={{
            type: 'object',
            properties,
          }}
          expressionScope={{
            text(...args: any[]) {
              return React.createElement('span', {}, ...args)
            },
            tooltip(title: string, offset = 3) {
              return (
                <Tooltip title={title}>
                  <QuestionCircleOutlined
                    style={{ margin: '0 3px', cursor: 'default', marginLeft: offset }}
                  />
                </Tooltip>
              );
            },
          }}
        >
        </SchemaForm>
      )}
    </Drawer>
  );
});
