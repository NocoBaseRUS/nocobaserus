import { Field } from '@formily/core';
import { connect, useField, useFieldSchema } from '@formily/react';
import { merge } from '@formily/shared';
import { concat } from 'lodash';
import React, { useEffect, useMemo } from 'react';
import { CollectionFieldProviderV3, useCollectionFieldV3 } from './CollectionFieldProvider';
import { useCompile, useComponent } from '../../../schema-component';
import { useFormBlockContext } from '../../../block-provider';
import useIsAllowToSetDefaultValue from '../../../schema-settings/hooks/useIsAllowToSetDefaultValue';

type Props = {
  component: any;
  children?: React.ReactNode;
};

// TODO: 初步适配
export const CollectionFieldInternalFieldV3: React.FC = (props: Props) => {
  const { component } = props;
  const compile = useCompile();
  const field = useField<Field>();
  const fieldSchema = useFieldSchema();
  const { uiSchema: uiSchemaOrigin, defaultValue } = useCollectionFieldV3();
  const { isAllowToSetDefaultValue } = useIsAllowToSetDefaultValue();
  const uiSchema = useMemo(() => compile(uiSchemaOrigin), [JSON.stringify(uiSchemaOrigin)]);
  const Component = useComponent(component || uiSchema?.['x-component'] || 'Input');
  const setFieldProps = (key, value) => {
    field[key] = typeof field[key] === 'undefined' ? value : field[key];
  };
  const setRequired = () => {
    if (typeof fieldSchema['required'] === 'undefined') {
      field.required = !!uiSchema['required'];
    }
  };
  const ctx = useFormBlockContext();

  useEffect(() => {
    if (ctx?.field) {
      ctx.field.added = ctx.field.added || new Set();
      ctx.field.added.add(fieldSchema.name);
    }
  });
  // TODO: 初步适配
  useEffect(() => {
    if (!uiSchema) {
      return;
    }
    setFieldProps('content', uiSchema['x-content']);
    setFieldProps('title', uiSchema.title);
    setFieldProps('description', uiSchema.description);
    if (ctx?.form) {
      const defaultVal = isAllowToSetDefaultValue() ? fieldSchema.default || defaultValue : undefined;
      defaultVal !== null && defaultVal !== undefined && setFieldProps('initialValue', defaultVal);
    }

    if (!field.validator && (uiSchema['x-validator'] || fieldSchema['x-validator'])) {
      const concatSchema = concat([], uiSchema['x-validator'] || [], fieldSchema['x-validator'] || []);
      field.validator = concatSchema;
    }
    if (fieldSchema['x-disabled'] === true) {
      field.disabled = true;
    }
    if (fieldSchema['x-read-pretty'] === true) {
      field.readPretty = true;
    }
    setRequired();
    // @ts-ignore
    field.dataSource = uiSchema.enum;
    const originalProps = compile(uiSchema['x-component-props']) || {};
    const componentProps = merge(originalProps, field.componentProps || {});
    field.component = [Component, componentProps];
  }, [JSON.stringify(uiSchema)]);
  if (!uiSchema) {
    return null;
  }
  return <Component {...props} />;
};

export const CollectionFieldV3 = connect((props) => {
  const fieldSchema = useFieldSchema();
  return (
    <CollectionFieldProviderV3 name={fieldSchema.name}>
      <CollectionFieldInternalFieldV3 {...props} />
    </CollectionFieldProviderV3>
  );
});

CollectionFieldV3.displayName = 'CollectionFieldV3';
