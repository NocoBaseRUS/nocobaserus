import { CleanOptions, Collection, SyncOptions } from '@nocobase/database';
import { requireModule } from '@nocobase/utils';
import execa from 'execa';
import fs from 'fs';
import net from 'net';
import { resolve } from 'path';
import Application from '../application';
import { Plugin } from '../plugin';
import collectionOptions from './options/collection';
import resourceOptions from './options/resource';
import { PluginManagerRepository } from './PluginManagerRepository';

export interface PluginManagerOptions {
  app: Application;
}

export interface InstallOptions {
  cliArgs?: any[];
  clean?: CleanOptions | boolean;
  sync?: SyncOptions;
}

export class PluginManager {
  app: Application;
  collection: Collection;
  repository: PluginManagerRepository;
  plugins = new Map<string, Plugin>();
  server: net.Server;
  pmSock: string;

  constructor(options: PluginManagerOptions) {
    this.app = options.app;
    const f = resolve(process.cwd(), 'storage', 'pm.sock');
    this.pmSock = this.app.options.pmSock || f;
    this.app.db.registerRepositories({
      PluginManagerRepository,
    });
    this.collection = this.app.db.collection(collectionOptions);
    this.repository = this.collection.repository as PluginManagerRepository;
    this.repository.setPluginManager(this);
    this.app.resourcer.define(resourceOptions);
    this.app.acl.use(async (ctx, next) => {
      if (ctx.action.resourceName === 'pm') {
        ctx.permission = {
          skip: true,
        };
      }
      await next();
    });
    this.server = net.createServer((socket) => {
      socket.on('data', async (data) => {
        const { method, plugins } = JSON.parse(data.toString());
        try {
          console.log(method, plugins);
          await this[method](plugins);
        } catch (error) {
          console.error(error.message);
        }
      });
      socket.pipe(socket);
    });
    this.app.on('beforeLoad', async (app, options) => {
      if (options?.method && ['install', 'upgrade'].includes(options.method)) {
        await this.collection.sync();
      }
      const exists = await this.app.db.collectionExistsInDb('applicationPlugins');
      if (!exists) {
        return;
      }
      if (options?.method !== 'install' || options.reload) {
        await this.repository.load();
      }
    });
  }

  getPlugins() {
    return this.plugins;
  }

  get(name: string) {
    return this.plugins.get(name);
  }

  clientWrite(data: any) {
    const { method, plugins } = data;
    const client = new net.Socket();
    client.connect(this.pmSock, () => {
      client.write(JSON.stringify(data));
    });
    client.on('error', async () => {
      try {
        console.log(method, plugins);
        await this[method](plugins);
      } catch (error) {
        console.error(error.message);
      }
    });
  }

  async listen(): Promise<net.Server> {
    if (fs.existsSync(this.pmSock)) {
      await fs.promises.unlink(this.pmSock);
    }
    return new Promise((resolve) => {
      this.server.listen(this.pmSock, () => {
        resolve(this.server);
      });
    });
  }

  async create(name: string) {
    const { run } = require('@nocobase/cli/src/util');
    const { PluginGenerator } = require('@nocobase/cli/src/plugin-generator');
    const generator = new PluginGenerator({
      cwd: resolve(process.cwd(), name),
      args: {},
      context: {
        name,
      },
    });
    await generator.run();
    await run('yarn', ['install']);
  }

  addStatic(plugin?: any, options?: any) {
    let name: string;
    if (typeof plugin === 'string') {
      name = plugin;
      plugin = PluginManager.resolvePlugin(plugin);
    } else {
      name = plugin.name;
      if (!name) {
        throw new Error(`plugin name invalid`);
      }
    }

    const instance = new plugin(this.app, {
      name,
      enabled: true,
      ...options,
    });
    const pluginName = instance.getName();
    if (this.plugins.has(pluginName)) {
      throw new Error(`plugin name [${pluginName}] exists`);
    }
    this.plugins.set(pluginName, instance);
    return instance;
  }

  async add(plugin: any, options: any = {}) {
    if (Array.isArray(plugin)) {
      return Promise.all(plugin.map((p) => this.add(p, options)));
    }
    // console.log(`adding ${plugin} plugin`);
    const packageName = await PluginManager.findPackage(plugin);
    const packageJson = require(`${packageName}/package.json`);
    const instance = this.addStatic(plugin, options);
    let model = await this.repository.findOne({
      filter: { name: plugin },
    });
    if (model) {
      throw new Error(`${plugin} plugin already exists`);
    }
    const { enabled, builtIn, installed, ...others } = options;
    await this.repository.create({
      values: {
        name: plugin,
        version: packageJson.version,
        enabled: !!enabled,
        builtIn: !!builtIn,
        installed: !!installed,
        options: {
          ...others,
        },
      },
    });
    const file = resolve(
      process.cwd(),
      'packages',
      process.env.APP_PACKAGE_ROOT || 'app',
      'client/src/plugins',
      `${plugin}.ts`,
    );
    if (!fs.existsSync(file)) {
      try {
        require.resolve(`${packageName}/client`);
        await fs.promises.writeFile(file, `export { default } from '${packageName}/client';`);
        const { run } = require('@nocobase/cli/src/util');
        await run('yarn', ['nocobase', 'postinstall']);
      } catch (error) {}
    }
    return instance;
  }

  async load(options: any = {}) {
    for (const [name, plugin] of this.plugins) {
      if (!plugin.enabled) {
        continue;
      }
      await plugin.beforeLoad();
    }

    for (const [name, plugin] of this.plugins) {
      if (!plugin.enabled) {
        continue;
      }
      await this.app.emitAsync('beforeLoadPlugin', plugin, options);
      await plugin.load();
      await this.app.emitAsync('afterLoadPlugin', plugin, options);
    }
  }

  async install(options: InstallOptions = {}) {
    for (const [name, plugin] of this.plugins) {
      if (!plugin.enabled) {
        continue;
      }
      await this.app.emitAsync('beforeInstallPlugin', plugin, options);
      await plugin.install(options);
      await this.app.emitAsync('afterInstallPlugin', plugin, options);
    }
  }

  async enable(name: string | string[]) {
    try {
      const pluginNames = await this.repository.enable(name);
      await this.app.reload();
      await this.app.db.sync();
      for (const pluginName of pluginNames) {
        const plugin = this.app.getPlugin(pluginName);
        if (!plugin) {
          throw new Error(`${name} plugin does not exist`);
        }
        await plugin.install();
        await plugin.afterEnable();
      }
    } catch (error) {
      throw error;
    }
  }

  async disable(name: string | string[]) {
    try {
      const pluginNames = await this.repository.disable(name);
      await this.app.reload();
      for (const pluginName of pluginNames) {
        const plugin = this.app.getPlugin(pluginName);
        if (!plugin) {
          throw new Error(`${name} plugin does not exist`);
        }
        await plugin.afterDisable();
      }
    } catch (error) {
      throw error;
    }
  }

  async remove(name: string | string[]) {
    const pluginNames = typeof name === 'string' ? [name] : name;
    for (const pluginName of pluginNames) {
      const plugin = this.app.getPlugin(pluginName);
      if (!plugin) {
        throw new Error(`${name} plugin does not exist`);
      }
      await plugin.remove();
    }
    await this.repository.remove(name);
    this.app.reload();
  }

  static getPackageName(name: string) {
    const prefixes = (process.env.PLUGIN_PACKAGE_PREFIX || '@nocobase/plugin-,@nocobase/preset-').split(',');
    for (const prefix of prefixes) {
      try {
        require.resolve(`${prefix}${name}`);
        return `${prefix}${name}`;
      } catch (error) {
        continue;
      }
    }
    throw new Error(`${name} plugin does not exist`);
  }

  static async findPackage(name: string) {
    try {
      const packageName = this.getPackageName(name);
      return packageName;
    } catch (error) {
      const prefixes = (process.env.PLUGIN_PACKAGE_PREFIX || '@nocobase/plugin-,@nocobase/preset-').split(',');
      for (const prefix of prefixes) {
        try {
          const packageName = `${prefix}${name}`;
          await execa('npm', ['v', packageName, 'versions']);
          console.log(`${packageName} is downloading...`);
          await execa('yarn', ['add', packageName, '-W']);
          return packageName;
        } catch (error) {
          continue;
        }
      }
    }
    throw new Error(`${name} plugin does not exist`);
  }

  static resolvePlugin(pluginName: string) {
    const packageName = this.getPackageName(pluginName);
    return requireModule(packageName);
  }
}

export default PluginManager;
