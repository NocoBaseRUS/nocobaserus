import React, { useMemo } from 'react';
import { CollectionFieldOptions } from '../../collection-manager';
import { useCompile, Variable } from '../../schema-component';
import { useUserVariable } from './hooks/useUserVariable';

type Props = {
  value: any;
  onChange: (value: any) => void;
  collectionName: string;
  renderSchemaComponent?: (props: any) => any;
  schema: any;
  operator: any;
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  collectionField?: CollectionFieldOptions;
};

export const VariableInput = (props: Props) => {
  const {
    value,
    onChange,
    renderSchemaComponent: RenderSchemaComponent,
    style,
    schema,
    className,
    collectionField,
  } = props;
  const compile = useCompile();
  const userVariable = useUserVariable({ schema, maxDepth: 1 });
  const scope = useMemo(() => {
    const data = [
      compile({
        label: `{{t("Date variables")}}`,
        value: '$date',
        key: '$date',
        disabled: schema['x-component'] !== 'DatePicker',
        children: [
          {
            key: 'now',
            value: 'now',
            label: `{{t("Now")}}`,
          },
        ],
      }),
    ];
    if (collectionField?.target === 'users') {
      data.unshift(userVariable);
    }
    return data;
  }, []);

  return (
    <Variable.Input className={className} value={value} onChange={onChange} scope={scope} style={style}>
      <RenderSchemaComponent value={value} onChange={onChange} />
    </Variable.Input>
  );
};
