import { createForm } from '@formily/core';
import { useField } from '@formily/react';
import { Spin } from 'antd';
import _ from 'lodash';
import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react';
import { withDynamicSchemaProps } from '../application/hoc/withDynamicSchemaProps';
import { useCollectionParentRecord } from '../data-source/collection-record/CollectionRecordProvider';
import { RecordProvider } from '../record-provider';
import { BlockProvider, useBlockRequestContext } from './BlockProvider';
import { TemplateBlockProvider } from './TemplateBlockProvider';
import { useParsedFilter } from './hooks';
import { useCollectionManager_deprecated } from '../collection-manager';
import { useCollectionRecordData } from '../data-source';
import { useDesignable } from '../schema-component';

/**
 * @internal
 */
export const DetailsBlockContext = createContext<any>({});
DetailsBlockContext.displayName = 'DetailsBlockContext';

const InternalDetailsBlockProvider = (props) => {
  const { action, readPretty } = props;
  const field = useField<any>();
  const form = useMemo(
    () =>
      createForm({
        readPretty,
      }),
    [readPretty],
  );
  const { resource, service } = useBlockRequestContext();
  const parentRecord = useCollectionParentRecord();
  const currentRecord = (action === 'list' ? service?.data?.data?.[0] : service?.data?.data) || {};
  const formBlockRef = useRef();
  const detailsBLockValue = useMemo(() => {
    return {
      action,
      form,
      field,
      service,
      resource,
      formBlockRef,
    };
  }, [action, field, form, resource, service]);

  const { filter } = useParsedFilter({
    filterOption: service?.params?.[0]?.filter,
  });
  useEffect(() => {
    if (!_.isEmpty(filter) && !service.loading) {
      service?.run({ ...service?.params?.[0], filter });
    }
  }, [JSON.stringify(filter)]);

  if (service.loading && !field.loaded) {
    return <Spin />;
  }
  field.loaded = true;

  return (
    <DetailsBlockContext.Provider value={detailsBLockValue}>
      <div ref={formBlockRef}>
        <RecordProvider isNew={false} record={currentRecord} parent={parentRecord?.data}>
          {props.children}
        </RecordProvider>
      </div>
    </DetailsBlockContext.Provider>
  );
};

export const DetailsBlockProvider = withDynamicSchemaProps((props) => {
  const record = useCollectionRecordData();
  const { association, dataSource } = props;
  const { getCollection } = useCollectionManager_deprecated(dataSource);
  const { __collection } = record || {};
  const { designable } = useDesignable();
  const collection = props.collection || getCollection(association, dataSource).name;
  let detailFlag = true;
  if (!designable && __collection) {
    detailFlag = __collection === collection;
  }

  if (!detailFlag) {
    return null;
  }

  return (
    <TemplateBlockProvider>
      <BlockProvider name="details" {...props}>
        <InternalDetailsBlockProvider {...props} />
      </BlockProvider>
    </TemplateBlockProvider>
  );
});

/**
 * @internal
 */
export const useDetailsBlockContext = () => {
  return useContext(DetailsBlockContext);
};

/**
 * @deprecated
 * use `useDetailsWithPaginationProps` or `useDetailsProps` instead
 * @returns
 */
export const useDetailsBlockProps = () => {
  const ctx = useDetailsBlockContext();
  useEffect(() => {
    if (!ctx.service.loading) {
      const data = ctx.action === 'list' ? ctx.service?.data?.data?.[0] : ctx.service?.data?.data;
      ctx.form
        .reset()
        .then(() => {
          ctx.form.setValues(data || {});
        })
        .catch(console.error);
    }
  }, [ctx.action, ctx.form, ctx.service?.data?.data, ctx.service.loading]);
  return {
    form: ctx.form,
  };
};
