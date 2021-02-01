import _ from 'lodash';
import { Model } from '@nocobase/database';
import schedule from 'node-schedule';

const scheduleJobs = new Map<string, any>();

export class AutomationModel extends Model {
  static async load() {
    const automations = await this.findAll({
      where: {
        enabled: true,
      }
    });
    for (const automation of automations) {
      await automation.startJobs();
    }
  }

  async startJobs() {
    const jobs = await this.getJobs();
    for (const job of jobs) {
      job.setDataValue('automation', this);
      await job.bootstrap();
    }
  }

  async cancelJobs() {
    const jobs = await this.getJobs();
    for (const job of jobs) {
      job.setDataValue('automation', this);
      await job.cancel();
    }
  }

  startJob(jobName: string, callback: any) {
    const collectionName = this.get('collection_name');
    const hookName = `automation-${this.id}-${jobName}`;
    switch (this.get('type')) {
      case 'collections:afterCreate':
        const M1 = this.database.getModel(collectionName);
        M1.addHook('afterCreate', hookName, async (model) => {
          await callback(model);
        });
        break;
      case 'collections:afterCreate':
        const M2 = this.database.getModel(collectionName);
        M2.addHook('afterUpdate', hookName, async (model) => {
          await callback(model);
        });
        break;
      case 'collections:afterCreateOrUpdate':
        const M3 = this.database.getModel(collectionName);
        M3.addHook('afterCreate', hookName, async (model) => {
          await callback(model);
        });
        M3.addHook('afterUpdate', hookName, async (model) => {
          await callback(model);
        });
        break;
      case 'collections:schedule':
        const job1 = schedule.scheduleJob({
          start: '2021-02-01T10:27:00.006Z',
          rule: '*/5 * * * * *',
        }, () => {
          (async () => {
            await callback();
          })();
        });
        scheduleJobs.set(hookName, job1);
        break;
      case 'schedule':
        const job2= schedule.scheduleJob({
          start: '2021-02-01T10:27:00.006Z',
          rule: '*/5 * * * * *',
        }, () => {
          (async () => {
            await callback();
          })();
        });
        scheduleJobs.set(hookName, job2);
        break;
    }
  }

  cancelJob(jobName: string) {
    const collectionName = this.get('collection_name');
    const hookName = `automation-${this.id}-${jobName}`;
    switch (this.get('type')) {
      case 'collections:afterCreate':
        const M1 = this.database.getModel(collectionName);
        M1.removeHook('afterCreate', hookName);
        break;
      case 'collections:afterCreate':
        const M2 = this.database.getModel(collectionName);
        M2.removeHook('afterUpdate', hookName);
        break;
      case 'collections:afterCreateOrUpdate':
        const M3 = this.database.getModel(collectionName);
        M3.removeHook('afterCreate', hookName);
        M3.removeHook('afterUpdate', hookName);
        break;
      case 'schedule':
      case 'collections:schedule':
        const job = scheduleJobs.get(hookName);
        job.cancel();
        break;
    }
  }
}
