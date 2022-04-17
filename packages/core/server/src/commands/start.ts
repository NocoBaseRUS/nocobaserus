export default async ({ app, cliArgs }) => {
  const [opts] = cliArgs;
  const port = opts.port || process.env.SERVER_PORT || 3000;
  const host = opts.host || process.env.SERVER_HOST || '0.0.0.0';

  await app.start({
    cliArgs,
    listen: {
      port,
      host,
    },
  });

  console.log(`🚀 nocobase server had started at http://${host}:${port}`);
};
