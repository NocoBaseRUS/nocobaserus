import { mockServer, MockServer } from '@nocobase/test';
import { AppDump } from '../src/index';

describe('dump action', function () {
  let app: MockServer;

  beforeEach(async () => {
    app = mockServer();
    app.plugin(AppDump, { name: 'app-dump' });
    await app.loadAndInstall();
  });

  afterEach(async () => {
    await app.destroy();
  });

  it('should dump database', function () {
    console.log(app);
  });
});
