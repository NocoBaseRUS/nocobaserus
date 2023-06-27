export * from './DesignableSwitch';
export * from './FormProvider';
export * from './RemoteSchemaComponent';
export * from './SchemaComponent';
export * from './SchemaComponentOptions';
export * from './SchemaComponentProvider';
import { Plugin } from '../../application-v2/Plugin';
import { DesignableSwitch } from './DesignableSwitch';
import { SchemaComponentProvider } from './SchemaComponentProvider';

export class SchemaComponentPlugin extends Plugin {
  static pluginName = 'schema-component';

  async load() {
    this.addComponents();
    this.app.use(SchemaComponentProvider);
  }

  addComponents() {
    this.app.addComponents({
      DesignableSwitch,
    });
  }
}

export default SchemaComponentPlugin;
