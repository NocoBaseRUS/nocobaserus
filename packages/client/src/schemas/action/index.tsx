import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  useForm,
  FormProvider,
  createSchemaField,
  observer,
  useFieldSchema,
  RecursionField,
  SchemaOptionsContext,
  Schema,
  useField,
  SchemaExpressionScopeContext,
} from '@formily/react';
import {
  Button,
  Dropdown,
  Menu,
  Popover,
  Space,
  Drawer,
  Modal,
  Select,
} from 'antd';
import { Link, useHistory, LinkProps, Switch } from 'react-router-dom';
import {
  useDesignable,
  useDefaultAction,
  updateSchema,
  removeSchema,
} from '..';
import './style.less';
import { uid } from '@formily/shared';
import cls from 'classnames';
import { MenuOutlined } from '@ant-design/icons';
import { FormDialog, FormLayout } from '@formily/antd';
import IconPicker from '../../components/icon-picker';
import {
  findPropertyByPath,
  getSchemaPath,
  SchemaField,
  useSchemaComponent,
} from '../../components/schema-renderer';
import { VisibleContext } from '../../context';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import { ActionBar } from './ActionBar';
import { DragHandle } from '../../components/Sortable';
import { useDisplayedMapContext } from '../../constate';

export const ButtonComponentContext = createContext(null);

export const Action: any = observer((props: any) => {
  const { useAction = useDefaultAction, icon, ...others } = props;
  const { run } = useAction();
  const field = useField();
  const { schema, DesignableBar } = useDesignable();
  const [visible, setVisible] = useState(false);
  const child = Object.values(schema.properties || {}).shift();
  const isDropdownOrPopover =
    child &&
    ['Action.Dropdown', 'Action.Popover'].includes(child['x-component']);
  const button = (
    <Button
      {...others}
      icon={<IconPicker type={icon} />}
      onClick={async () => {
        setVisible(true);
        await run();
      }}
    >
      {schema.title}
      <DesignableBar path={getSchemaPath(schema)} />
    </Button>
  );
  return (
    <ButtonComponentContext.Provider value={button}>
      <VisibleContext.Provider value={[visible, setVisible]}>
        {!isDropdownOrPopover && button}
        <RecursionField schema={schema} onlyRenderProperties />
      </VisibleContext.Provider>
    </ButtonComponentContext.Provider>
  );
});

Action.Link = observer((props: any) => {
  const { schema } = useDesignable();
  return <Link {...props}>{schema.title}</Link>;
});

Action.URL = observer((props: any) => {
  const { schema } = useDesignable();
  return (
    <a target={'_blank'} {...props}>
      {schema.title}
    </a>
  );
});

Action.Modal = observer((props: any) => {
  const {
    useOkAction = useDefaultAction,
    useCancelAction = useDefaultAction,
    ...others
  } = props;
  const { schema } = useDesignable();
  const [visible, setVisible] = useContext(VisibleContext);
  const form = useForm();
  const { run: runOk } = useOkAction();
  const { run: runCancel } = useCancelAction();
  const isFormDecorator = schema['x-decorator'] === 'Form';
  const field = useField();
  console.log('Action.Modal.field', schema['x-read-pretty']);
  return (
    <Modal
      title={schema.title}
      destroyOnClose
      maskClosable
      footer={
        isFormDecorator && !schema['x-read-pretty']
          ? [
              <Button
                onClick={async () => {
                  if (isFormDecorator) {
                    form.clearErrors();
                  }
                  runCancel && (await runCancel());
                  setVisible(false);
                }}
              >
                Cancel
              </Button>,
              <Button
                type={'primary'}
                onClick={async () => {
                  if (isFormDecorator) {
                    await form.submit();
                  }
                  runOk && (await runOk());
                  setVisible(false);
                }}
              >
                OK
              </Button>,
            ]
          : null
      }
      {...others}
      onCancel={async () => {
        if (isFormDecorator) {
          form.clearErrors();
        }
        runCancel && (await runCancel());
        setVisible(false);
      }}
      visible={visible}
    >
      <FormLayout layout={'vertical'}>{props.children}</FormLayout>
    </Modal>
  );
});

Action.Drawer = observer((props: any) => {
  const {
    useOkAction = useDefaultAction,
    useCancelAction = useDefaultAction,
    ...others
  } = props;
  const { schema } = useDesignable();
  const [visible, setVisible] = useContext(VisibleContext);
  const form = useForm();
  const { run: runOk } = useOkAction();
  const { run: runCancel } = useCancelAction();
  const isFormDecorator = schema['x-decorator'] === 'Form';
  console.log('Action.Modal.field', schema['x-read-pretty']);
  return (
    <Drawer
      width={'50%'}
      title={schema.title}
      maskClosable
      destroyOnClose
      footer={
        isFormDecorator &&
        !schema['x-read-pretty'] && (
          <Space style={{ float: 'right' }}>
            <Button
              onClick={async (e) => {
                form.clearErrors();
                props.onClose && (await props.onClose(e));
                runCancel && (await runCancel());
                setVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={async (e) => {
                await form.submit();
                props.onOk && (await props.onOk(e));
                runOk && (await runOk());
                setVisible(false);
              }}
              type={'primary'}
            >
              OK
            </Button>
          </Space>
        )
      }
      {...others}
      visible={visible}
      onClose={async (e) => {
        props.onClose && (await props.onClose(e));
        runCancel && (await runCancel());
        setVisible(false);
      }}
    >
      <FormLayout layout={'vertical'}>{props.children}</FormLayout>
    </Drawer>
  );
});

Action.Dropdown = observer((props: any) => {
  const button = useContext(ButtonComponentContext);
  const { root, schema, insertAfter, remove } = useDesignable();
  const moveToAfter = (path1, path2) => {
    if (!path1 || !path2) {
      return;
    }
    if (path1.join('.') === path2.join('.')) {
      return;
    }
    const data = findPropertyByPath(root, path1);
    if (!data) {
      return;
    }
    remove(path1);
    return insertAfter(data.toJSON(), path2);
  };
  const [dragOverlayContent, setDragOverlayContent] = useState('');
  return (
    <DndContext
      onDragStart={(event) => {
        console.log({ event });
        setDragOverlayContent(event.active.data?.current?.title || '');
      }}
      onDragEnd={async (event) => {
        const path1 = event.active?.data?.current?.path;
        const path2 = event.over?.data?.current?.path;
        const data = moveToAfter(path1, path2);
        await updateSchema(data);
      }}
    >
      {createPortal(
        <DragOverlay
          zIndex={2222}
          style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}
          dropAnimation={{
            duration: 10,
            easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
          }}
        >
          {dragOverlayContent}
        </DragOverlay>,
        document.body,
      )}
      <Dropdown
        trigger={['hover']}
        {...props}
        overlay={
          <Menu>
            <RecursionField schema={schema} onlyRenderProperties />
          </Menu>
        }
      >
        <span>{button}</span>
      </Dropdown>
    </DndContext>
  );
});

Action.Popover = observer((props) => {
  const { schema } = useDesignable();
  const form = useForm();
  const isFormDecorator = schema['x-decorator'] === 'Form';
  const [visible, setVisible] = useContext(VisibleContext);
  const button = useContext(ButtonComponentContext);
  return (
    <Popover
      visible={visible}
      trigger={['click']}
      onVisibleChange={setVisible}
      {...props}
      title={schema.title}
      content={
        <div>
          {props.children}
          {isFormDecorator && (
            <div>
              <Space>
                <Button
                  onClick={() => {
                    form.clearErrors();
                    setVisible(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type={'primary'}
                  onClick={async () => {
                    await form.submit();
                    setVisible(false);
                  }}
                >
                  Ok
                </Button>
              </Space>
            </div>
          )}
        </div>
      }
    >
      {button}
    </Popover>
  );
});

Action.DesignableBar = (props: any) => {
  const { schema, remove, refresh, insertAfter } = useDesignable();
  const [visible, setVisible] = useState(false);
  const isPopup = Object.keys(schema.properties || {}).length > 0;
  const displayed = useDisplayedMapContext();
  const field = useField();
  return (
    <div className={cls('designable-bar', { active: visible })}>
      <span
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cls('designable-bar-actions', { active: visible })}
      >
        <Space size={2}>
          <DragHandle />
          <Dropdown
            trigger={['click']}
            visible={visible}
            onVisibleChange={(visible) => {
              setVisible(visible);
            }}
            overlay={
              <Menu>
                <Menu.Item
                  onClick={async (e) => {
                    const values = await FormDialog('修改名称和图标', () => {
                      return (
                        <FormLayout layout={'vertical'}>
                          <SchemaField
                            schema={{
                              type: 'object',
                              properties: {
                                title: {
                                  type: 'string',
                                  title: '按钮名称',
                                  required: true,
                                  'x-decorator': 'FormItem',
                                  'x-component': 'Input',
                                },
                                icon: {
                                  type: 'string',
                                  title: '按钮图标',
                                  'x-decorator': 'FormItem',
                                  'x-component': 'IconPicker',
                                },
                              },
                            }}
                          />
                        </FormLayout>
                      );
                    }).open({
                      initialValues: {
                        title: schema['title'],
                        icon: schema['x-component-props']?.['icon'],
                      },
                    });
                    schema['title'] = values.title;
                    schema['x-component-props']['icon'] = values.icon;
                    field.componentProps.icon = values.icon;
                    field.title = values.title;
                    updateSchema(schema);
                    refresh();
                  }}
                >
                  修改名称和图标
                </Menu.Item>
                {isPopup && (
                  <Menu.Item>
                    在{' '}
                    <Select
                      bordered={false}
                      size={'small'}
                      defaultValue={'Action.Modal'}
                      onChange={(value) => {
                        const s = Object.values(schema.properties).shift();
                        s['x-component'] = value;
                        refresh();
                        updateSchema(s);
                      }}
                    >
                      <Select.Option value={'Action.Modal'}>
                        对话框
                      </Select.Option>
                      <Select.Option value={'Action.Drawer'}>
                        抽屉
                      </Select.Option>
                      <Select.Option value={'Action.Window'}>
                        浏览器窗口
                      </Select.Option>
                    </Select>{' '}
                    内打开
                  </Menu.Item>
                )}
                <Menu.Divider />
                <Menu.Item
                  onClick={async () => {
                    const displayName =
                      schema?.['x-decorator-props']?.['displayName'];
                    const data = remove();
                    await removeSchema(data);
                    if (displayName) {
                      displayed.remove(displayName);
                    }
                    setVisible(false);
                  }}
                >
                  移除
                </Menu.Item>
              </Menu>
            }
          >
            <MenuOutlined />
          </Dropdown>
        </Space>
      </span>
    </div>
  );
};

Action.Bar = ActionBar;
