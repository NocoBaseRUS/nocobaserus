import { Plugin } from '@nocobase/client';
import { deprecatedPrintActionSettings, printActionSettings } from './PrintAction.Settings';
import { PrintActionPluginProvider } from './PrintActionPluginProvider';
export class PrintPlugin extends Plugin {
  async load() {
    this.app.use(PrintActionPluginProvider);
    this.app.schemaSettingsManager.add(deprecatedPrintActionSettings);
    this.app.schemaSettingsManager.add(printActionSettings);

    const initializerData = {
      title: '{{t("Print")}}',
      Component: 'PrintActionInitializer',
      schema: {
        'x-component': 'Action',
        'x-toolbar': 'ActionSchemaToolbar',
        'x-settings': 'actionSettings:print',
        'x-action': 'print',
      },
    };

    this.app.schemaInitializerManager.addItem(
      'actionInitializers:detailsSingle',
      'enableActions.print',
      initializerData,
    );
    this.app.schemaInitializerManager.addItem(
      'actionInitializers:calendarForm',
      'enableActions.print',
      initializerData,
    );
  }
}

export default PrintPlugin;
