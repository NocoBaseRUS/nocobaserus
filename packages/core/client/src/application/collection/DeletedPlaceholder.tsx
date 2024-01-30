import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDesignable } from '../../schema-component';
import { Result } from 'antd';

export const DeletedPlaceholder: FC<{ type: string; name?: string | number }> = ({ type, name }) => {
  const { designable } = useDesignable();
  const { t } = useTranslation();
  if (!name) {
    console.error(`DeletedPlaceholder: ${type} name is required`);
    return null;
  }

  if (designable || process.env.NODE_ENV === 'development') {
    return <Result status="warning" title={t(`${type}: "${name}" not exists`)} />;
  }

  return null;
};
