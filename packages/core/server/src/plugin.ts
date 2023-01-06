import { Application } from './application';
import { InstallOptions } from './plugin-manager';

export interface PluginInterface {
  beforeLoad?: () => void;
  load();
  getName(): string;
}

export interface PluginOptions {
  activate?: boolean;
  displayName?: string;
  description?: string;
  version?: string;
  enabled?: boolean;
  install?: (this: Plugin) => void;
  load?: (this: Plugin) => void;
  plugin?: typeof Plugin;
  [key: string]: any;
}

export type PluginType = typeof Plugin;

export abstract class Plugin<O = any> implements PluginInterface {
  options: any;
  app: Application;

  constructor(app: Application, options?: any) {
    this.app = app;
    this.setOptions(options);
    this.afterAdd();
  }

  get name() {
    return this.options.name as string;
  }

  get db() {
    return this.app.db;
  }

  get enabled() {
    return this.options.enabled;
  }

  set enabled(value) {
    this.options.enabled = value;
  }

  setOptions(options: any) {
    this.options = options || {};
  }

  getName() {
    return (this.options as any).name;
  }

  afterAdd() {}

  beforeLoad() {}

  async load() {}

  async install(options?: InstallOptions) {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}

  registerPluginACLSnippet({ name, actions }: { name: string; actions: string[] }) {
    this.app.acl.registerSnippet({
      name: `pm.${this.getName()}.${name}`,
      actions,
    });
  }
}

export default Plugin;
