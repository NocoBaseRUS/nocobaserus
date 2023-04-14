import { Form } from '@formily/core';
import { useFieldSchema, useForm } from '@formily/react';
import { forEach } from '@nocobase/utils/client';
import { Select } from 'antd';
import _ from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { useAPIClient } from '../../../api-client';
import { useCollectionManager } from '../../../collection-manager';
import { GeneralSchemaDesigner, SchemaSettings } from '../../../schema-settings';
import { useSchemaTemplate } from '../../../schema-templates';

export const Templates = () => {
  const fieldSchema = useFieldSchema();
  const templates = findDataTemplates(fieldSchema);
  const defaultTemplate = templates.find((item) => item.default);
  const [value, setValue] = React.useState(defaultTemplate?.id === undefined ? templates.length : defaultTemplate?.id);
  const api = useAPIClient();
  const [templateData, setTemplateData] = React.useState<any>(null);
  const { getCollectionFields } = useCollectionManager();
  const form = useForm();

  useEffect(() => {
    if (defaultTemplate) {
      fetchTemplateData(api, defaultTemplate).then((data) => {
        setTemplateData(data);
      });
    }
  }, []);

  useEffect(() => {
    if (templates[value].noTemplate) {
      return;
    }
    const template = templates.find((item) => item.id === value);
    const fields = getCollectionFields(template.collection);
    changeFormValues(form, templateData, template, fields);
  }, [templateData]);

  if (templates) {
    templates.push({
      title: '不使用模板',
      id: templates.length,
      noTemplate: true,
    });
  }

  const handleChange = useCallback(async (value, option) => {
    setValue(value);
    if (!option.noTemplate) {
      setTemplateData(await fetchTemplateData(api, option));
    }
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f8f8', padding: '1em' }}>
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

Templates.Designer = () => {
  const template = useSchemaTemplate();

  return (
    <GeneralSchemaDesigner template={template}>
      <SchemaSettings.Remove />
    </GeneralSchemaDesigner>
  );
};

function findDataTemplates(fieldSchema) {
  while (fieldSchema) {
    if (fieldSchema['x-component'] === 'Grid' || fieldSchema['x-data-templates']) {
      return (
        fieldSchema['x-data-templates']?.map((item, i) => {
          return {
            id: i,
            ...item,
          };
        }) || []
      );
    }
    fieldSchema = fieldSchema.parent;
  }
  return [];
}

async function fetchTemplateData(api, template: { collection: string; dataId: number; fields: string[] }) {
  return api
    .resource(template.collection)
    .get({
      filterByTk: template.dataId,
      fields: template.fields,
    })
    .then((data) => {
      return data.data?.data;
    });
}

function changeFormValues(
  form: Form<any>,
  data,
  template: { collection: string; dataId: number; fields: string[] },
  fields: any[],
) {
  if (!data) {
    return;
  }

  const deleteSystemFields = (data) => {
    delete data.id;
    delete data.sort;
    delete data.createdById;
    delete data.createdBy;
    delete data.createdAt;
    delete data.updatedById;
    delete data.updatedBy;
    delete data.updatedAt;
  };

  const map = {
    hasOne(data, fieldData) {
      deleteSystemFields(data);
      delete data[fieldData.targetKey];
      delete data[fieldData.foreignKey];
      return data;
    },
    hasMany(data, fieldData) {
      return data?.map((item) => {
        deleteSystemFields(item);
        delete item[fieldData.targetKey];
        delete item[fieldData.foreignKey];
        return item;
      });
    },
    belongsTo(data, fieldData) {
      deleteSystemFields(data);
      return data;
    },
    belongsToMany(data, fieldData, parentData) {
      delete parentData[fieldData.sourceKey];
      return data.map((item) => {
        deleteSystemFields(item);
        delete item[fieldData.targetKey];
        const through = item[fieldData.through];
        if (through) {
          deleteSystemFields(through);
          delete through[fieldData.foreignKey];
          delete through[fieldData.otherKey];
        }
        return item;
      });
    },
  };

  forEach(template.fields, (field: string) => {
    const key = field.split('.')[0];
    const fieldData = fields.find((item) => item.name === key);

    _.set(
      form.values,
      key,
      map[fieldData.type] ? map[fieldData.type](_.get(data, key), fieldData, data) : _.get(data, key),
    );
  });
}
