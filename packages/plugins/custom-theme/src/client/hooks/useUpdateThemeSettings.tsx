import { useAPIClient, useCurrentUserContext, useSystemSettings } from '@nocobase/client';
import { error } from '@nocobase/utils/client';
import { useCallback } from 'react';

export function useUpdateThemeSettings() {
  const api = useAPIClient();
  const currentUser = useCurrentUserContext();
  const systemSettings = useSystemSettings();

  const updateUserThemeSettings = useCallback(
    async (themeId: number | null) => {
      try {
        await api.resource('users').update({
          filterByTk: currentUser.data.data.id,
          values: {
            systemSettings: {
              ...currentUser.data.data.systemSettings,
              themeId,
            },
          },
        });
        currentUser.mutate({
          data: {
            ...currentUser.data.data,
            systemSettings: {
              ...currentUser.data.data.systemSettings,
              themeId,
            },
          },
        });
      } catch (err) {
        error(err);
      }
    },
    [api, currentUser],
  );

  const updateUserThemeSettingsOnly = useCallback(
    async (themeId: number) => {
      try {
        await api.resource('users').update({
          filterByTk: currentUser.data.data.id,
          values: {
            systemSettings: {
              ...currentUser.data.data.systemSettings,
              themeId,
            },
          },
        });
        currentUser.mutate({
          data: {
            ...currentUser.data.data,
            systemSettings: {
              ...currentUser.data.data.systemSettings,
              themeId,
            },
          },
        });
      } catch (err) {
        error(err);
      }
    },
    [api, currentUser],
  );

  const updateSystemThemeSettings = useCallback(
    async (themeId: number) => {
      await api.request({
        url: 'systemSettings:update/1',
        method: 'post',
        data: {
          options: {
            ...currentUser.data.data.systemSettings.options,
            themeId,
          },
        },
      });
      systemSettings.mutate({
        data: {
          ...systemSettings.data.data,
          options: {
            ...systemSettings.data.data.options,
            themeId,
          },
        },
      });
    },
    [api, currentUser?.data?.data?.systemSettings?.options, systemSettings],
  );

  return { updateUserThemeSettings, updateUserThemeSettingsOnly, updateSystemThemeSettings };
}
