export declare function getUmiConfig(): {
  define: {
      'process.env.SERVER_BASE_URL': string;
  };
  proxy: {
      [x: string]: {
          target: string;
          changeOrigin: boolean;
      } | {
          target: string;
          changeOrigin: boolean;
          pathRewrite: {
              [x: string]: string;
          };
      };
  };
};
