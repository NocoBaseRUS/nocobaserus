/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { useField } from '@formily/react';
import { ConfigProvider } from 'antd';
import { Popup } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import React, { useCallback, useMemo } from 'react';
import { usePopupContainer } from './FilterAction';
import { useInternalPopoverNesterUsedInMobileStyle } from './InternalPopoverNester.style';

const Container = (props) => {
  const { onOpenChange } = props;
  const { visiblePopup, popupContainerRef } = usePopupContainer(props.open);
  const { styles } = useInternalPopoverNesterUsedInMobileStyle();
  const field = useField();

  const title = field.title || '';

  const closePopup = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  const openPopup = useCallback(() => {
    onOpenChange(true);
  }, [onOpenChange]);

  const theme = useMemo(() => {
    return {
      token: {
        zIndexPopupBase: 2000,
      },
    };
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <div onClick={openPopup}>{props.children}</div>
      <Popup
        visible={visiblePopup}
        onClose={closePopup}
        onMaskClick={closePopup}
        getContainer={() => popupContainerRef.current as HTMLElement}
        bodyClassName={styles.body}
        showCloseButton
        closeOnSwipe
      >
        <div className={styles.header}>
          {/* used to make the title center */}
          <span className={styles.placeholder}>
            <CloseOutline />
          </span>
          <span>{title}</span>
          <span className={styles.closeIcon} onClick={closePopup}>
            <CloseOutline />
          </span>
        </div>
        {props.content}
        <div style={{ height: 50 }}></div>
      </Popup>
    </ConfigProvider>
  );
};

export const InternalPopoverNesterUsedInMobile: React.FC<{ OriginComponent: React.FC<any> }> = (props) => {
  const { OriginComponent } = props;

  return <OriginComponent {...props} Container={Container} />;
};
