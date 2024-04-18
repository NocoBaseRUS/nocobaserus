import { useField, useFieldSchema, useForm } from '@formily/react';
import { useAPIClient, useActionContext, useCompile, useDataSourceKey, useRecord } from '@nocobase/client';
import { isURL } from '@nocobase/utils/client';
import { App } from 'antd';
import { useNavigate } from 'react-router-dom';

export const useCustomizeRequestActionProps = () => {
  const apiClient = useAPIClient();
  const navigate = useNavigate();
  const actionSchema = useFieldSchema();
  const compile = useCompile();
  const form = useForm();
  // const { getPrimaryKey } = useCollection_deprecated();
  const record = useRecord();
  const fieldSchema = useFieldSchema();
  const actionField = useField();
  const { setVisible } = useActionContext();
  const { modal, message } = App.useApp();
  const dataSourceKey = useDataSourceKey();
  return {
    async onClick(e?, callBack?) {
      const { skipValidator, onSuccess } = actionSchema?.['x-action-settings'] ?? {};
      const xAction = actionSchema?.['x-action'];
      if (skipValidator !== true && xAction === 'customize:form:request') {
        await form.submit();
      }

      let formValues = { ...record };
      if (xAction === 'customize:form:request') {
        formValues = form.values;
      }

      actionField.data ??= {};
      actionField.data.loading = true;
      try {
        await apiClient.request({
          url: `/customRequests:send/${fieldSchema['x-uid']}`,
          method: 'POST',
          data: {
            currentRecord: {
              // id: record[getPrimaryKey()],
              // appends: result.params[0]?.appends,
              dataSourceKey,
              data: formValues,
            },
          },
        });
        actionField.data.loading = false;
        // service?.refresh?.();
        if (callBack) {
          callBack?.();
        }
        if (xAction === 'customize:form:request') {
          setVisible?.(false);
        }
        if (!onSuccess?.successMessage) {
          return;
        }
        if (onSuccess?.manualClose) {
          modal.success({
            title: compile(onSuccess?.successMessage),
            onOk: async () => {
              if (onSuccess?.redirecting && onSuccess?.redirectTo) {
                if (isURL(onSuccess.redirectTo)) {
                  window.location.href = onSuccess.redirectTo;
                } else {
                  navigate(onSuccess.redirectTo);
                }
              }
            },
          });
        } else {
          message.success(compile(onSuccess?.successMessage));
          if (onSuccess?.redirecting && onSuccess?.redirectTo) {
            if (isURL(onSuccess.redirectTo)) {
              window.location.href = onSuccess.redirectTo;
            } else {
              navigate(onSuccess.redirectTo);
            }
          }
        }
      } finally {
        actionField.data.loading = false;
      }
    },
  };
};
