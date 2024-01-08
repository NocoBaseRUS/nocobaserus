import { mockServer } from '@nocobase/test';

export default async function createApp() {
  const app = mockServer({
    plugins: ['nocobase'],
  });

  await app.cleanDb();
  app.plugin((await import('../server')).default, { name: 'duplicator' });

  await app.loadAndInstall({ clean: true });

  return app;
}
