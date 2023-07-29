import { useAPIClient, useCurrentUserContext, useSystemSettings } from '@nocobase/client';
import { error } from '@nocobase/utils/client';
import { MenuProps, Select } from 'antd';
import React, { useEffect, useMemo } from 'react';
import { useCurrentThemeId } from '../components/InitializeTheme';
import { useThemeListContext } from '../components/ThemeListProvider';
import { useTranslation } from '../locale';
import { useUpdateThemeSettings } from './useUpdateThemeSettings';

export const useThemeSettings = () => {
  return useMemo<MenuProps['items'][0]>(() => {
    return {
      key: 'theme',
      eventKey: 'theme',
      label: <Label />,
    };
  }, []);
};

function Label() {
  const { t } = useTranslation();
  const currentUser = useCurrentUserContext();
  const systemSettings = useSystemSettings();
  const { run, error: err, data, refresh } = useThemeListContext();
  const { updateUserThemeSettings, updateSystemThemeSettings } = useUpdateThemeSettings();
  const currentThemeId = useCurrentThemeId();
  const themeId = useCurrentThemeId();
  const api = useAPIClient();

  const options = useMemo(() => {
    return data
      ?.filter((item) => item.optional)
      .map((item) => {
        return {
          label: t(item.config.name),
          value: item.id,
        };
      });
  }, [data, t]);

  useEffect(() => {
    if (!data) {
      run();
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      // 当 themeId 为空时表示插件是第一次被启用
      if (themeId == null && data) {
        const firstTheme = data[0];

        try {
          // 避免并发请求，在本地存储中容易出问题
          await updateSystemThemeSettings(firstTheme.id);
          await updateUserThemeSettings(firstTheme.id);
        } catch (err) {
          error(err);
        }
      }
    };

    init();
  }, [themeId, updateSystemThemeSettings, updateUserThemeSettings, data, api, refresh]);

  if (err) {
    error(err);
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {t('Theme')}
      <Select
        style={{ minWidth: 100 }}
        bordered={false}
        popupMatchSelectWidth={false}
        value={currentThemeId}
        options={options}
        onChange={(value) => {
          updateUserThemeSettings(value);
        }}
      />
    </div>
  );
}
