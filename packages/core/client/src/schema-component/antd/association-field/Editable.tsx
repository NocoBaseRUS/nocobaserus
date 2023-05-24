import { observer, useField, useFieldSchema, useForm } from '@formily/react';
import React, { useEffect, useState } from 'react';
import { SchemaComponentOptions } from '../../';
import { useAssociationCreateActionProps as useCAP } from '../../../block-provider/hooks';
import { AssociationFieldProvider } from './AssociationFieldProvider';
import { AssociationSelect } from './AssociationSelect';
import { InternalFileManager } from './FileManager';
import { InternalNester } from './InternalNester';
import { InternalPicker } from './InternalPicker';
import { InternalSubTable } from './InternalSubTable';
import { CreateRecordAction } from './components/CreateRecordAction';
import { useAssociationFieldContext } from './hooks';

const EditableAssociationField = observer((props: any) => {
  const { multiple } = props;
  const field: any = useField();
  const form = useForm();
  const fieldSchema = useFieldSchema();
  const { options: collectionField, currentMode } = useAssociationFieldContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (!collectionField) {
      setLoading(false);
      return;
    }
    if (field.value !== null && field.value !== undefined) {
      setLoading(false);
      return;
    }
    if (currentMode === 'Nester') {
      if (['belongsTo', 'hasOne'].includes(collectionField.type)) {
        field.value = {};
      } else if (['belongsToMany', 'hasMany'].includes(collectionField.type)) {
        field.value = [null];
      }
    }
    setLoading(false);
  }, [currentMode, collectionField, field.value]);

  if (loading) {
    return null;
  }

  const useCreateActionProps = () => {
    const { onClick } = useCAP();
    const actionField: any = useField();
    return {
      async onClick() {
        await onClick();
        const { data } = actionField.data?.data?.data || {};
        if (data) {
          if (['m2m', 'o2m'].includes(collectionField?.interface) && multiple !== false) {
            const values = JSON.parse(JSON.stringify(form.values[fieldSchema.name] || []));
            values.push({
              ...data,
            });
            setTimeout(() => {
              form.setValuesIn(field.props.name, values);
            }, 100);
          } else {
            const value = {
              ...data,
            };
            setTimeout(() => {
              form.setValuesIn(field.props.name, value);
            }, 100);
          }
        }
      },
    };
  };
  return (
    <SchemaComponentOptions scope={{ useCreateActionProps }} components={{ CreateRecordAction }}>
      {currentMode === 'Picker' && <InternalPicker {...props} />}
      {currentMode === 'Nester' && <InternalNester {...props} />}
      {currentMode === 'Select' && <AssociationSelect {...props} />}
      {currentMode === 'SubTable' && <InternalSubTable {...props} />}
      {currentMode === 'FileManager' && <InternalFileManager {...props} />}
    </SchemaComponentOptions>
  );
});

export const Editable = observer((props) => {
  return (
    <AssociationFieldProvider>
      <EditableAssociationField {...props} />
    </AssociationFieldProvider>
  );
});
