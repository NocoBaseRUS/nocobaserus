import { useFieldSchema } from '@formily/react';
import { Select } from 'antd';
import _ from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { useAPIClient } from '../../../api-client';
import { findFormBlock } from '../../../block-provider';

interface ITemplate {
  templates: {
    id?: number;
    title: string;
    collection: string;
    dataId: number;
    fields: string[];
    notUseTemplate?: boolean;
    default?: boolean;
  }[];
  /** 是否在 Form 区块显示模板选择器 */
  display: boolean;
}

export const Templates = ({ style = {}, form }) => {
  const fieldSchema = useFieldSchema();
  const { templates = [], display = true } = findDataTemplates(fieldSchema);
  const defaultTemplate = templates.find((item) => item.default);
  const [value, setValue] = React.useState(defaultTemplate?.id === undefined ? templates.length : defaultTemplate?.id);
  const api = useAPIClient();

  useEffect(() => {
    if (defaultTemplate) {
      fetchTemplateData(api, defaultTemplate).then((data) => {
        if (form) {
          form.values = data;
        }
      });
    }
  }, []);

  addId(templates);

  const handleChange = useCallback(async (value, option) => {
    setValue(value);
    if (!option.notUseTemplate) {
      if (form) {
        form.values = await fetchTemplateData(api, option);
      }
    } else {
      form?.reset();
    }
  }, []);

  if (!templates.length || !display) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f8f8', padding: '1em', ...style }}>
      <label style={{ fontSize: 14, fontWeight: 'bold', whiteSpace: 'nowrap' }}>数据模板：</label>
      <Select
        style={{ width: '8em' }}
        options={templates}
        fieldNames={{ label: 'title', value: 'id' }}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

function findDataTemplates(fieldSchema): ITemplate {
  const formSchema = findFormBlock(fieldSchema);
  if (formSchema) {
    return _.cloneDeep(formSchema['x-template-data']) || {};
  }
  return {} as ITemplate;
}

async function fetchTemplateData(api, template: { collection: string; dataId: number; fields: string[] }) {
  return api
    .resource(template.collection)
    .get({
      filterByTk: template.dataId,
      fields: template.fields,
      isTemplate: true,
    })
    .then((data) => {
      return data.data?.data;
    });
}

function addId(templates: ITemplate['templates']) {
  templates.unshift({
    title: '不使用模板',
    notUseTemplate: true,
  } as ITemplate['templates'][0]);
  templates.forEach((item, index) => {
    item.id = index;
  });
}
