import { css } from '@emotion/css';
import { ArrayField, Field } from '@formily/core';
import { observer, RecursionField, Schema, useField, useFieldSchema } from '@formily/react';
import { Table, TableColumnProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { findIndex } from 'lodash';
import {
  RecordIndexProvider,
  RecordProvider,
  useCollectionManager,
  useRequest,
  useSchemaInitializer,
  useRecord,
  useCompile,
  SchemaComponent,
} from '../..';
import { overridingSchema } from '../Configuration/schemas/collectionFields';

const isColumnComponent = (schema: Schema) => {
  return schema['x-component']?.endsWith('.Column') > -1;
};

export const components = {
  body: {
    row: (props) => {
      return <tr {...props} />;
    },
  },
};

const useDef = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  return [selectedRowKeys, setSelectedRowKeys];
};

const useDefDataSource = (options, props) => {
  const field = useField<Field>();
  return useRequest(() => {
    return Promise.resolve({
      data: field.value,
    });
  }, options);
};

type CategorizeKey = 'primaryAndForeignKey' | 'relation' | 'systemInfo' | 'basic' | 'titleField';
const CategorizeKeyNameMap = new Map<CategorizeKey, string>([
  ['primaryAndForeignKey', 'PK & FK fields'],
  ['relation', 'Association fields'],
  ['systemInfo', 'System fields'],
  ['basic', 'General fields'],
  ['titleField', 'Title field'],
]);

interface CategorizeDataItem {
  key: CategorizeKey;
  name: string;
  data: Array<any>;
}

export const CollectionFieldsTableArray: React.FC<any> = observer((props) => {
  const field = useField<ArrayField>();
  const { name } = useRecord();
  const { t } = useTranslation();
  const compile = useCompile();
  const { getInterface, getInheritCollections, getCollection } = useCollectionManager();
  const {
    showIndex = true,
    useSelectedRowKeys = useDef,
    useDataSource = useDefDataSource,
    onChange,
    ...others
  } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useSelectedRowKeys();
  const [categorizeData, setCategorizeData] = useState<Array<CategorizeDataItem>>([]);
  const [expandedKeys, setExpendedKeys] = useState(selectedRowKeys);
  const inherits = getInheritCollections(name);
  const collection = getCollection(name);

  const loadData = (data, titleField) => {
    const sortKeyArr: Array<CategorizeKey> = ['primaryAndForeignKey', 'relation', 'titleField', 'basic', 'systemInfo'];
    const tmpData: Array<CategorizeDataItem> = [];
    const categorizeMap = new Map<CategorizeKey, any>();
    const addCategorizeVal = (categorizeKey: CategorizeKey, val) => {
      let fieldArr = categorizeMap.get(categorizeKey);
      if (!fieldArr) {
        fieldArr = [];
      }
      fieldArr.push(val);
      categorizeMap.set(categorizeKey, fieldArr);
    };
    data.forEach((item) => {
      const itemInterface = getInterface(item?.interface);
      if (item?.primaryKey || item.isForeignKey) {
        addCategorizeVal('primaryAndForeignKey', item);
        return;
      }

      if (titleField == item?.name) {
        addCategorizeVal('titleField', item);
        return;
      }
      const group = itemInterface?.group as CategorizeKey;
      switch (group) {
        case 'systemInfo':
        case 'relation':
          addCategorizeVal(group, item);
          break;
        default:
          addCategorizeVal('basic', item);
      }
    });
    if (inherits) {
      inherits.forEach((v) => {
        sortKeyArr.push(v);
        const parentCollection = getCollection(v);
        parentCollection.fields.map((k) => {
          if (k.interface) {
            addCategorizeVal(v, new Proxy(k, {}));
            data.push(new Proxy(k, {}));
          }
        });
      });
    }
    sortKeyArr.forEach((key) => {
      if (categorizeMap.get(key)?.length > 0) {
        const parentCollection = getCollection(key);
        tmpData.push({
          key,
          name:
            t(CategorizeKeyNameMap.get(key)) || t(`Parent collection fields`) + `(${compile(parentCollection.title)})`,
          data: categorizeMap.get(key),
        });
      }
    });
    setExpendedKeys(sortKeyArr);
    setCategorizeData(tmpData);
  };
  useDataSource({
    onSuccess(data) {
      field.value = data?.data || [];
    },
  });

  useEffect(() => {
    loadData(field.value, collection.titleField);
  }, [field.value, collection.titleField]);

  const useTableColumns = () => {
    const schema = useFieldSchema();
    const { exists, render } = useSchemaInitializer(schema['x-initializer']);
    const columns = schema
      .reduceProperties((buf, s) => {
        if (isColumnComponent(s)) {
          return buf.concat([s]);
        }
      }, [])
      .map((s: Schema, index) => {
        return {
          title: <RecursionField name={s.name} schema={s} onlyRenderSelf />,
          dataIndex: s.name,
          key: s.name,
          className: css`
            max-width: 150px;
            width: 150px;
            min-width: 150px;
            white-space: nowrap;
          `,
          render: (v, record) => {
            const index = findIndex(field.value, record);
            return (
              <RecordIndexProvider index={index}>
                <RecordProvider record={record}>
                  <RecursionField schema={s} name={index} onlyRenderProperties />
                </RecordProvider>
              </RecordIndexProvider>
            );
          },
        } as TableColumnProps<any>;
      });
    if (!exists) {
      return columns;
    }
    return columns.concat({
      title: render(),
      dataIndex: 'TABLE_COLUMN_INITIALIZER',
      key: 'TABLE_COLUMN_INITIALIZER',
    });
  };

  const expandedRowRender = (record: CategorizeDataItem, index, indent, expanded) => {
    if (!props.loading) {
      const columns = useTableColumns();
      if (inherits.includes(record.key)) {
        columns.pop();
        columns.push({
          title: <RecursionField name={'column4'} schema={overridingSchema as Schema} onlyRenderSelf />,
          dataIndex: 'column4',
          key: 'column4',
          render: (v, record) => {
            const index = findIndex(field.value, record);
            return (
              <RecordIndexProvider index={index}>
                <RecordProvider record={record}>
                  <SchemaComponent
                    scope={{ currentCollection: name }}
                    schema={overridingSchema as Schema}
                    name={index}
                    onlyRenderProperties
                  />
                </RecordProvider>
              </RecordIndexProvider>
            );
          },
        });
      }
      const restProps = {
        rowSelection:
          props.rowSelection && !inherits.includes(record.key)
            ? {
                type: 'checkbox',
                selectedRowKeys,
                onChange(selectedRowKeys: any[]) {
                  setSelectedRowKeys(selectedRowKeys);
                },
                ...props.rowSelection,
              }
            : undefined,
      };
      return (
        <Table
          {...others}
          {...restProps}
          components={components}
          showHeader={false}
          columns={columns}
          dataSource={record.data}
          pagination={false}
        />
      );
    }
  };

  const groupColumns = [
    {
      title: t('Field display name'),
      dataIndex: 'name',
      key: 'name',
      width: '180px',
    },
    {
      title: t('Field name'),
      width: '150px',
    },
    {
      title: t('Field interface'),
      width: '150px',
    },
    {
      title: t('Actions'),
      width: '150px',
    },
  ];
  return (
    <div
      className={css`
        .ant-table {
          overflow-x: auto;
          overflow-y: hidden;
        }
      `}
    >
      <Table
        showHeader={true}
        loading={props?.loading}
        columns={groupColumns}
        dataSource={categorizeData}
        pagination={false}
        expandable={{
          expandedRowRender,
          expandedRowKeys: expandedKeys,
        }}
        onExpand={(expanded, record) => {
          let keys = [];
          if (expanded) {
            keys = expandedKeys.concat([record.key]);
          } else {
            keys = expandedKeys.filter((v) => {
              return v !== record.key;
            });
          }
          setExpendedKeys(keys);
        }}
      />
    </div>
  );
});
