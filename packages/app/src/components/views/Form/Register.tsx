import React from 'react';
import { Tooltip, Card, Button, message } from 'antd';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  createFormActions,
  createAsyncFormActions,
  Submit,
  Reset,
  FormButtonGroup,
  registerFormFields,
  FormEffectHooks,
  FormValidator,
  setValidationLanguage,
} from '@formily/antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Link, history, request, useModel } from 'umi';

const { onFieldValueChange$ } = FormEffectHooks

const useLinkageValidateEffects = () => {
  const { setFieldState, getFieldState } = createFormActions()
  onFieldValueChange$('*(password,confirm)').subscribe(fieldState => {
    const selfName = fieldState.name
    const selfValue = fieldState.value
    const otherName = selfName == 'password' ? 'confirm' : 'password'
    const otherValue = getFieldState(otherName, state => state.value)
    setFieldState(otherName, state => {
      if (selfValue && otherValue && selfValue !== otherValue) {
        state.errors = ['两次密码输入不一致']
      } else {
        state.errors = []
      }
    })
    setFieldState(selfName, state => {
      if (selfValue && otherValue && selfValue !== otherValue) {
        state.errors = ['两次密码输入不一致']
      } else {
        state.errors = []
      }
    })
  })
}

export function Register(props: any) {
  const actions = createFormActions();

  return (
    <div className={'users-form'}>
      <h1>NocoBase</h1>
      <h2>注册</h2>
      <SchemaForm 
      effects={() => {
        useLinkageValidateEffects()
      }}
      onSubmit={async (values) => {
        console.log(values);
        const { data = {} } = await request('/users:register', {
          method: 'post',
          data: values,
        });
        await actions.reset({
          validate: false,
          forceClear: true,
        });
        message.success('注册成功，将跳转登录页');
        setTimeout(() => {
          history.push('/login');
        }, 1000);
      }} actions={actions} schema={{
        type: 'object',
        properties: {
          username: {
            type: 'string',
            title: '',
            required: true,
            'x-component-props': {
              size: 'large',
              placeholder: '用户名',
            }
          },
          nickname: {
            type: 'string',
            title: '',
            'x-component-props': {
              size: 'large',
              placeholder: '昵称',
            }
          },
          password: {
            type: 'password',
            title: '',
            required: true,
            'x-component-props': {
              size: 'large',
              style: {
                width: '100%',
              },
              placeholder: '密码',
            }
          },
          confirm: {
            type: 'password',
            title: '',
            required: true,
            'x-component-props': {
              size: 'large',
              style: {
                width: '100%',
              },
              placeholder: '确认密码',
            }
          },
        }
      }}>
        <FormButtonGroup>
          <Submit size={'large'}>注册</Submit>
          <Button size={'large'} onClick={() => {
            history.push('/login');
          }}>使用已有账号登录</Button>
        </FormButtonGroup>
      </SchemaForm>
    </div>
  );
}
