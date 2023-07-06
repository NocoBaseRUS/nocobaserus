import { genStyleHook } from '../__builtins__';

export const useStyles = genStyleHook('nb-action-drawer', (token) => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      overflow: 'hidden',
      '.ant-drawer-body': {
        overflow: 'hidden !important',
      },
      '&.reset': {
        '&.nb-action-popup': {
          '.ant-drawer-header': { display: 'none' },
          '.ant-drawer-body': { paddingTop: token.paddingContentVerticalLG },
        },
        '&.nb-record-picker-selector': {
          '.nb-block-item': {
            marginBottom: token.marginLG,
            '.general-schema-designer': {
              top: -token.sizeXS,
              bottom: -token.sizeXS,
              left: -token.sizeXS,
              right: -token.sizeXS,
            },
          },
        },
      },

      '.footer': {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        '.ant-btn': { marginRight: token.marginXS },
      },
    },
  };
});
