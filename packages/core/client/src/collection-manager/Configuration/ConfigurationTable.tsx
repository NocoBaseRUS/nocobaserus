import { useForm } from '@formily/react';
import { action } from '@formily/reactive';
import { uid } from '@formily/shared';
import React, { useContext, useRef, useState } from 'react';
import { CollectionFieldsTable } from '.';
import { useCurrentAppInfo } from '../../appInfo';
import { useRecord } from '../../record-provider';
import { SchemaComponent, SchemaComponentContext, useCompile } from '../../schema-component';
import { useCancelAction } from '../action-hooks';
import { CollectionCategroriesContext } from '../context';
import { useCollectionManager } from '../hooks/useCollectionManager';
import { DataSourceContext } from '../sub-table';
import { AddSubFieldAction } from './AddSubFieldAction';
import { FieldSummary } from './components/FieldSummary';
import { EditSubFieldAction } from './EditSubFieldAction';
import { collectionSchema } from './schemas/collections';

const useAsyncDataSource = (service: any) => {
  return (field: any, options?: any) => {
    field.loading = true;
    service(field, options).then(
      action.bound((data: any) => {
        field.dataSource = data;
        field.loading = false;
      }),
    );
  };
};

const useSelectedRowKeys = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return [selectedRowKeys, setSelectedRowKeys];
};

const useDestroySubField = () => {
  const record = useRecord();
  const form = useForm();
  return {
    async run() {
      const children = form.values?.children?.slice?.();
      form.setValuesIn(
        'children',
        children.filter((child) => {
          return child.name !== record.name;
        }),
      );
    },
  };
};

const useBulkDestroySubField = () => {
  return {
    async run() {},
  };
};

// 获取当前字段列表
const useCurrentFields = () => {
  const record = useRecord();
  // 仅当当前字段为子表单时，从DataSourceContext中获取已配置的字段列表
  if (record.__parent && record.__parent.interface === 'subTable') {
    const ctx = useContext(DataSourceContext);
    return ctx.dataSource;
  }

  const { getCollectionFields } = useCollectionManager();
  const fields = getCollectionFields(record.collectionName || record.name) as any[];
  return fields;
};

const useNewId = (prefix) => {
  return `${prefix || ''}${uid()}`;
};

export const ConfigurationTable = () => {
  const { collections = [] } = useCollectionManager();
  const {
    data: { database },
  } = useCurrentAppInfo();
  const data = useContext(CollectionCategroriesContext);
  const collectonsRef: any = useRef();
  collectonsRef.current = collections;
  const compile = useCompile();
  const loadCollections = async (field, options) => {
    const { targetScope } = options;
    return collectonsRef.current
      ?.filter((item) => !(item.autoCreate && item.isThrough))
      .filter((item) =>
        targetScope
          ? targetScope['template']?.includes(item.template) || targetScope['name']?.includes(item.name)
          : true,
      )
      .map((item: any) => ({
        label: compile(item.title),
        value: item.name,
      }));
  };
  const loadCategories = async () => {
    return data.data.map((item: any) => ({
      label: compile(item.name),
      value: item.id,
    }));
  };
  const ctx = useContext(SchemaComponentContext);
  return (
      <SchemaComponentContext.Provider value={{ ...ctx, designable: false }}>
        <SchemaComponent
          schema={collectionSchema}
          components={{
            AddSubFieldAction,
            EditSubFieldAction,
            FieldSummary,
            CollectionFieldsTable,
          }}
          scope={{
            useDestroySubField,
            useBulkDestroySubField,
            useSelectedRowKeys,
            useAsyncDataSource,
            loadCollections,
            loadCategories,
            useCurrentFields,
            useNewId,
            useCancelAction,
            enableInherits: database?.dialect === 'postgres',
          }}
        />
      </SchemaComponentContext.Provider>
  );
};
