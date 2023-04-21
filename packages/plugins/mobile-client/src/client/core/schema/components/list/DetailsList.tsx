import {
  FormV2,
  RecordPicker,
  RecordProvider,
  SchemaComponent,
  Sortable,
  SortableItem,
  useCollection,
  useDesigner,
  useProps,
} from '@nocobase/client';
import { ListDesigner } from './DetailsList.Designer';
import { DetailsListBlockProvider, useDetailsListBlockContext } from './DetailsList.Decorator';
import React, { RefCallback, useCallback, useContext, useRef } from 'react';
import { useField, useFieldSchema } from '@formily/react';
import { css, cx } from '@emotion/css';
import { ArrayField } from '@nocobase/database';
import { useInfiniteScroll } from 'ahooks';
import { Divider, Spin } from 'antd';
import { useTranslation } from '../../../../locale';

const designerCss = css`
  position: relative;
  width: 100%;
  &:hover {
    > .general-schema-designer {
      display: block;
    }
  }
  &.nb-action-link {
    > .general-schema-designer {
      top: -10px;
      bottom: -10px;
      left: -10px;
      right: -10px;
    }
  }
  > .general-schema-designer {
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    border: 0;
    pointer-events: none;
    > .general-schema-designer-icons {
      position: absolute;
      right: 2px;
      top: 2px;
      line-height: 16px;
      pointer-events: all;
      .ant-space-item {
        background-color: #f18b62;
        color: #fff;
        line-height: 16px;
        width: 16px;
        padding-left: 1px;
      }
    }
  }
`;

const InternalList = (props) => {
  const {} = useProps(props);
  const { service } = useDetailsListBlockContext();
  const fieldSchema = useFieldSchema();
  const field = useField();
  const Designer = useDesigner();
  const { getPrimaryKey } = useCollection();
  const { t } = useTranslation();

  const contentRef = useRef<HTMLDivElement>(null);

  const { data, loading, loadingMore, noMore } = useInfiniteScroll(
    async (d) => {
      const data = await service.runAsync({
        ...service?.params?.[0],
        page: d ? d.meta.page + 1 : 1,
      });
      return {
        list: data?.data,
        meta: data?.meta,
      };
    },
    {
      threshold: 200,
      target: window.document.querySelector('#nb-mobile-scroll-wrapper'),
      isNoMore: (d) => {
        const total = d?.meta?.total;
        const pageSize = d?.meta?.pageSize;
        const curSize = d?.list?.length;
        return curSize !== pageSize || curSize === total;
      },
      reloadDeps: [field.decoratorProps?.params],
    },
  );

  if (loading) {
    return <Spin />;
  }

  let endedMessage = 'More data coming soon';
  if (loadingMore) {
    endedMessage = t('loading more ~~~');
  } else if (noMore) {
    endedMessage = t('It is all, nothing more 🤐');
  }
  return (
    <SortableItem className={cx('nb-mobile-list', designerCss)}>
      <div
        ref={contentRef}
        className={cx(
          'nb-mobile-list-content',
          css`
            display: flex;
            flex-direction: column;
            gap-y: var(--nb-spacing);
            padding: 0 var(--nb-spacing);
            width: 100%;
            // max-height: 100vh;
            overflow-y: auto;
          `,
        )}
      >
        {data?.list?.map((item) => {
          return (
            <RecordProvider key={item[getPrimaryKey()]} record={item}>
              <SchemaComponent schema={fieldSchema}></SchemaComponent>
            </RecordProvider>
          );
        })}
        <Divider plain>{endedMessage}</Divider>
      </div>
      <Designer />
    </SortableItem>
  );
};

export const DetailsList = InternalList as typeof InternalList & {
  Item: typeof FormV2;
  Designer: typeof ListDesigner;
  Decorator: typeof DetailsListBlockProvider;
};

DetailsList.Item = FormV2;
DetailsList.Designer = ListDesigner;
DetailsList.Decorator = DetailsListBlockProvider;
