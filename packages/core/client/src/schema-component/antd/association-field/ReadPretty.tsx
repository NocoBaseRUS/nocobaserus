import React, { useEffect, useState } from 'react';
import { useField, observer } from '@formily/react';
import { AssociationFieldProvider } from './AssociationFieldProvider';
import { InternalNester } from './InternalNester';
import { ReadPrettyInternalViewer } from './InternalViewer';
import { useCollection, useCollectionManager } from '../../../collection-manager';
import { InternalSubTable } from './InternalSubTable';
import { FileManageReadPretty } from './FileManager';

export const ReadPretty = observer((props: any) => {
  const field: any = useField();
  const { getField } = useCollection();
  const { getCollection } = useCollectionManager();
  const collectionField = getField(field.props.name);
  const isFileCollection = getCollection(collectionField?.target)?.template === 'file';
  const [currentMode, setCurrentMode] = useState(props.mode || (isFileCollection ? 'FileManager' : 'Select'));
  useEffect(() => {
    props.mode && setCurrentMode(props.mode);
  }, [props.mode]);
  return (
    <AssociationFieldProvider>
      {['Select', 'Picker'].includes(currentMode) && <ReadPrettyInternalViewer {...props} />}
      {currentMode === 'Nester' && <InternalNester {...props} />}
      {currentMode === 'SubTable' && <InternalSubTable {...props} />}
      {currentMode === 'FileManager' && <FileManageReadPretty {...props} />}
    </AssociationFieldProvider>
  );
});
