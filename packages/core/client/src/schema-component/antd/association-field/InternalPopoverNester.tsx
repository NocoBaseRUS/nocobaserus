import { Popover } from 'antd';
import { css } from '@emotion/css';
import { EditOutlined } from '@ant-design/icons';
import { observer } from '@formily/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReadPrettyInternalViewer } from './InternalViewer';
import { InternalNester } from './InternalNester';
import { useAssociationFieldContext } from './hooks';

export const InternaPopoverNester = observer(
  (props) => {
    const { options } = useAssociationFieldContext();
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    const content = (
      <div
        style={{ minWidth: '600px', maxWidth: '800px', maxHeight: '440px', overflow: 'auto' }}
        className={css`
          min-width: 600px;
          max-height: 440px;
          overflow: auto;
          .ant-card {
            border: 0px;
          }
        `}
      >
        <InternalNester {...props} />
      </div>
    );
    const titleProps = {
      ...props,
      enableLink: true,
    };

    return (
      <>
        <Popover
          overlayStyle={{ padding: '0px' }}
          content={content}
          trigger="click"
          placement="topLeft"
          open={visible}
          onOpenChange={(open) => setVisible(open)}
          title={t(options?.uiSchema?.rawTitle)}
        >
          <span style={{ cursor: 'pointer', display: 'flex' }}>
            <div
              className={css`
                max-width: 95%;
              `}
            >
              <ReadPrettyInternalViewer {...titleProps} />
            </div>
            <EditOutlined style={{ display: 'inline-flex', marginLeft: '5px' }} />
          </span>
        </Popover>
        {visible && (
          <div
            onClick={() => setVisible(false)}
            className={css`
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: transparent;
              z-index: 9999;
            `}
          />
        )}
      </>
    );
  },
  { displayName: 'InternaPopoverNester' },
);
