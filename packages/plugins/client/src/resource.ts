import { PluginManager } from '@nocobase/server';

const arr2obj = (items: any[]) => {
  const obj = {};
  for (const item of items) {
    Object.assign(obj, item);
  }
  return obj;
};

const getResource = (packageName: string, lang: string) => {
  let resources = [];
  const prefixes = ['src', 'lib'];
  const localeKeys = ['locale', 'client/locale', 'server/locale'];
  for (const prefix of prefixes) {
    for (const localeKey of localeKeys) {
      try {
        const file = `${packageName}/${prefix}/${localeKey}/${lang}`;
        require.resolve(file);
        const resource = require(file).default;
        resources.push(resource);
      } catch (error) {}
    }
    if (resources.length) {
      break;
    }
  }
  if (resources.length === 0 && lang.replace('-', '_') !== lang) {
    return getResource(packageName, lang.replace('-', '_'));
  }
  return arr2obj(resources);
};

export const getResourceLocale = async (lang: string, db: any) => {
  const resources = {};
  const res = getResource('@nocobase/client', lang);
  const defaults = getResource('@nocobase/client', 'zh-CN');
  for (const key in defaults) {
    if (Object.prototype.hasOwnProperty.call(defaults, key)) {
      defaults[key] = key;
    }
  }
  if (res) {
    resources['client'] = { ...defaults, ...res };
  } else {
    resources['client'] = defaults;
  }
  const plugins = await db.getRepository('applicationPlugins').find({
    filter: {
      'name.$ne': 'client',
    },
  });
  for (const plugin of plugins) {
    const packageName = PluginManager.getPackageName(plugin.get('name'));
    const res = getResource(packageName, lang);
    const defaults = getResource(packageName, 'zh-CN');
    for (const key in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, key)) {
        defaults[key] = key;
      }
    }
    if (res) {
      resources[plugin.get('name')] = { ...defaults, ...res };
    } else {
      resources['client'] = defaults;
    }
  }
  return resources;
};
