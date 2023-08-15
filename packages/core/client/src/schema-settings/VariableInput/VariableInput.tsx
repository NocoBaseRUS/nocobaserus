import { Form } from '@formily/core';
// @ts-ignore
import _ from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CollectionFieldOptions } from '../../collection-manager';
import { Variable, useVariableScope } from '../../schema-component';
import { VariableOption, VariablesContextType } from '../../variables/types';
import { isVariable } from '../../variables/utils/isVariable';
import { useContextAssociationFields } from './hooks/useContextAssociationFields';
import { compatOldVariables, useVariableOptions } from './hooks/useVariableOptions';
import { Option } from './type';
import { formatVariableScop } from './utils/formatVariableScop';

interface GetShouldChangeProps {
  collectionField: CollectionFieldOptions;
  variables: VariablesContextType;
  localVariables: VariableOption | VariableOption[];
}

interface RenderSchemaComponentProps {
  value: any;
  onChange: (value: any) => void;
}

type Props = {
  value: any;
  onChange: (value: any) => void;
  renderSchemaComponent: (props: RenderSchemaComponentProps) => any;
  schema?: any;
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  collectionField: CollectionFieldOptions;
  contextCollectionName?: string;
  /**
   * 根据 `onChange` 的第一个参数，判断是否需要触发 `onChange`
   * @param value `onChange` 的第一个参数
   * @returns 返回为 `true` 时，才会触发 `onChange`
   */
  shouldChange?: (value: any) => Promise<boolean>;
  /**
   * 当前所在的区块的 collectionName
   */
  blockCollectionName: string;
  form?: Form;
  /**
   * 当前表单的记录，数据来自数据库
   */
  record?: Record<string, any>;
  /**
   * 可以用该方法对内部的 scope 进行筛选和修改
   * @param scope
   * @returns
   */
  returnScope?: (scope: Option[]) => any[];
};

/**
 * 注意：该组件存在以下问题：
 * - 在选中选项的时候该组件不能触发重渲染
 * - 如果触发重渲染可能会导致无法展开子选项列表
 * @param props
 * @returns
 */
export const VariableInput = (props: Props) => {
  const {
    value,
    onChange,
    renderSchemaComponent: RenderSchemaComponent,
    style,
    schema,
    className,
    contextCollectionName,
    collectionField,
    shouldChange,
    blockCollectionName,
    form,
    record,
    returnScope = _.identity,
  } = props;
  const { t } = useTranslation();
  const scope = useVariableScope();

  const variableOptions = compatOldVariables(
    useVariableOptions({ collectionField, blockCollectionName, form, record }),
    {
      value,
      collectionName: blockCollectionName,
      t,
    },
  ).concat(formatVariableScop(scope));
  const contextVariable = useContextAssociationFields({ schema, maxDepth: 2, contextCollectionName, collectionField });

  useEffect(() => {
    if (contextCollectionName) {
      variableOptions.unshift(contextVariable);
    }
  }, []);

  const handleChange = useCallback(
    (value: any) => {
      if (!shouldChange) {
        return onChange(value);
      }

      // `shouldChange` 这个函数的运算量比较大，会导致展开变量列表时有明显的卡顿感，在这里加个延迟能有效解决这个问题
      setTimeout(async () => {
        if (await shouldChange(value)) {
          onChange(value);
        }
      });
    },
    [onChange, shouldChange],
  );

  return (
    <Variable.Input
      className={className}
      value={value}
      onChange={handleChange}
      scope={returnScope(variableOptions)}
      style={style}
      changeOnSelect
    >
      <RenderSchemaComponent value={value} onChange={onChange} />
    </Variable.Input>
  );
};

/**
 * 通过限制用户的选择，来防止用户选择错误的变量
 */
export const getShouldChange = ({ collectionField, variables, localVariables }: GetShouldChangeProps) => {
  return async (value: any) => {
    if (!isVariable(value) || !variables) {
      return true;
    }

    // 工作流中的 `触发器变量`
    if (value.includes('$context.')) {
      return true;
    }

    // 工作流中的 `系统变量`
    if (value.includes('$system.')) {
      return true;
    }

    // 工作流中的 `局部变量`
    if (value.includes('$scopes')) {
      return true;
    }

    // 工作流中的 `节点数据`
    if (value.includes('$jobsMapByNodeId')) {
      return true;
    }

    if (value.includes('$nDate.')) {
      return true;
    }

    const collectionFieldOfVariable = await variables.getCollectionField(value, localVariables);

    // 工作流人工节点的 `自定义表单` 区块，会有这种情况，通过其区块的数据表名称是获取不到字段信息的
    if (!collectionFieldOfVariable && value.includes('$nForm.')) {
      return true;
    }

    // 像 `{{ $use }}` 这种的变量字符串是没有对应的 `collectionField` 的
    if (!collectionFieldOfVariable || !collectionField) {
      return false;
    }

    // `一对一` 和 `一对多` 的不能用于设置默认值，因为其具有唯一性
    if (['o2o', 'o2m', 'oho'].includes(collectionFieldOfVariable.interface)) {
      return false;
    }
    if (!collectionField.target && collectionFieldOfVariable.target) {
      return false;
    }
    if (collectionField.target && !collectionFieldOfVariable.target) {
      return false;
    }
    if (
      collectionField.target &&
      collectionFieldOfVariable.target &&
      collectionField.target !== collectionFieldOfVariable.target
    ) {
      return false;
    }

    return true;
  };
};

export interface FormatVariableScopeParam {
  children: any[];
  disabled: boolean;
  name: string;
  title: string;
}

export interface FormatVariableScopeReturn {
  value: string;
  key: string;
  label: string;
  disabled: boolean;
  children?: any[];
}
