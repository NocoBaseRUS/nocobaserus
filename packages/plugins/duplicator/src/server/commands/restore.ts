import { Application } from '@nocobase/server';
import { Restorer } from '../restorer';

export default function addRestoreCommand(app: Application) {
  app
    .command('restore')
    .argument('<string>', 'restore file path')
    .action(async (restoreFilePath, options) => {
      await restoreAction(app, restoreFilePath, options);
    });
}

interface RestoreContext {
  app: Application;
  dir: string;
}

async function restoreAction(app: Application, restoreFilePath: string, options) {
  const restorer = new Restorer(app);
  await restorer.restore(restoreFilePath);
  await app.stop();
}
