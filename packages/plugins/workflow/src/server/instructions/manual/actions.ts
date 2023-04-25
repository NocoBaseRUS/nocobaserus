import { Context, utils } from '@nocobase/actions';
import Plugin from '../..';
import { EXECUTION_STATUS, JOB_STATUS } from '../../constants';

export async function submit(context: Context, next) {
  const repository = utils.getRepositoryFromParams(context);
  const { filterByTk, values } = context.action.params;
  const { currentUser } = context.state;

  if (!currentUser) {
    return context.throw(401);
  }

  const plugin: Plugin = context.app.pm.get('workflow') as Plugin;

  const userJob = await context.db.sequelize.transaction(async (transaction) => {
    const instance = await repository.findOne({
      filterByTk,
      // filter: {
      //   userId: currentUser?.id
      // },
      appends: ['job', 'node', 'execution', 'workflow'],
      context,
      transaction,
    });

    if (!instance) {
      return context.throw(404);
    }

    const { forms = {} } = instance.node.config;
    const [form] = Object.keys(values.result ?? {});

    // NOTE: validate status
    if (
      instance.status !== JOB_STATUS.PENDING ||
      instance.job.status !== JOB_STATUS.PENDING ||
      instance.execution.status !== EXECUTION_STATUS.STARTED ||
      !instance.workflow.enabled ||
      !forms[form]?.actions?.includes(values.status)
    ) {
      return context.throw(400);
    }

    instance.execution.workflow = instance.workflow;
    const processor = plugin.createProcessor(instance.execution, { transaction });
    await processor.prepare();

    const assignees = processor.getParsedValue(instance.node.config.assignees ?? []);
    if (!assignees.includes(currentUser.id) || instance.userId !== currentUser.id) {
      return context.throw(403);
    }

    // NOTE: validate assignee
    await instance.update(
      {
        status: values.status,
        result: values.result,
      },
      {
        transaction,
      },
    );

    return instance;
  });

  // await transaction.commit();

  context.body = userJob;
  context.status = 202;

  await next();

  userJob.job.latestUserJob = userJob;

  // NOTE: resume the process and no `await` for quick returning
  plugin.resume(userJob.job);
}
