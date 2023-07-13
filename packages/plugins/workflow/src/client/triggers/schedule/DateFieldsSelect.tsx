import { observer, useForm } from '@formily/react';
import { useCollectionManager, useCompile } from '@nocobase/client';
import { Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const DateFieldsSelect: React.FC<any> = observer(
  (props) => {
    const { t } = useTranslation();
    const compile = useCompile();
    const { getCollectionFields } = useCollectionManager();
    const { values } = useForm();
    const fields = getCollectionFields(values?.collection);

    return (
      <Select popupMatchSelectWidth={false} placeholder={t('Select field')} {...props}>
        {fields
          .filter((field) => !field.hidden && (field.uiSchema ? field.type === 'date' : false))
          .map((field) => (
            <Select.Option key={field.name} value={field.name}>
              {compile(field.uiSchema?.title)}
            </Select.Option>
          ))}
      </Select>
    );
  },
  { displayName: 'DateFieldsSelect' },
);
