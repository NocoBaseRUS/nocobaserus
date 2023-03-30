import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useField, useFieldSchema } from '@formily/react';
import { css } from '@emotion/css';
import { SchemaSettings } from '../../../schema-settings';
import { useTranslation } from 'react-i18next';
import { useDesignable } from '../../hooks';
import { useRecord } from '../../../record-provider';

const FixedBlockContext = React.createContext<{
  setFixedBlock: (value: string | false) => void;
  height: number;
  fixedBlockUID: boolean | string;
  fixedBlockUIDRef: React.MutableRefObject<boolean | string>;
}>({
  setFixedBlock: () => {},
  height: 0,
  fixedBlockUID: false,
  fixedBlockUIDRef: { current: false },
});

export const useFixedSchema = () => {
  const field = useField();
  const fieldSchema = useFieldSchema();
  const { setFixedBlock, fixedBlockUID, fixedBlockUIDRef } = useFixedBlock();
  const hasSet = useRef(false);

  useEffect(() => {
    if (!fixedBlockUIDRef.current || hasSet.current) {
      setFixedBlock(field?.decoratorProps?.fixedBlock ? fieldSchema['x-uid'] : false);
      hasSet.current = true;
    }
  }, [field?.decoratorProps?.fixedBlock]);

  return fieldSchema['x-uid'] === fixedBlockUID;
};

export const useFixedBlock = () => {
  return useContext(FixedBlockContext);
};

export const FixedBlockWrapper: React.FC = (props) => {
  const fixedBlock = useFixedSchema();
  const { height, fixedBlockUID } = useFixedBlock();
  const record = useRecord();
  const isPopup = Object.keys(record).length;
  if (isPopup) {
    return <>{props.children}</>;
  }
  /**
   * The fixedBlockUID of false means that the page has no fixed blocks
   * isPopup means that the FixedBlock is in the popup mode
   */
  if (!fixedBlock && fixedBlockUID) return null;
  return (
    <div
      className="nb-fixed-block"
      style={{
        height: fixedBlockUID ? `calc(100vh - ${height}px)` : undefined,
      }}
    >
      {props.children}
    </div>
  );
};

export const FixedBlockDesignerItem = () => {
  const field = useField();
  const { t } = useTranslation();
  const fieldSchema = useFieldSchema();
  const { dn } = useDesignable();
  const record = useRecord();

  if (Object.keys(record).length) {
    return null;
  }
  return (
    <SchemaSettings.SwitchItem
      title={t('Fix block')}
      checked={fieldSchema['x-decorator-props']?.fixedBlock}
      onChange={async (fixedBlock) => {
        const decoratorProps = {
          ...fieldSchema['x-decorator-props'],
          fixedBlock,
        };
        await dn.emit('patch', {
          schema: {
            ['x-uid']: fieldSchema['x-uid'],
            'x-decorator-props': decoratorProps,
          },
        });
        field.decoratorProps = fieldSchema['x-decorator-props'] = decoratorProps;
      }}
    />
  );
};

interface FixedBlockProps {
  height: number;
}

const fixedBlockCss = css`
  overflow: hidden;
  position: relative;
  .noco-card-item {
    height: 100%;
    .ant-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      .ant-card-body {
        height: 1px;
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    }
  }
`;

const FixedBlock: React.FC<FixedBlockProps> = (props) => {
  const { height } = props;
  const [fixedBlockUID, _setFixedBlock] = useState<false | string>(false);
  const fixedBlockUIDRef = useRef(fixedBlockUID);
  const setFixedBlock = (v) => {
    fixedBlockUIDRef.current = v;
    _setFixedBlock(v);
  };
  return (
    <FixedBlockContext.Provider value={{ height, setFixedBlock, fixedBlockUID, fixedBlockUIDRef }}>
      <div
        className={fixedBlockUID ? fixedBlockCss : ''}
        style={{
          height: fixedBlockUID ? `calc(100vh - ${height}px)` : undefined,
        }}
      >
        {props.children}
      </div>
    </FixedBlockContext.Provider>
  );
};

export default FixedBlock;
