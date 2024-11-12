/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { connect, useFieldSchema } from '@formily/react';
import React from 'react';
import { useDynamicComponentProps } from '../../hoc/withDynamicSchemaProps';
import { useComponent } from '../../schema-component';
import { useCollectionField } from './CollectionFieldProvider';

const CollectionFieldInternalField = (props) => {
  const fieldSchema = useFieldSchema();
  const { uiSchema } = useCollectionField();
  const Component = useComponent(
    fieldSchema['x-component-props']?.['component'] || uiSchema?.['x-component'] || 'Input',
  );
  const dynamicProps = useDynamicComponentProps(uiSchema?.['x-use-component-props'], props);

  if (!uiSchema) return null;

  return <Component {...props} {...dynamicProps} />;
};

export const CollectionField = connect((props) => {
  return <CollectionFieldInternalField {...props} />;
});

CollectionField.displayName = 'CollectionField';
