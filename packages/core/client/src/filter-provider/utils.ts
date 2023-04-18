import { Schema, useFieldSchema } from '@formily/react';
import { isEmpty, isPlainObject } from '@nocobase/utils/client';
import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { mergeFilter } from '../block-provider';
import { FilterTarget, findFilterTargets } from '../block-provider/hooks';
import { Collection, FieldOptions, useCollection } from '../collection-manager';
import { removeNullCondition } from '../schema-component';
import { findFilterOperators } from '../schema-component/antd/form-item/SchemaSettingOptions';
import { useFilterBlock } from './FilterProvider';

export enum FilterBlockType {
  FORM,
  TABLE,
  TREE,
  COLLAPSE,
}

/**
 * 根据筛选区块类型筛选出支持的数据区块（同表或具有关系字段的表）
 * @param filterBlockType
 * @returns
 */
export const useSupportedBlocks = (filterBlockType: FilterBlockType) => {
  const { getDataBlocks } = useFilterBlock();
  const fieldSchema = useFieldSchema();
  const collection = useCollection();

  // Form 和 Collapse 仅支持同表的数据区块
  if (filterBlockType === FilterBlockType.FORM || filterBlockType === FilterBlockType.COLLAPSE) {
    return getDataBlocks().filter((block) => {
      return isSameCollection(block.collection, collection);
    });
  }

  // Table 和 Tree 支持同表或者关系表的数据区块
  if (filterBlockType === FilterBlockType.TABLE || filterBlockType === FilterBlockType.TREE) {
    return getDataBlocks().filter((block) => {
      return (
        fieldSchema['x-uid'] !== block.uid &&
        (isSameCollection(block.collection, collection) ||
          block.associatedFields.some((field) => field.target === collection.name))
      );
    });
  }
};

/**
 * Recursively flatten an object and generate a query object.
 * @param result - The resulting query object.
 * @param obj - The object to be flattened and queried.
 * @param key - The current key in the object tree.
 * @param operators - The operators to use for each field.
 * @returns The resulting query object.
 */
const flattenAndQueryObject = (result: Record<string, any>, obj: any, key: string, operators: Record<string, any>) => {
  if (!obj) return result;

  if (!isPlainObject(obj)) {
    result[key] = {
      [operators[key] || '$eq']: obj,
    };
  } else {
    Object.keys(obj).forEach((k) => {
      flattenAndQueryObject(result, obj[k], `${key}.${k}`, operators);
    });
  }

  return result;
};

export const transformToFilter = (values: Record<string, any>, fieldSchema: Schema) => {
  const { operators } = findFilterOperators(fieldSchema);

  return {
    $and: Object.keys(values)
      .map((key) => flattenAndQueryObject({}, values[key], key, operators))
      .filter((item) => !isEmpty(item)),
  };
};

export const useAssociatedFields = () => {
  const { fields } = useCollection();

  return fields.filter((field) => isAssocField(field)) || [];
};

export const isAssocField = (field?: FieldOptions) => {
  return ['o2o', 'oho', 'obo', 'm2o', 'createdBy', 'updatedBy', 'o2m', 'm2m', 'linkTo'].includes(field?.interface);
};

export const isSameCollection = (c1: Collection, c2: Collection) => {
  return c1.name === c2.name;
};

export const useFilterAPI = () => {
  const fieldSchema = useFieldSchema();
  const { getDataBlocks } = useFilterBlock();
  const { targets, uid } = findFilterTargets(fieldSchema);
  const dataBlocks = getDataBlocks();
  const [isConnected, setIsConnected] = useState(() => {
    return targets && targets.some((target) => dataBlocks.some((dataBlock) => dataBlock.uid === target.uid));
  });
  const targetsKeys = Object.keys(targets || {});

  useEffect(() => {
    setIsConnected(targets && targets.some((target) => dataBlocks.some((dataBlock) => dataBlock.uid === target.uid)));
  }, [targetsKeys.length, dataBlocks]);

  const doFilter = useCallback(
    (
      value,
      field: string | ((target: FilterTarget['targets'][0]) => string) = 'id',
      operator: string | ((target: FilterTarget['targets'][0]) => string) = '$eq',
    ) => {
      dataBlocks.forEach((block) => {
        const target = targets.find((target) => target.uid === block.uid);
        if (!target) return;

        if (_.isFunction(field)) {
          field = field(target);
        }
        if (_.isFunction(operator)) {
          operator = operator(target);
        }

        const param = block.service.params?.[0] || {};
        // 保留原有的 filter
        const storedFilter = block.service.params?.[1]?.filters || {};

        if (value !== undefined) {
          storedFilter[uid] = {
            $and: [
              {
                [field]: {
                  [operator]: value,
                },
              },
            ],
          };
        } else {
          delete storedFilter[uid];
        }

        const mergedFilter = mergeFilter([
          ...Object.values(storedFilter).map((filter) => removeNullCondition(filter)),
          block.defaultFilter,
        ]);

        block.doFilter(
          {
            ...param,
            page: 1,
            filter: mergedFilter,
          },
          { filters: storedFilter },
        );
      });
    },
    [dataBlocks],
  );

  return {
    /** 当前区块是否已连接其它区块 */
    isConnected,
    /** 调用该方法进行过滤 */
    doFilter,
  };
};
