import cls from 'classnames';
import React, { MouseEvent, ChangeEvent, useContext, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Button, Col, Collapse, Input, Row, Tree } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useCollectionField } from '../../../collection-manager';
import { useFieldSchema } from '@formily/react';
import { useResource } from '../../../api-client';
import { useCompile, useDesigner } from '../../hooks';
import { AssociationFieldsFilterInnerItemDesigner } from './AssociationFieldsFilterInnerItem.Designer';
import { SortableItem } from '../../common';
import { concatFilter, SharedFilterContext } from '../../../block-provider/SharedFilterProvider';
import { useBlockRequestContext } from '../../../block-provider';
import { removeNullCondition } from './useFilterActionProps';

const { Panel } = Collapse;

export const AssociationFieldsFilterInnerItem = (props) => {
  const collectionField = useCollectionField();
  const fieldSchema = useFieldSchema();
  const Designer = useDesigner();
  const compile = useCompile();
  const { service, props: blockProps } = useBlockRequestContext();
  const [list, setList] = useState([]);
  const { filter, setAssociateFilter } = useContext(SharedFilterContext);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const targetCollectionName = fieldSchema['x-component-props'].target;

  const resource = useResource(targetCollectionName);

  const labelKey = fieldSchema['x-designer-props'].fieldNames.label;
  const valueKey = 'id';

  const treeData = list
    .map((i) => ({
      title: compile(i[labelKey]),
      key: i[valueKey],
    }))
    .filter((i) => i.title.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {
    resource.list().then((res) => {
      setList(res.data.data);
    });
  }, []);

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue: React.Key[]) => {
    setCheckedKeys(checkedKeysValue);

    const orList = treeData
      .filter((item) => checkedKeysValue.includes(item.key))
      .map((item) => ({
        [collectionField.name]: {
          [valueKey]: {
            $eq: item.key,
          },
        },
      }));

    const newAssociateFilter =
      orList.length > 0
        ? {
            $and: {
              $or: orList,
            },
          }
        : {};

    setAssociateFilter(newAssociateFilter);

    const paramFilter = concatFilter(removeNullCondition(filter), removeNullCondition(newAssociateFilter));

    service.run({ ...service.params?.[0], page: 1, filter: paramFilter });
  };

  const handleSearchToggle = (e: MouseEvent) => {
    setSearchVisible(!searchVisible);
    if (searchValue) setSearchValue('');
    e.stopPropagation();
  };

  const handleSearchClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleSearchInput = (e: ChangeEvent) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };

  return (
    <SortableItem
      className={cls(
        'nb-block-item',
        props.className,
        css`
          position: relative;
          &:hover {
            > .general-schema-designer {
              display: block;
            }
          }
          &.nb-form-item:hover {
            > .general-schema-designer {
              background: rgba(241, 139, 98, 0.06) !important;
              border: 0 !important;
              top: -5px !important;
              bottom: -5px !important;
              left: -5px !important;
              right: -5px !important;
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
            border: 2px solid rgba(241, 139, 98, 0.3);
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
        `,
      )}
    >
      <Designer />
      <Collapse defaultActiveKey={[collectionField.uiSchemaUid]} ghost>
        <Panel
          className={css`
            & .ant-collapse-content-box {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
            & .ant-collapse-header {
              padding: 10px !important;
            }
          `}
          header={
            <Row
              className={css`
                align-items: center;
                width: 100%;
                flex-wrap: nowrap;
              `}
              gutter={5}
            >
              <Col
                className={css`
                  flex: 1 1 auto;
                `}
              >
                {searchVisible ? (
                  <Input size="small" onClick={handleSearchClick} onChange={handleSearchInput} />
                ) : (
                  compile(collectionField.uiSchema.title)
                )}
              </Col>
              <Col
                className={css`
                  flex: 0 0 auto;
                `}
              >
                <Button
                  size="small"
                  type="text"
                  shape="circle"
                  icon={searchVisible ? <CloseOutlined /> : <SearchOutlined />}
                  onClick={handleSearchToggle}
                />
              </Col>
            </Row>
          }
          key={collectionField.uiSchemaUid}
        >
          <Tree
            style={{ padding: 0 }}
            checkable
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            treeData={treeData}
            selectedKeys={[]}
          />
        </Panel>
      </Collapse>
    </SortableItem>
  );
};

AssociationFieldsFilterInnerItem.Designer = AssociationFieldsFilterInnerItemDesigner;
