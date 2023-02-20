import React from "react";
import { useForm } from '@formily/react';
import { Cascader, Input, Button, Tag, InputNumber, Select, DatePicker } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import { cx, css } from "@emotion/css";
import { useTranslation } from "react-i18next";
import moment from "moment";

import { useCompile } from "@nocobase/client";

import { lang, NAMESPACE } from "../locale";



const JT_VALUE_RE = /^\s*\{\{([\s\S]*)\}\}\s*$/;

export function parseValue(value: any): string | string[] {
  if (value == null) {
    return 'null';
  }
  const type = typeof value;
  if (type === 'string') {
    const matched = value.match(JT_VALUE_RE);
    if (matched) {
      return matched[1].split('.');
    }
    // const ts = Date.parse(value);
    // if (value.match(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d{0,3})Z$/) && !Number.isNaN(Date.parse(value))) {
    //   return {
    //     type: 'date',
    //   };
    // }
  }
  return type === 'object' && value instanceof Date ? 'date' : type;
}

const ConstantTypes = {
  string: {
    label: `{{t("String", { ns: "${NAMESPACE}" })}}`,
    value: 'string',
    component({ onChange, value }) {
      return (
        <Input
          value={value}
          onChange={ev => onChange(ev.target.value)}
        />
      );
    },
    default: ''
  },
  number: {
    label: '{{t("Number")}}',
    value: 'number',
    component({ onChange, value }) {
      return (
        <InputNumber
          value={value}
          onChange={onChange}
        />
      );
    },
    default: 0
  },
  boolean: {
    label: `{{t("Boolean", { ns: "${NAMESPACE}" })}}`,
    value: 'boolean',
    component({ onChange, value }) {
      const { t } = useTranslation();
      return (
        <Select
          value={value}
          onChange={onChange}
          placeholder={t('Select')}
          options={[
            { value: true, label: lang('True') },
            { value: false, label: lang('False') },
          ]}
        />
      );
    },
    default: false
  },
  date: {
    label: '日期',
    value: 'date',
    component({ onChange, value }) {
      return (
        <DatePicker
          value={moment(value)}
          onChange={(d) => d ? onChange(d.toDate()) : null}
          allowClear={false}
          showTime
        />
      );
    },
    default: (() => {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    })(),
  },
  null: {
    label: `{{t("Null", { ns: "${NAMESPACE}" })}}`,
    value: 'null',
    component() {
      return (
        <Input readOnly placeholder={lang('Null')} />
      );
    },
    default: null,
  },
};

type VariableOptions = {
  value: string;
  label?: string;
  children?: VariableOptions[];
}

export function VariableInput(props) {
  const { value = '', scope, onChange, children, button } = props;
  const parsed = parseValue(value);
  const isConstant = typeof parsed === 'string';
  const type = isConstant ? parsed : 'string';
  const variable = isConstant ? null : parsed;
  const ConstantComponent = ConstantTypes[type]?.component;
  const constantOptions = Object.values(ConstantTypes);
  const compile = useCompile();
  const options: VariableOptions[] = compile([
    { value: '', label: lang('Constant'), children: children ? null : constantOptions },
    ...(typeof scope === 'function' ? scope() : (scope ?? []))
  ]);
  const form = useForm();

  function onSwitch(next) {
    if (next[0] === '') {
      if (next[1]) {
        if (next[1] !== type) {
          onChange(ConstantTypes[next[1]]?.default ?? null);
        }
      } else {
        if (variable) {
          onChange(null);
        }
      }
      return;
    }
    onChange(`{{${next.join('.')}}}`);
  }

  const variableText = variable?.reduce((opts, key, i) => {
    const option = (i ? (opts[i - 1] as VariableOptions).children : options)?.find(item => item.value === key);
    return option ? opts.concat(option) : opts;
  }, [] as VariableOptions[]).map(item => item.label).join(' / ');

  const disabled = props.disabled || form.disabled;

  return (
    <Input.Group compact className={css`
      width: auto;
      .ant-input-disabled{
        .ant-tag{
          color: #bfbfbf;
          border-color: #d9d9d9;
        }
      }
    `}
    >
      {variable
        ? (
          <div className={css`
            position: relative;
            line-height: 0;

            &:hover{
              .ant-select-clear{
                opacity: .8;
              }
            }

            .ant-input{
              overflow: auto;
              white-space: nowrap;
              ${disabled ? '' : 'padding-right: 28px;'}

              .ant-tag{
                display: inline;
                line-height: 19px;
                margin: 0;
                padding: 2px 7px;
                border-radius: 10px;
              }
            }
          `}>
            <div
              onInput={e => e.preventDefault()}
              onKeyDown={(e) => {
                if (e.key !== 'Backspace') {
                  e.preventDefault();
                  return;
                }
                onChange(null);
              }}
              className={cx('ant-input', { 'ant-input-disabled': disabled })}
              contentEditable={!disabled}
            >
              <Tag contentEditable={false} color="blue">{variableText}</Tag>
            </div>
            {!disabled
              ? (
                <span
                  className={cx('ant-select-clear', css`
                    user-select: 'none'
                  `)}
                  unselectable="on"
                  aria-hidden
                  onClick={() => onChange(null)}
                >
                  <CloseCircleFilled />
                </span>
              )
              : null}
          </div>
        )
        : (
          children ?? <ConstantComponent value={value} onChange={onChange} />
        )
      }
      {options.length > 1
        ? (
          <Cascader
            value={variable ?? ['', ...(children ? [] : [type])]}
            options={options}
            onChange={onSwitch}
          >
            {button ?? (
              <Button
                type={variable ? 'primary' : 'default'}
                className={css`
                  font-style: italic;
                  font-family: "New York", "Times New Roman", Times, serif;
                `}
              >
                x
              </Button>
            )}
          </Cascader>
        )
        : null
      }
    </Input.Group>
  );
}
