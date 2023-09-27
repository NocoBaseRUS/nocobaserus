import { set } from 'lodash';
import { createElement } from 'react';

import type { Application } from './Application';
import type { RouteType } from './RouterManager';
import { Icon } from '../icon';

export const ADMIN_SETTINGS_KEY = 'admin.settings.';
export const ADMIN_SETTINGS_PATH = '/admin/settings/';
export const SNIPPET_PREFIX = 'pm.';

export interface SettingOptionsType {
  title?: string;
  Component: RouteType['Component'];
  icon?: string;
  /**
   * sort, the smaller the number, the higher the priority
   * @default 0
   */
  sort?: number;
  isBookmark?: boolean;
  aclSnippet?: string;
  [index: string]: any;
}

export interface SettingPageType {
  label?: string;
  title: string;
  key: string;
  icon: any;
  path: string;
  sort?: number;
  pluginName?: string;
  isBookmark?: boolean;
  children?: SettingPageType[];
  [index: string]: any;
}

export class SettingsCenter {
  protected settings: Record<string, SettingOptionsType> = {};
  protected aclSnippets: string[] = [];

  constructor(protected app: Application) {
    this.app = app;
  }

  setAclSnippets(aclSnippets: string[]) {
    this.aclSnippets = aclSnippets;
  }

  getAclSnippet(name: string) {
    const setting = this.settings[name];
    return setting?.aclSnippet ? setting.aclSnippet : `${SNIPPET_PREFIX}${name}`;
  }

  getRouteName(name: string) {
    return `${ADMIN_SETTINGS_KEY}${name}`;
  }

  getRoutePath(name: string) {
    return `${ADMIN_SETTINGS_PATH}${name.replaceAll('.', '/')}`;
  }

  add(name: string, options: SettingOptionsType) {
    const nameArr = name.split('.');
    const pluginName = nameArr[0];
    this.settings[name] = { ...options, name, pluginName };

    // add children
    if (nameArr.length > 1) {
      set(this.settings, nameArr.join('.children.'), this.settings[name]);
    }

    // add route
    this.app.router.add(this.getRouteName(name), {
      path: this.getRoutePath(name),
      Component: options.Component,
    });
  }

  remove(name: string) {
    // delete self and children
    Object.keys(this.settings).forEach((key) => {
      if (key.startsWith(name)) {
        delete this.settings[key];
        this.app.router.remove(`${ADMIN_SETTINGS_KEY}${key}`);
      }
    });
  }

  hasAuth(name: string) {
    return this.aclSnippets.includes(`!${this.getAclSnippet(name)}`) === false;
  }

  getSetting(name: string): SettingOptionsType & { children?: Record<string, SettingOptionsType> } {
    const hasAuth = this.hasAuth(name);
    if (hasAuth) return this.settings[name];
  }

  has(name: string) {
    return !!this.getSetting(name);
  }

  get(name: string, filterAuth = true): SettingPageType {
    const isAllow = this.hasAuth(name);
    if (filterAuth && !isAllow) return null;
    const pluginSetting = this.getSetting(name);
    const children = Object.keys(pluginSetting.children || {})
      .sort((a, b) => a.localeCompare(b)) // sort by name
      .map((key) => this.get(pluginSetting.children[key].name, filterAuth))
      .filter(Boolean)
      .sort((a, b) => (a.sort || 0) - (b.sort || 0));
    const { title, icon, ...others } = pluginSetting;
    return {
      ...others,
      title,
      isAllow,
      label: title,
      icon: typeof icon === 'string' ? createElement(Icon, { type: icon }) : icon,
      key: this.getAclSnippet(name),
      path: this.getRoutePath(name),
      children: children.length ? children : undefined,
    };
  }

  getList(filterAuth = true): SettingPageType[] {
    return Object.keys(this.settings)
      .filter((item) => !item.includes('.')) // top level
      .sort((a, b) => a.localeCompare(b)) // sort by name
      .map((name) => this.get(name, filterAuth))
      .filter(Boolean)
      .sort((a, b) => (a.sort || 0) - (b.sort || 0));
  }

  getAclSnippets() {
    return Object.keys(this.settings).map((name) => this.getAclSnippet(name));
  }
}
