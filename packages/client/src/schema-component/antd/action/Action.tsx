import { observer, useField, useFieldSchema } from '@formily/react';
import { Button } from 'antd';
import React, { useState } from 'react';
import ActionContainer from './Action.Container';
import { ActionDrawer } from './Action.Drawer';
import { ActionLink } from './Action.Link';
import { ActionModal } from './Action.Modal';
import { ActionPage } from './Action.Page';
import { ActionContext } from './context';
import { useA } from './hooks';
import { ComposedAction } from './types';

export const Action: ComposedAction = observer((props: any) => {
  const { openMode, containerRefKey, useAction = useA, onClick, ...others } = props;
  const [visible, setVisible] = useState(false);
  const schema = useFieldSchema();
  const field = useField();
  const { run } = useAction();
  return (
    <ActionContext.Provider value={{ visible, setVisible, openMode, containerRefKey }}>
      <Button
        {...others}
        onClick={(e) => {
          onClick && onClick(e);
          setVisible(true);
          run();
        }}
      >
        {field.title}
      </Button>
      {props.children}
    </ActionContext.Provider>
  );
});

Action.Link = ActionLink;
Action.Drawer = ActionDrawer;
Action.Modal = ActionModal;
Action.Container = ActionContainer;
Action.Page = ActionPage;

export default Action;
