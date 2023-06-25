import { useMemo } from 'react';
import { useValues } from '../../../schema-component/antd/filter/useValues';
import { useDateVariable } from './useDateVariable';
import { useUserVariable } from './useUserVariable';
import { useFormVariable } from './useFormVariable';
import { useIterationVariable } from './useIterationVariable';

export const useVariableOptions = ({ form, collectionField, rootCollection }) => {
  const { operator, schema } = useValues();
  const userVariable = useUserVariable({ maxDepth: 3, schema });
  const dateVariable = useDateVariable({ operator, schema });
  const formVariabele = useFormVariable({ blockForm: form, rootCollection, schema });
  const iterationVariabele = useIterationVariable({ blockForm: form, collectionField, schema, rootCollection });

  const result = useMemo(
    () => [userVariable, dateVariable, formVariabele, iterationVariabele].filter(Boolean),
    [dateVariable, userVariable, formVariabele, iterationVariabele],
  );

  if (!operator || !schema) return [];

  return result;
};
