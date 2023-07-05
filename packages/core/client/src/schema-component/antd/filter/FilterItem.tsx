import { CloseCircleOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import { observer } from '@formily/react';
import { Cascader, Select, Space } from 'antd';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useCompile } from '../..';
import { RemoveConditionContext } from './context';
import { DynamicComponent } from './DynamicComponent';
import { useValues } from './useValues';

export const FilterItem = observer(
  (props: any) => {
    const { t } = useTranslation();
    const compile = useCompile();
    const remove = useContext(RemoveConditionContext);
    const { schema, fields, operators, dataIndex, operator, setDataIndex, setOperator, value, setValue } = useValues();
    return (
      // 添加 nc-filter-item 类名是为了帮助编写测试时更容易选中该元素
      <div style={{ marginBottom: 8 }} className="nc-filter-item">
        <Space>
          <Cascader
            className={css`
              width: 160px;
            `}
            fieldNames={{
              label: 'title',
              value: 'name',
              children: 'children',
            }}
            changeOnSelect={false}
            value={dataIndex}
            options={compile(fields)}
            onChange={(value) => {
              setDataIndex(value);
            }}
            placeholder={t('Select field')}
          />
          <Select
            className={css`
              min-width: 110px;
            `}
            popupMatchSelectWidth={false}
            value={operator?.value}
            options={compile(operators)}
            onChange={(value) => {
              setOperator(value);
            }}
            placeholder={t('Comparision')}
          />
          {!operator?.noValue ? <DynamicComponent value={value} schema={schema} onChange={setValue} /> : null}
          {!props.disabled && (
            <a>
              <CloseCircleOutlined onClick={() => remove()} style={{ color: '#bfbfbf' }} />
            </a>
          )}
        </Space>
      </div>
    );
  },
  { displayName: 'FilterItem' },
);
