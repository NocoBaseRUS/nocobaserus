export * from './ACLProvider';
export * from './ACLShortcut';

import { Plugin } from '../application-v2/Plugin';
import {
  ACLActionProvider,
  ACLCollectionFieldProvider,
  ACLCollectionProvider,
  ACLMenuItemProvider,
} from './ACLProvider';
import './style.less';

export class ACLPlugin extends Plugin {
  static pluginName = 'acl';

  async load() {
    this.app.addComponents({
      ACLCollectionFieldProvider,
      ACLActionProvider,
      ACLMenuItemProvider,
      ACLCollectionProvider,
    });
  }
}
