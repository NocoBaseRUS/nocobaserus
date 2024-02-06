import React from 'react';
import { connect, useFieldSchema } from '@formily/react';
import { CollectionFieldInternalFieldV2 } from '../application/data-source/collection-field/CollectionField';
import { CollectionFieldProvider } from './CollectionFieldProvider';

export const CollectionField = connect((props) => {
  const fieldSchema = useFieldSchema();
  const field = fieldSchema?.['x-component-props']?.['field'];
  return (
    <CollectionFieldProvider name={fieldSchema.name} field={field}>
      <CollectionFieldInternalFieldV2 {...props} />
    </CollectionFieldProvider>
  );
});
