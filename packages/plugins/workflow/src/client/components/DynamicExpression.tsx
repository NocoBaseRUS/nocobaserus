import React, { useState } from "react";
import { onFieldInputValueChange } from '@formily/core';
import { observer, connect, mapReadPretty, useFormEffects } from '@formily/react';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';

import { Variable } from "@nocobase/client";

import { NAMESPACE } from "../locale";
import { useCollectionFieldOptions } from "../variable";



const InternalExpression = observer((props: any) => {
  const { value, onChange } = props;
  const [collection, setCollection] = useState(null);

  useFormEffects(() => {
    onFieldInputValueChange('sourceCollection', (f) => {
      setCollection(f.value);
      onChange(null);
    });
  });

  const options = useCollectionFieldOptions({ collection });

  return (
    <Variable.TextArea
      value={value}
      onChange={onChange}
      scope={options}
    />
  );
});

function Result({ value }) {
  const { t } = useTranslation();
  return value
    ? <Tag color="purple">{t('Expression')}</Tag>
    : <Tag>{t('Unconfigured', { ns: NAMESPACE })}</Tag>;
}

export const DynamicExpression = connect(InternalExpression, mapReadPretty(Result));
