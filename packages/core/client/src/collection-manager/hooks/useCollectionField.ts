import { useAPIClient } from '../../api-client';
import { useCollectionFieldV2 } from '../../application/data-source/collection-field/CollectionFieldProvider';
import { useRecord } from '../../record-provider';
import { useCompile } from '../../schema-component';
import { useCollection } from './useCollection';

export const useCollectionField = () => {
  const collection = useCollection();
  const record = useRecord();
  const api = useAPIClient();
  const compile = useCompile();
  const ctx = useCollectionFieldV2();
  if (!ctx) {
    return {} as any;
  }
  const resourceName = `${ctx?.collectionName || collection?.name}.${ctx.name}`;
  const resource = api?.resource(resourceName, record[ctx.sourceKey]);
  return {
    ...ctx,
    uiSchema: compile(ctx.uiSchema),
    resource,
  };
};
