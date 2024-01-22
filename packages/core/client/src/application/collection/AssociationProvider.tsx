import React, { FC, ReactNode } from 'react';

import { CollectionProviderV2 } from './CollectionProvider';
import { CollectionFieldProviderV2 } from './CollectionFieldProvider';
import { useCollectionManagerV2 } from './CollectionManagerProvider';
import { DeletedPlaceholder } from './DeletedPlaceholder';

export interface AssociationProviderProps {
  dataSource?: string;
  name: string;
  children?: ReactNode;
}

export const AssociationProviderV2: FC<AssociationProviderProps> = (props) => {
  const { name, dataSource, children } = props;

  const collectionManager = useCollectionManagerV2();
  const collectionName = collectionManager.getCollectionName(name, { dataSource });

  if (!collectionName) return <DeletedPlaceholder type="Collection" name={collectionName} />;

  return (
    <CollectionProviderV2 name={name.split('.')[0]} dataSource={dataSource}>
      <CollectionFieldProviderV2 name={name}>
        <CollectionProviderV2 name={collectionName} dataSource={dataSource}>
          {children}
        </CollectionProviderV2>
      </CollectionFieldProviderV2>
    </CollectionProviderV2>
  );
};
