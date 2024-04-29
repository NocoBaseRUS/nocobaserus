import { ButtonProps, DrawerProps, ModalProps } from 'antd';
import { ComponentType } from 'react';
import { Schema } from '@formily/react';

export type OpenSize = 'small' | 'middle' | 'large';
export interface ActionContextProps {
  button?: React.JSX.Element;
  visible?: boolean;
  setVisible?: (v: boolean) => void;
  openMode?: 'drawer' | 'modal' | 'page';
  snapshot?: boolean;
  openSize?: OpenSize;
  /**
   * Customize the position of the pop-up window
   */
  containerRefKey?: string;
  formValueChanged?: boolean;
  setFormValueChanged?: (v: boolean) => void;
  fieldSchema?: Schema;
  drawerProps?: DrawerProps;
  modalProps?: ModalProps;
  submitted?: boolean;
  setSubmitted?: (v: boolean) => void;
}

export type UseActionType = (callback?: () => void) => {
  run: () => void | Promise<void>;
};

export interface ActionProps extends ButtonProps {
  /**
   * button title
   */
  title?: string;

  /**
   * custom component, replace the default Button component
   */
  component?: string | ComponentType<any>;

  openMode?: ActionContextProps['openMode'];
  openSize?: ActionContextProps['openSize'];
  containerRefKey?: ActionContextProps['containerRefKey'];

  /**
   * Whether to display the popover, only valid when `openMode: 'popover'`
   */
  popover?: boolean;

  /**
   * When the button is clicked, whether a pop-up confirmation is required
   */
  confirm?:
    | false
    | {
        title: string;
        content: string;
      };

  /**
   * @deprecated
   */
  useAction?: string | UseActionType;
  /**
   * @deprecated
   */
  actionCallback?: () => void;

  /**
   * @internal
   */
  addChild?: boolean;
}

export type ComposedAction = React.FC<ActionProps> & {
  Drawer?: ComposedActionDrawer;
  [key: string]: any;
};

export type ComposedActionDrawer<T = DrawerProps> = React.FC<T & { footerNodeName?: string }> & {
  Footer?: React.FC;
};
