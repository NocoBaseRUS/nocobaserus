import { observer, RecursionField, useFieldSchema } from '@formily/react';
import { toArr } from '@formily/shared';
import { Typography } from 'antd';
import React, { Fragment, useRef, useState } from 'react';
import { BlockAssociationContext, WithoutTableFieldResource } from '../../../block-provider';
import { CollectionProvider, useCollection, useCollectionManager } from '../../../collection-manager';
import { RecordProvider, useRecord } from '../../../record-provider';
import { FormProvider } from '../../core';
import { useCompile } from '../../hooks';
import { ActionContext, useActionContext } from '../action';
import { EllipsisWithTooltip } from '../input/EllipsisWithTooltip';
import { useFieldNames } from './useFieldNames';
import { getLabelFormatValue, useLabelUiSchema } from './util';

interface IEllipsisWithTooltipRef {
  setPopoverVisible: (boolean) => void;
}

const toValue = (value, placeholder) => {
  if (value === null || value === undefined) {
    return placeholder;
  }
  return value;
};

export const ReadPrettyRecordPicker: React.FC = observer((props: any) => {
  const { ellipsis } = props;
  const fieldSchema = useFieldSchema();
  const recordCtx = useRecord();
  const { getCollectionJoinField } = useCollectionManager();
  // value 做了转换，但 props.value 和原来 useField().value 的值不一致
  // const field = useField<Field>();
  const fieldNames = useFieldNames(props);
  const [visible, setVisible] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState<boolean>();
  const { getField } = useCollection();
  const collectionField = getField(fieldSchema.name) || getCollectionJoinField(fieldSchema?.['x-collection-field']);
  const [record, setRecord] = useState({});
  const compile = useCompile();
  const labelUiSchema = useLabelUiSchema(collectionField, fieldNames?.label || 'label');
  const { snapshot } = useActionContext();
  const isTagsMode = fieldSchema['x-component-props']?.mode === 'tags';

  const ellipsisWithTooltipRef = useRef<IEllipsisWithTooltipRef>();
  const renderRecords = () =>
    toArr(props.value).map((record, index, arr) => {
      const val = toValue(compile(record?.[fieldNames?.label || 'label']), 'N/A');
      const text = getLabelFormatValue(labelUiSchema, val, true);
      return (
        <Fragment key={`${record.id}_${index}`}>
          <span>
            {snapshot ? (
              text
            ) : isTagsMode ? (
              <Typography.Text underline>{text}</Typography.Text>
            ) : (
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setVisible(true);
                  setRecord(record);
                  ellipsisWithTooltipRef?.current?.setPopoverVisible(false);
                }}
              >
                {text}
              </a>
            )}
          </span>
          {index < arr.length - 1 ? <span style={{ marginRight: 4, color: '#aaa' }}>,</span> : null}
        </Fragment>
      );
    });

  const renderWithoutTableFieldResourceProvider = () => (
    <WithoutTableFieldResource.Provider value={true}>
      <FormProvider>
        <RecursionField
          schema={fieldSchema}
          onlyRenderProperties
          filterProperties={(s) => {
            return s['x-component'] === 'RecordPicker.Viewer';
          }}
        />
      </FormProvider>
    </WithoutTableFieldResource.Provider>
  );

  const renderRecordProvider = () => {
    const collectionFieldNames = fieldSchema?.['x-collection-field']?.split('.');

    return collectionFieldNames && collectionFieldNames.length > 2 ? (
      <RecordProvider record={recordCtx[collectionFieldNames[1]]}>
        <RecordProvider record={record}>{renderWithoutTableFieldResourceProvider()}</RecordProvider>
      </RecordProvider>
    ) : (
      <RecordProvider record={record}>{renderWithoutTableFieldResourceProvider()}</RecordProvider>
    );
  };

  return collectionField ? (
    <div>
      <BlockAssociationContext.Provider value={`${collectionField.collectionName}.${collectionField.name}`}>
        <CollectionProvider name={collectionField.target ?? collectionField.targetCollection}>
          <EllipsisWithTooltip ellipsis={ellipsis} ref={ellipsisWithTooltipRef}>
            {renderRecords()}
          </EllipsisWithTooltip>
          <ActionContext.Provider
            value={{ visible, setVisible, openMode: 'drawer', snapshot: collectionField.interface === 'snapshot' }}
          >
            {renderRecordProvider()}
          </ActionContext.Provider>
        </CollectionProvider>
      </BlockAssociationContext.Provider>
    </div>
  ) : null;
});
