/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Migration } from '@nocobase/server';

export default class extends Migration {
  appVersion = '<1.6.0';
  async up() {
    const { db } = this.context;
    const queryInterface = db.sequelize.getQueryInterface();
    await db.sequelize.transaction(async (transaction) => {
      await queryInterface.renameTable(
        'users_jobs',
        db.options.underscored ? 'workflow_manual_tasks' : 'workflowManualTasks',
        { transaction },
      );
    });
  }
}
