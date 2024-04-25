import { Plugin } from '@nocobase/client';
import { useChinaRegionDataSource, useChinaRegionLoadData } from './ChinaRegionProvider';

export class PluginFieldChinaRegionClient extends Plugin {
  async load() {
    this.app.addScopes({
      useChinaRegionDataSource,
      useChinaRegionLoadData,
    });
  }
}

export default PluginFieldChinaRegionClient;
