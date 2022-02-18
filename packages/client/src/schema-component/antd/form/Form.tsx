import { FormLayout } from '@formily/antd';
import { createForm } from '@formily/core';
import { FieldContext, FormContext, observer, RecursionField, useField, useFieldSchema } from '@formily/react';
import { Options, Result } from 'ahooks/lib/useRequest/src/types';
import { Spin } from 'antd';
import React, { useMemo } from 'react';
import { useAttach, useComponent } from '../..';
import { useRequest } from '../../../api-client';

type Opts = Options<any, any> & { uid?: string };

export interface FormProps {
  [key: string]: any;
}

export type FormUseValues = (opts?: Opts, props?: FormProps) => Result<any, any>;

const FormComponent: React.FC<FormProps> = (props) => {
  const { form, children, ...others } = props;
  const field = useField();
  const fieldSchema = useFieldSchema();
  // TODO: component 里 useField 会与当前 field 存在偏差
  const f = useAttach(form.createVoidField({ ...field.props, basePath: '' }));
  return (
    <FieldContext.Provider value={undefined}>
      <FormContext.Provider value={form}>
        <FormLayout layout={'vertical'} {...others}>
          <RecursionField basePath={f.address} schema={fieldSchema} onlyRenderProperties />
        </FormLayout>
      </FormContext.Provider>
    </FieldContext.Provider>
  );
};

const Def = (props: any) => props.children;

const FormDecorator: React.FC<FormProps> = (props) => {
  const { form, children, ...others } = props;
  const field = useField();
  const fieldSchema = useFieldSchema();
  // TODO: component 里 useField 会与当前 field 存在偏差
  const f = useAttach(form.createVoidField({ ...field.props, basePath: '' }));
  const Component = useComponent(fieldSchema['x-component'], Def);
  return (
    <FieldContext.Provider value={undefined}>
      <FormContext.Provider value={form}>
        <FormLayout layout={'vertical'} {...others}>
          <FieldContext.Provider value={f}>
            <Component {...field.componentProps}>
              <RecursionField basePath={f.address} schema={fieldSchema} onlyRenderProperties />
            </Component>
          </FieldContext.Provider>
          {/* <FieldContext.Provider value={f}>{children}</FieldContext.Provider> */}
        </FormLayout>
      </FormContext.Provider>
    </FieldContext.Provider>
  );
};

const useRequestProps = (props: any) => {
  const { request, initialValue } = props;
  if (request) {
    return request;
  }
  return () => {
    return Promise.resolve({
      data: initialValue,
    });
  };
};

const useDef = (opts: any = {}, props: FormProps = {}) => {
  return useRequest(useRequestProps(props), opts);
};

export const Form: React.FC<FormProps> = observer((props) => {
  const { request, effects, initialValue, useValues = useDef, ...others } = props;
  const fieldSchema = useFieldSchema();
  const form = useMemo(() => createForm({ effects }), []);
  const result = useValues(
    {
      uid: fieldSchema['x-uid'],
      async onSuccess(data) {
        await form.reset();
        form.setValues(data?.data);
      },
    },
    props,
  );
  return (
    <Spin spinning={result?.loading || false}>
      {fieldSchema['x-decorator'] === 'Form' ? (
        <FormDecorator form={form} {...others} />
      ) : (
        <FormComponent form={form} {...others} />
      )}
    </Spin>
  );
});
