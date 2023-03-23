import React, { useEffect, useState } from 'react';
import { Table, Tag, Select, Input } from 'antd';
import { useField } from '@formily/react';
import { useTranslation } from 'react-i18next';
import { useAPIClient } from '../../../api-client';

export const PreviewFields = (props) => {
  const { name } = props;
  const api = useAPIClient();
  const { t } = useTranslation();
  const [dataSource, setDataSource] = useState([]);
  const [previewColumns, setPreviewColumns] = useState([]);
  const [previewData, setPreviewData] = useState([]);
   const field:any=useField();
  const columns = [
    {
      title: t('Field name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('Field type'),
      dataIndex: 'type',
      key: 'type',
      render: (text) => {
        return <Tag>{text}</Tag>;
      },
    },
    {
      title: t('Field source'),
      dataIndex: 'source',
      key: 'source',
      render: (text) => {
        return <Select defaultValue={text} style={{ width: '100%' }} />;
      },
    },
    {
      title: t('Field interface'),
      dataIndex: 'interface',
      key: 'interface',
      render: (text, record) => {
        return record.source ? text : <Select defaultValue={text} style={{ width: '100%' }} />;
      },
    },
    {
      title: t('Field display name'),
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => {
        return record.source ? text : <Input defaultValue={text} />;
      },
    },
  ];
  useEffect(() => {
    if (name) {
      api
        .resource(`dbViews/${name}/fields`)
        .list({
          paginate: false,
        })
        .then(({ data }) => {
          if (data?.data) {
            field.value=data.data
            setDataSource(data?.data);
            const pColumns = data?.data?.map((item) => {
              const target = item.source || item.title || item.name;
              return {
                title: target,
                dataIndex: target,
                key: target,
              };
            });
            setPreviewColumns(pColumns);
          }
        });
    }
  }, [name]);
  return (
    dataSource.length > 0 && (
      <>
        <h4>Fields:</h4>
        <Table bordered columns={columns} dataSource={dataSource} scroll={{ y: 300 }} pagination={false} rowClassName="editable-row" />
        <h4>Preview:</h4>
        <Table bordered columns={previewColumns} />
      </>
    )
  );
};
