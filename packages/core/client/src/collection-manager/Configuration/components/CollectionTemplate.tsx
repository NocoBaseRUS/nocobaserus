import { observer } from '@formily/react';
import { Tag } from 'antd';
import React from 'react';
import { useCompile } from '../../../schema-component';
import { useCollectionManager } from '../../hooks';

export const CollectionTemplate = observer((props: any) => {
  const { value } = props;
  const { getTemplate } = useCollectionManager();
  const compile = useCompile();
  const schema = getTemplate(value);

  if (!schema) return null;

  return <Tag>{compile(schema.title)}</Tag>;
});
