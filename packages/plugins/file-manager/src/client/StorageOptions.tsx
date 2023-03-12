import { FormLayout } from '@formily/antd';
import { Field } from '@formily/core';
import { observer, RecursionField, Schema, useField, useForm } from '@formily/react';
import React, { useEffect, useState } from 'react';

const schema = {
  local: {
    properties: {
      documentRoot: {
        title: '{{t("Destination")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      serve: {
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Checkbox',
        'x-content': '{{t("Use the built-in static file server")}}',
        default: true,
      },
    },
  },
  'ali-oss': {
    properties: {
      region: {
        title: '{{t("Region")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      accessKeyId: {
        title: '{{t("AccessKey ID")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      accessKeySecret: {
        title: '{{t("AccessKey Secret")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Password',
        required: true,
      },
      bucket: {
        title: '{{t("Bucket")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
    },
  },
  'tx-cos': {
    properties: {
      Region: {
        title: '{{t("Region")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      SecretId: {
        title: '{{t("SecretId")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      SecretKey: {
        title: '{{t("SecretKey")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Password',
        required: true,
      },
      Bucket: {
        title: '{{t("Bucket")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
    },
  },
  s3: {
    properties: {
      region: {
        title: '{{t("Region")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      accessKeyId: {
        title: '{{t("AccessKey ID")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      secretAccessKey: {
        title: '{{t("AccessKey Secret")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Password',
        required: true,
      },
      bucket: {
        title: '{{t("Bucket")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      endpoint: {
        title: '{{t("Endpoint")}}',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
    },
  },
};

export const StorageOptions = observer((props) => {
  const form = useForm();
  const field = useField<Field>();
  const [s, setSchema] = useState(new Schema({}));
  useEffect(() => {
    // form.clearFormGraph('options.*');
    setSchema(new Schema(schema[form.values.type] || {}));
  }, [form.values.type]);
  return (
    <FormLayout layout={'vertical'}>
      <RecursionField key={form.values.type || 'local'} basePath={field.address} onlyRenderProperties schema={s} />
    </FormLayout>
  );
});
