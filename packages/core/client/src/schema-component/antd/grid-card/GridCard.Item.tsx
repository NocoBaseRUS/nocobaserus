import { css } from '@emotion/css';
import { ObjectField } from '@formily/core';
import { useField } from '@formily/react';
import { Card } from 'antd';
import React from 'react';
import { RecordSimpleProvider } from '../../../record-provider';

const itemCss = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const GridCardItem = (props) => {
  const field = useField<ObjectField>();
  return (
    <Card
      className={css`
        height: 100%;
        > .ant-card-body {
          padding: 24px 24px 0px;
          height: 100%;
        }
        .nb-action-bar button {
          margin-bottom: 10px;
        }
      `}
    >
      <div className={itemCss}>
        <RecordSimpleProvider value={field.value}>{props.children}</RecordSimpleProvider>
      </div>
    </Card>
  );
};
