import { css } from '@emotion/css';
import { observer, useFieldSchema } from '@formily/react';
import React, { useEffect, useMemo } from 'react';
import { useCompile } from '../../schema-component';
import { Variable } from '.././../schema-component';
import { useFormVariable } from '../VariableInput/hooks/useFormVariable';
import { useIterationVariable } from '../VariableInput/hooks/useIterationVariable';

export const ChildDynamicComponent = observer(
  (props: { rootCollection: string; form: any; onChange; value; default; collectionField }) => {
    const { form, rootCollection, onChange, value, collectionField } = props;
    const fieldSchema = useFieldSchema();
    const formVariabele = useFormVariable({ blockForm: form, rootCollection });
    const iterationVariabele = useIterationVariable({
      blockForm: form,
      currentCollection: collectionField.collectionName,
      rootCollection,
    });

    const compile = useCompile();
    const result = useMemo(() => [formVariabele, iterationVariabele].filter(Boolean), [formVariabele]);
    const scope = compile(result);
    useEffect(() => {
      onChange(fieldSchema.default);
    }, []);
    return (
      <Variable.Input
        value={value}
        onChange={(v) => onChange(v)}
        scope={scope}
        style={{ minWidth: '400px', marginRight: 15 }}
        className={css`
          .ant-input {
            width: 100% !important;
          }
        `}
      />
    );
  },
  { displayName: 'ChildDynamicComponent' },
);
