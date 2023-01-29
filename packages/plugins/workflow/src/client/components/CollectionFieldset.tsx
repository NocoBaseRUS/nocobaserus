import React from "react";
import { observer, useForm, useField } from "@formily/react";
import { Input, Button, Dropdown, Menu, Form } from "antd";
import { PlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { css } from "@emotion/css";

import { CollectionField, CollectionProvider, SchemaComponent, useCollectionManager, useCompile } from "@nocobase/client";
import { Operand, parseValue, VariableTypes } from "../variable";
import { lang, NAMESPACE } from "../locale";

function AssociationInput(props) {
  const { getCollectionFields } = useCollectionManager();
  const { path } = useField();
  const fieldName = path.segments[path.segments.length - 1] as string;
  const { values: data } = useForm();
  const fields = getCollectionFields(data?.config?.collection);
  const { type } = fields.find(item => item.name === fieldName);

  const value = Array.isArray(props.value) ? props.value.join(',') : props.value;
  function onChange(ev) {
    const trimed = ev.target.value.trim();
    props.onChange(['belongsTo', 'hasOne'].includes(type) ? trimed : trimed.split(/[,\s]+/));
  }
  return (
    <Input {...props} value={value} onChange={onChange} />
  );
}

// NOTE: observer for watching useProps
export default observer(({ value, onChange }: any) => {
  const { t } = useTranslation();
  const compile = useCompile();
  const { getCollection, getCollectionFields } = useCollectionManager();
  const { values: data } = useForm();
  const collectionName = data?.config?.collection;
  const fields = getCollectionFields(collectionName)
    .filter(field => (
      !field.hidden
      && (field.uiSchema ? !field.uiSchema['x-read-pretty'] : false)
      // && (!['linkTo', 'hasMany', 'hasOne', 'belongsToMany'].includes(field.type))
    ));

  const unassignedFields = fields.filter(field => !(field.name in value));

  return (
    <fieldset className={css`
      margin-top: .5em;

      > .ant-formily-item{
        flex-direction: column;

        > .ant-formily-item-label{
          line-height: 32px;
        }
      }
    `}>
      {fields.length
        ? (
          <CollectionProvider collection={getCollection(collectionName)}>
            {fields
              .filter(field => field.name in value)
              .map(field => {
                const VTypes = {
                  ...(['linkTo', 'hasMany', 'belongsToMany'].includes(field.type) ? {} : VariableTypes),
                  constant: {
                    title: `{{t("Constant", { ns: "${NAMESPACE}" })}}`,
                    value: 'constant',
                  }
                };

                const operand = parseValue(value[field.name], VTypes);
                // constant for associations to use Input, others to use CollectionField
                // dynamic values only support belongsTo/hasOne association, other association type should disable

                // TODO: try to use <ObjectField> to replace this map
                return (
                  <Form.Item key={field.name} label={compile(field.uiSchema?.title ?? field.name)} labelAlign="left" className={css`
                    .ant-form-item-control-input-content{
                      display: flex;
                    }
                  `}>
                    <Operand
                      scope={VTypes}
                      value={value[field.name]}
                      onChange={(next) => {
                        onChange({ ...value, [field.name]: next });
                      }}
                    >
                      {operand.type[0] === 'constant'
                        ? (
                          <SchemaComponent
                            schema={{
                              type: 'void',
                              properties: {
                                [field.name]: {
                                  'x-component': ['linkTo', 'belongsTo', 'hasOne', 'hasMany', 'belongsToMany'].includes(field.type)
                                    ? 'AssociationInput'
                                    : 'CollectionField'
                                }
                              }
                            }}
                            components={{
                              CollectionField,
                              AssociationInput
                            }}
                          />
                        )
                        // ? <SchemaComponent schema={{ ...field.uiSchema, name: field.name }} />
                        : null
                      }
                    </Operand>
                    <Button
                      type="link"
                      icon={<CloseCircleOutlined />}
                      onClick={() => {
                        const { [field.name]: _, ...rest } = value;
                        onChange(rest);
                      }}
                    />
                  </Form.Item>
                );
              })
            }
            {unassignedFields.length
              ? (
                <Dropdown overlay={
                  <Menu onClick={({ key }) => onChange({ ...value, [key]: null })} className={css`
                    max-height: 300px;
                    overflow-y: auto;
                  `}>
                    {unassignedFields.map(field => (
                      <Menu.Item key={field.name}>{compile(field.uiSchema?.title ?? field.name)}</Menu.Item>
                    ))}
                  </Menu>
                }>
                  <Button icon={<PlusOutlined />}>{t('Add field')}</Button>
                </Dropdown>
              )
              : null
            }
          </CollectionProvider>
        )
        : <p>{lang('Please select collection first')}</p>
      }
    </fieldset>
  );
});
