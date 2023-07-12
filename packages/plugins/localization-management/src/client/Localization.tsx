import { SyncOutlined } from '@ant-design/icons';
import { Form, createForm } from '@formily/core';
import { Field, useField, useForm } from '@formily/react';
import {
  FormProvider,
  Input,
  Radio,
  SchemaComponent,
  locale,
  useAPIClient,
  useActionContext,
  useRecord,
  useResourceActionContext,
  useResourceContext,
} from '@nocobase/client';
import { Input as AntdInput, Button, Card, Checkbox, Col, Divider, Popover, Row, Tag, Typography, message } from 'antd';
import React, { useMemo, useState } from 'react';
import { useLocalTranslation } from './locale';
import { localizationSchema } from './schemas/localization';
const { Text } = Typography;

const useUpdateTranslationAction = () => {
  const field = useField();
  const form = useForm();
  const ctx = useActionContext();
  const { refresh } = useResourceActionContext();
  const { targetKey } = useResourceContext();
  const { [targetKey]: textId } = useRecord();
  const api = useAPIClient();
  const locale = api.auth.getLocale();
  return {
    async run() {
      await form.submit();
      field.data = field.data || {};
      field.data.loading = true;
      try {
        await api.resource('localizationTranslations').updateOrCreate({
          filterKeys: ['textId', 'locale'],
          values: {
            textId,
            locale,
            translation: form.values.translation,
          },
        });
        ctx.setVisible(false);
        await form.reset();
        refresh();
      } catch (e) {
        console.log(e);
      } finally {
        field.data.loading = false;
      }
    },
  };
};

const useDestroyTranslationAction = () => {
  const { refresh } = useResourceActionContext();
  const api = useAPIClient();
  const { translationId: filterByTk } = useRecord();
  return {
    async run() {
      await api.resource('localizationTranslations').destroy({ filterByTk });
      refresh();
    },
  };
};

const useBulkDestroyTranslationAction = () => {
  const { state, setState, refresh } = useResourceActionContext();
  const api = useAPIClient();
  const { t } = useLocalTranslation();
  return {
    async run() {
      if (!state?.selectedRowKeys?.length) {
        return message.error(t('Please select the records you want to delete'));
      }
      await api.resource('localizationTranslations').destroy({ filterByTk: state?.selectedRowKeys });
      setState?.({ selectedRowKeys: [] });
      refresh();
    },
  };
};

const usePublishAction = () => {
  const api = useAPIClient();
  return {
    async run() {
      await api.resource('localization').publish();
      window.location.reload();
    },
  };
};

const Sync = () => {
  const { t } = useLocalTranslation();
  const { refresh } = useResourceActionContext();
  const api = useAPIClient();
  const [loading, setLoading] = useState(false);
  const plainOptions = ['local', 'menu', 'db'];
  const [checkedList, setCheckedList] = useState<any[]>(plainOptions);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);
  const onChange = (list: any[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Popover
      placement="bottomRight"
      content={
        <>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            {t('All')}
          </Checkbox>
          <Divider style={{ margin: '5px 0' }} />
          <Checkbox.Group onChange={onChange} value={checkedList}>
            <Col>
              <Row>
                <Checkbox value="local">{t('System & Plugins')}</Checkbox>
              </Row>
              <Row>
                <Checkbox value="db">{t('Collections & Fields')}</Checkbox>
              </Row>
              <Row>
                <Checkbox value="menu">{t('Menu')}</Checkbox>
              </Row>
            </Col>
          </Checkbox.Group>
        </>
      }
    >
      <Button
        icon={<SyncOutlined />}
        type="primary"
        loading={loading}
        onClick={async () => {
          if (!checkedList.length) {
            return message.error(t('Please select the resources you want to synchronize'));
          }
          setLoading(true);
          await api.resource('localization').sync({
            values: {
              type: checkedList,
            },
          });
          setLoading(false);
          refresh();
        }}
      >
        {t('Sync')}
      </Button>
    </Popover>
  );
};

const Filter = () => {
  const { t } = useLocalTranslation();
  const { run, refresh } = useResourceActionContext();
  const api = useAPIClient();
  const locale = api.auth.getLocale();
  const form = useMemo<Form>(
    () =>
      createForm({
        initialValues: {
          hasTranslation: true,
        },
      }),
    [],
  );
  const filter = (values?: any) => {
    run({
      ...(values || form.values),
    });
  };
  return (
    <FormProvider form={form}>
      <div style={{ display: 'flex' }}>
        <Field
          name="keyword"
          component={[
            AntdInput.Search,
            {
              placeholder: t('Keyword'),
              allowClear: true,
              style: {
                width: '50%',
              },
              onSearch: (keyword) => filter({ ...form.values, keyword }),
            },
          ]}
        />
        <Field
          name="hasTranslation"
          dataSource={[
            { label: t('All'), value: true },
            { label: t('No translation'), value: false },
          ]}
          component={[
            Radio.Group,
            {
              defaultValue: true,
              style: {
                marginLeft: '8px',
                width: '50%',
              },
              optionType: 'button',
              onChange: () => filter(),
            },
          ]}
        />
      </div>
    </FormProvider>
  );
};

export const Localization = () => {
  const { t } = useLocalTranslation();
  const api = useAPIClient();
  const curLocale = api.auth.getLocale();
  const localeLabel = locale[curLocale]?.label || curLocale;

  const CurrentLang = () => (
    <Typography>
      <Text strong>{t('Current language')}</Text>
      <Tag style={{ marginLeft: '10px' }}>{localeLabel}</Tag>
    </Typography>
  );

  const TranslationField = (props) =>
    props.value !== undefined ? <Input.TextArea {...props} /> : <div>{t('No data')}</div>;
  return (
    <Card bordered={false}>
      <SchemaComponent
        schema={localizationSchema}
        components={{ TranslationField, CurrentLang, Sync, Filter }}
        scope={{
          t,
          useDestroyTranslationAction,
          useBulkDestroyTranslationAction,
          useUpdateTranslationAction,
          usePublishAction,
        }}
      />
    </Card>
  );
};
