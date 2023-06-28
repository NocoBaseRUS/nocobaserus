export * from './ACLProvider';
export * from './ACLShortcut';

import { Plugin } from '../application/Plugin';
import {
  ACLActionProvider,
  ACLCollectionFieldProvider,
  ACLCollectionProvider,
  ACLMenuItemProvider,
} from './ACLProvider';
import './style.less';

export class ACLPlugin extends Plugin {
  async load() {
    this.app.addComponents({
      ACLCollectionFieldProvider,
      ACLActionProvider,
      ACLMenuItemProvider,
      ACLCollectionProvider,
    });
  }
}
