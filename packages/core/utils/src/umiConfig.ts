export function getUmiConfig() {
  const { SERVER_PORT, SERVER_BASE_URL } = process.env;
  const SERVER_BASE_PATH = process.env.SERVER_BASE_PATH || '/api/';
  const PROXY_TARGET_URL = process.env.PROXY_TARGET_URL || `http://127.0.0.1:${SERVER_PORT}`;
  const LOCAL_STORAGE_BASE_URL = process.env.LOCAL_STORAGE_BASE_URL || '/uploads';

  function getLocalStorageProxy() {
    if (LOCAL_STORAGE_BASE_URL.startsWith('http')) {
      return {};
    }

    return {
      [LOCAL_STORAGE_BASE_URL]: {
        target: PROXY_TARGET_URL,
        changeOrigin: true,
      },
    };
  }

  return {
    define: {
      'process.env.SERVER_BASE_URL': SERVER_BASE_URL || SERVER_BASE_PATH,
    },
    // only proxy when using `umi dev`
    // if the assets are built, will not proxy
    proxy: {
      [SERVER_BASE_PATH]: {
        target: PROXY_TARGET_URL,
        changeOrigin: true,
        pathRewrite: { [`^${SERVER_BASE_PATH}`]: SERVER_BASE_PATH },
      },
      // for local storage
      ...getLocalStorageProxy(),
    },
  };
}
