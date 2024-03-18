import { useFieldSchema } from '@formily/react';
import { useCallback } from 'react';
import { useBlockContext } from '../../../../block-provider/BlockProvider';
import { useRecord, useRecordIndex } from '../../../../record-provider';
import { useCompile } from '../../../hooks';
import { useCollection } from '../../../../data-source';

/**
 * label = 'action' + x-component + actionTitle + [x-action] + [collectionName] + [blockName] + [record.name || record.title || recordIndex] + [postfix]
 * @param title
 * @returns
 */
export const useGetAriaLabelOfAction = (title: string) => {
  const record = useRecord();
  const recordIndex = useRecordIndex();
  const fieldSchema = useFieldSchema();
  const compile = useCompile();
  const component = fieldSchema['x-component'];
  let recordName = record?.name || record?.title || (recordIndex != null ? String(recordIndex) : '');
  let action = fieldSchema['x-action'];
  const collection = useCollection();
  let { name: blockName } = useBlockContext() || {};
  const actionTitle = title || compile(fieldSchema.title);
  let collectionName = collection?.name;
  collectionName = collectionName ? `-${collectionName}` : '';
  blockName = blockName ? `-${blockName}` : '';
  action = action ? `-${action}` : '';
  recordName = recordName ? `-${recordName}` : '';

  const getAriaLabel = useCallback(
    (postfix?: string) => {
      postfix = postfix ? `-${postfix}` : '';
      return `action-${component}-${actionTitle}${action}${collectionName}${blockName}${recordName}${postfix}`;
    },
    [action, actionTitle, blockName, collectionName, component, recordName],
  );

  return {
    getAriaLabel,
  };
};
