import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';

import DynamicCalculation from './DynamicCalculation';
import { DynamicExpression } from './DynamicExpression';
import expression from './expression';

export default class extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {}

  // You can get and modify the app instance here
  async load() {
    this.app.collectionManager.addFieldInterfaces([expression]);
    this.app.addComponents({
      DynamicExpression,
    });
    const workflow = this.app.pm.get('workflow') as WorkflowPlugin;
    const dynamicCalculation = new DynamicCalculation();
    workflow.instructions.register(dynamicCalculation.type, dynamicCalculation);
  }
}
