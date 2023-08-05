import { AppSupervisor, Plugin, PluginManager } from '@nocobase/server';
import { mockServer } from '@nocobase/test';
import { uid } from '@nocobase/utils';
import { PluginMultiAppManager } from '../server';

describe('test with start', () => {
  it('should load subApp on create', async () => {
    const loadFn = jest.fn();
    const installFn = jest.fn();

    class TestPlugin extends Plugin {
      getName(): string {
        return 'test-package';
      }

      async load(): Promise<void> {
        loadFn();
      }

      async install() {
        installFn();
      }
    }

    const resolvePlugin = PluginManager.resolvePlugin;

    PluginManager.resolvePlugin = (name) => {
      if (name === 'test-package') {
        return TestPlugin;
      }
      return resolvePlugin(name);
    };

    const app = mockServer();

    app.plugin(PluginMultiAppManager);

    await app.loadAndInstall({ clean: true });
    await app.start();

    const db = app.db;

    const name = `d_${uid()}`;

    await db.getRepository('applications').create({
      values: {
        name,
        options: {
          plugins: ['test-package'],
        },
      },
    });

    expect(loadFn).toHaveBeenCalled();
    expect(installFn).toHaveBeenCalledTimes(1);

    const subApp = await AppSupervisor.getInstance().getApp(name);
    await subApp.destroy();
    await app.destroy();
    PluginManager.resolvePlugin = resolvePlugin;
  });

  it('should install into difference database', async () => {
    const app = mockServer();
    app.plugin(PluginMultiAppManager);

    await app.loadAndInstall({ clean: true });
    await app.start();

    const db = app.db;

    const name = `d_${uid()}`;

    await db.getRepository('applications').create({
      values: {
        name,
        options: {
          plugins: ['ui-schema-storage'],
        },
      },
    });
    const subApp = await AppSupervisor.getInstance().getApp(name);
    await subApp.destroy();
    await app.destroy();
  });
});
