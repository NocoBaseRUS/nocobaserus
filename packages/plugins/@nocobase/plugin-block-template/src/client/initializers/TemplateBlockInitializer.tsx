/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import {
  SchemaInitializerItem,
  useRequest,
  useAPIClient,
  useDesignable,
  usePlugin,
  ISchema,
  useResource,
  registerInitializerMenusGenerator,
  useSchemaInitializer,
} from '@nocobase/client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { CopyOutlined, LoadingOutlined } from '@ant-design/icons';
import { Input, Divider, Empty, theme } from 'antd';
import * as _ from 'lodash';
import { uid } from '@nocobase/utils/client';
import PluginBlockTemplateClient from '..';
import { useT } from '../locale';
import PluginMobileClient from '@nocobase/plugin-mobile/client';
import { findBlockRootSchema } from '../utils/schema';
import { useFieldSchema } from '@formily/react';

export function convertTplBlock(
  tpl,
  virtual = false,
  isRoot = true,
  newRootId?: string,
  templateKey?: string,
  options?: any,
) {
  if (!newRootId) {
    newRootId = uid();
  }
  // 如果是Grid, Grid.Row, Grid.Col, 则复制一份
  if (tpl['x-component'] === 'Grid' || tpl['x-component'] === 'Grid.Row' || tpl['x-component'] === 'Grid.Col') {
    const newSchema = _.cloneDeep({
      ...tpl,
      'x-uid': uid(), // 生成一个新的uid
      properties: {},
    });
    if (virtual) {
      newSchema['x-virtual'] = true;
    }
    if (newSchema['x-decorator'] === 'TemplateGridDecorator') {
      delete newSchema['x-decorator'];
    }
    for (const key in tpl.properties) {
      const t = convertTplBlock(tpl.properties[key], virtual, isRoot, newRootId, templateKey, options);
      if (isRoot) {
        newRootId = uid(); // 多个区块支持，每个Grid.Row都要生成一个新的uid
      }
      if (t) {
        newSchema.properties[key] = t;
      }
    }
    return newSchema;
  } else {
    const newSchema = {
      // ...tpl,
      // 'x-component': rootComponent === tpl ? 'XTemplate' : tpl['x-component'],
      // 'x-decorator': tpl['x-decorator'],
      // type: rootComponent ? 'void' : tpl.type,
      // name: tpl.name,
      'x-uid': `${newRootId}-${tpl['x-uid']}`,
      'x-template-uid': tpl['x-uid'],
      properties: {},
    };
    if (virtual) {
      newSchema['x-virtual'] = true;
    }
    if (isRoot) {
      newSchema['x-template-root-uid'] = tpl['x-uid'];
      newSchema['x-uid'] = newRootId;
      newSchema['x-template-version'] = '1.0';
      blockKeepProps.forEach((prop) => {
        if (_.hasIn(tpl, prop)) {
          _.set(newSchema, prop, _.get(tpl, prop));
        }
      });
      // set decorator props here!!
      if (options) {
        schemaPatch(newSchema, options);
      }
    }
    if (templateKey) {
      newSchema['x-block-template-key'] = templateKey;
    }
    if (tpl['x-component'] === 'CustomRequestAction') {
      newSchema['x-custom-request-id'] = tpl['x-custom-request-id'] || tpl['x-uid'];
    }
    if (tpl['x-component'] === 'Action' && _.get(tpl, 'x-action-settings.schemaUid')) {
      newSchema['x-action-settings'] = {
        schemaUid: '',
      };
    }

    // filter should be in tpl
    if (_.get(tpl, 'x-filter-targets')) {
      newSchema['x-filter-targets'] = tpl['x-filter-targets'];
    }
    for (const key in tpl.properties) {
      newSchema.properties[key] = convertTplBlock(tpl.properties[key], virtual, false, newRootId, templateKey);
    }
    return newSchema;
  }
}

export const blockKeepProps = [
  'x-decorator',
  'x-decorator-props.collection',
  'x-decorator-props.association',
  'x-decorator-props.dataSource',
  'x-decorator-props.action',
  'x-decorator-props.params',
  'x-acl-action',
  'x-settings',
  'x-use-decorator-props',
];

function schemaPatch(currentSchema: ISchema, options?: any) {
  const { collectionName, dataSourceName, association, currentRecord } = options;

  const decoratorName = currentSchema['x-decorator'];
  if (decoratorName === 'DetailsBlockProvider') {
    currentSchema['x-decorator-props'] = {
      action: 'list',
      collection: collectionName,
      association: association,
      dataSource: dataSourceName,
      readPretty: true,
      params: {
        pageSize: 1,
      },
    };
    currentSchema['x-acl-action'] = currentSchema['x-acl-action'].replace(':get', ':view');
    currentSchema['x-settings'] = 'blockSettings:detailsWithPagination';
    currentSchema['x-use-decorator-props'] = 'useDetailsWithPaginationDecoratorProps';
  } else {
    currentSchema['x-decorator-props'] = {
      action: 'list',
      collection: collectionName,
      association: association,
      dataSource: dataSourceName,
    };
    if (currentSchema['x-use-decorator-props'] === 'useCreateFormBlockDecoratorProps') {
      currentSchema['x-decorator-props']['action'] = null;
    }
  }
  return currentSchema;
}

function getSchemaUidMaps(schema, idMap = {}) {
  if (schema['x-template-uid']) {
    idMap[schema['x-template-uid']] = schema['x-uid'];
  }
  if (schema.properties) {
    for (const key in schema.properties) {
      getSchemaUidMaps(schema.properties[key], idMap);
    }
  }
  return idMap;
}

function correctIdReference(schema, idMaps) {
  const skipReplaceKeys = ['x-uid', 'x-template-uid', 'x-template-root-uid', 'x-custom-request-id'];
  for (const key in schema) {
    if (!skipReplaceKeys.includes(key)) {
      if (schema[key] && typeof schema[key] === 'string') {
        schema[key] = idMaps[schema[key]] || schema[key];
      }
      if (schema[key] && typeof schema[key] === 'object') {
        correctIdReference(schema[key], idMaps);
      }
    }
  }
}

function correctIdReferences(schemas) {
  const idMaps = {};
  for (const schema of schemas) {
    _.merge(idMaps, getSchemaUidMaps(schema));
  }
  for (const schema of schemas) {
    correctIdReference(schema, idMaps);
  }
}

function convertTemplateToBlock(data, templateKey?: string, options?: any) {
  // debugger;
  let tpls = data?.properties; // Grid开始的区块
  tpls = _.get(Object.values(tpls), '0.properties'); // Grid.Row开始的区块
  const schemas = [];
  // 遍历 tpl的所有属性，每一个属性其实是一个区块
  for (const key in tpls) {
    const tpl = tpls[key];
    const schema = convertTplBlock(tpl, false, true, undefined, templateKey, options);
    if (schema) {
      schemas.push(schema);
    }
  }

  return schemas;
}

const SearchInput = ({ value: outValue, onChange }) => {
  const [value, setValue] = useState<string>(outValue);
  const inputRef = useRef<any>('');
  const compositionRef = useRef<boolean>(false);
  const t = useT();

  useEffect(() => {
    setValue(outValue);
  }, [outValue]);

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((v) => v.isIntersecting)) {
        focusInput();
      }
    });
    if (inputRef.current?.input) {
      observer.observe(inputRef.current.input);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!compositionRef.current) {
      onChange(e.target.value);
      setValue(e.target.value);
    }
  };

  const handleComposition = (e: React.CompositionEvent<HTMLInputElement> | any) => {
    if (e.type === 'compositionend') {
      compositionRef.current = false;
      handleChange(e);
    } else {
      compositionRef.current = true;
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Input
        ref={inputRef}
        allowClear
        style={{ padding: '4px 8px', boxShadow: 'none', borderRadius: 0 }}
        bordered={false}
        placeholder={t('Search and select template')}
        value={value}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={handleChange}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        onCompositionUpdate={handleComposition}
      />
      <Divider style={{ margin: 0 }} />
    </div>
  );
};

export const TemplateBlockInitializer = () => {
  const api = useAPIClient();
  const { insert } = useSchemaInitializer();
  const plugin = usePlugin(PluginBlockTemplateClient);
  const mobilePlugin = usePlugin(PluginMobileClient);
  const blockTemplatesResource = useResource('blockTemplates');
  const [searchValue, setSearchValue] = useState('');
  const t = useT();
  const { token } = theme.useToken();
  const isMobile = useMemo(() => {
    return window.location.pathname.startsWith(mobilePlugin.mobileBasename);
  }, [mobilePlugin]);
  const fieldSchema = useFieldSchema();

  const handleClick = async ({ item }, options?: any, insertAdjacent?: any) => {
    const { uid } = item;
    const { data } = await api.request({
      url: `uiSchemas:getProperties/${uid}`,
    });

    const template = data?.data;
    const schemas = convertTemplateToBlock(template, item.key, options);
    plugin.setTemplateCache(findBlockRootSchema(template['properties']?.['blocks']));
    correctIdReferences(schemas);
    for (const schema of schemas) {
      insertAdjacent ? insertAdjacent(schema) : insert(schema);
    }
    // server hook only support root node, so we do the link from client
    const links = [];
    const fillLink = (schema: ISchema) => {
      if (schema['x-template-root-uid']) {
        links.push({
          templateKey: item.key,
          templateBlockUid: schema['x-template-root-uid'],
          blockUid: schema['x-uid'],
        });
      }
      if (schema.properties) {
        for (const key in schema.properties) {
          fillLink(schema.properties[key]);
        }
      }
    };
    for (const schema of schemas) {
      fillLink(schema);
    }
    blockTemplatesResource.link({
      values: links,
    });
  };

  const { data, loading } = useRequest<{
    data: {
      key: string;
      title: string;
      description: string;
      uid: string;
      configured: boolean;
      componentType: string;
      collection: string;
      dataSource: string;
    }[];
  }>(
    {
      url: 'blockTemplates:list',
      method: 'get',
      params: {
        filter: {
          configured: true,
          type: isMobile ? 'Mobile' : { $ne: 'Mobile' },
        },
        paginate: false,
      },
    },
    {
      uid: 'blockTemplates',
    },
  );

  const filteredData = data?.data
    ?.filter((item) => !item.dataSource)
    .filter((item) => !searchValue || item.title.toLowerCase().includes(searchValue.toLowerCase()));

  const menuItems = [
    {
      key: 'search',
      label: (
        <SearchInput
          value={searchValue}
          onChange={(val: string) => {
            setSearchValue(val);
          }}
        />
      ),
      onClick: (e) => {
        e.domEvent.stopPropagation();
      },
    },
    ...(filteredData?.length
      ? filteredData.map((item) => ({
          label: item.title,
          ...item,
        }))
      : [
          {
            key: 'empty',
            style: {
              height: 150,
            },
            label: (
              <div onClick={(e) => e.stopPropagation()}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('No data')} />
              </div>
            ),
          },
        ]),
  ];

  useEffect(() => {
    data?.data?.forEach((item) => {
      plugin.templateInfos.set(item.key, item);
    });
  }, [data?.data, plugin.templateInfos]);

  useEffect(() => {
    const generator = ({ collection, item, index, field, componentName, dataSource, keyPrefix, name }) => {
      let collectionName = collection?.name || item?.options?.name;
      const dataSourceName = dataSource || item?.options?.dataSource || collection?.dataSource;
      if (field) {
        // association field
        collectionName = field?.target;
      }
      const isForm = name === 'createForm' || name === 'editForm';
      const children = data?.data
        ?.filter(
          (d) =>
            (d.componentType === componentName || name === d['menuName'] || (isForm && d['menuName'] === 'form')) &&
            d.collection === collectionName &&
            d.dataSource === dataSourceName,
        )
        .map((m) => {
          return {
            type: 'item',
            name: m.key,
            item: m,
            title: m.title,
            schemaInsertor: (insert, { item, fromOthersInPopup }) => {
              const options = { dataSourceName };
              if (field) {
                options['association'] = `${collection?.name}.${field.target}`;
              } else {
                options['collectionName'] = collectionName;
              }
              return handleClick(item, options, insert);
            },
          };
        });

      if (!children?.length) {
        return null;
      }
      return {
        key: `${keyPrefix}_${collectionName}_templates_subMenu_${index}`,
        type: 'subMenu',
        name: 'block_template',
        title: t('Block template'),
        children,
      };
    };
    registerInitializerMenusGenerator('block_template', generator);
  }, [data?.data]);

  if (loading) {
    return (
      <div>
        <LoadingOutlined /> {t('Templates')}
      </div>
    );
  }

  return (
    <SchemaInitializerItem
      closeInitializerMenuWhenClick={true}
      title={'{{t("Block template")}}'}
      icon={<CopyOutlined style={{ marginRight: 0 }} />}
      items={menuItems}
      name={'templates'}
      onClick={handleClick}
    />
  );
};
