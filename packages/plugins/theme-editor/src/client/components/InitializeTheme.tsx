import { useCurrentUserContext, useGlobalTheme, useSystemSettings } from '@nocobase/client';
import { getSubAppName } from '@nocobase/sdk';
import { error } from '@nocobase/utils/client';
import { Spin } from 'antd';
import React, { useEffect, useRef } from 'react';
import { changeAlgorithmFromFunctionToString } from '../utils/changeAlgorithmFromFunctionToString';
import { changeAlgorithmFromStringToFunction } from '../utils/changeAlgorithmFromStringToFunction';
import { useThemeListContext } from './ThemeListProvider';

// 之所以存储到 localStorage 中，是为了防止登录页面主题不生效的问题
const NOCOBASE_THEME = `${getSubAppName()}_NOCOBASE_THEME`;

const CurrentThemeIdContext = React.createContext<number>(null);

export const useCurrentThemeId = () => {
  return React.useContext(CurrentThemeIdContext);
};

/**
 * 用于在页面加载时初始化主题
 */
const InitializeTheme: React.FC = ({ children }) => {
  const systemSettings = useSystemSettings();
  const currentUser = useCurrentUserContext();
  const { setTheme } = useGlobalTheme();
  const { run, data, loading } = useThemeListContext();
  const themeId = useRef<number>(null);

  useEffect(() => {
    const storageTheme = localStorage.getItem(NOCOBASE_THEME);
    if (storageTheme) {
      try {
        setTheme(changeAlgorithmFromStringToFunction(JSON.parse(storageTheme)).config);
      } catch (err) {
        error(err);
      }
    }
  }, []);

  useEffect(() => {
    if (!data) {
      return run();
    }

    themeId.current =
      // 这里不要使用 `===` 操作符
      currentUser?.data?.data?.systemSettings?.themeId == null
        ? systemSettings?.data?.data?.options?.themeId
        : currentUser?.data?.data?.systemSettings?.themeId;

    // 这里不要使用 `!==` 操作符
    if (themeId.current != null) {
      const theme = data?.find((item) => item.id === themeId.current);
      if (theme) {
        setTheme(theme.config);
        localStorage.setItem(
          NOCOBASE_THEME,
          JSON.stringify(Object.assign({ ...theme }, { config: changeAlgorithmFromFunctionToString(theme.config) })),
        );
      }
    } else {
      setTheme({});
      localStorage.setItem(NOCOBASE_THEME, null);
    }
  }, [
    currentUser?.data?.data?.systemSettings?.themeId,
    data,
    run,
    setTheme,
    systemSettings?.data?.data?.options?.themeId,
  ]);

  if (loading && !data) {
    return <Spin />;
  }

  return <CurrentThemeIdContext.Provider value={themeId.current}>{children}</CurrentThemeIdContext.Provider>;
};

InitializeTheme.displayName = 'InitializeTheme';

export default InitializeTheme;
