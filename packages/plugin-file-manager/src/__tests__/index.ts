import path from 'path';
import supertest from 'supertest';
import { MockServer, mockServer } from '@nocobase/test';

import plugin from '../server';

export async function getApp(options = {}): Promise<MockServer> {
  const app = mockServer({
    ...options,
    cors: {
      origin: '*'
    }
  });
  app.plugin(require('@nocobase/plugin-collections/src/server').default);
  app.plugin(plugin);
  await app.load();
  app.db.import({
    directory: path.resolve(__dirname, './tables')
  });
  try {
    await app.db.sync();
  } catch (error) {
    console.error(error);
  }
  
  return app;
}

// because the app in supertest is using a random port
export function requestFile(url, agent) {
  return path.isAbsolute(url)
    ? agent.get(url)
    : supertest.agent(url).get('');
}
