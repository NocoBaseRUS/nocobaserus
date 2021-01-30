import { Field } from '@nocobase/database';

export default async function(model, options) {
  if (!options.context) {
    return;
  }
  const { database: db } = model;
  const { context, transaction = await db.sequelize.transaction() } = options;
  const {
    state,
    action: {
      params: {
        actionName,
        resourceName,
      }
    }
  } = context;
  const ActionLog = db.getModel('action_logs');
  // 创建操作记录
  const log = await ActionLog.create({
    type: actionName,
    collection_name: model.constructor.name,
    index: model.get(model.constructor.primaryKeyAttribute),
    created_at: model.get('created_at')
  }, {
    transaction
  });

  const fields = db.getTable(model.constructor.name).getFields();
  const fieldsList = Array.from(fields.values());
  const changes = [];
  model.changed().forEach((key: string) => {
    const field = fields.get(key) || fieldsList.find((item: Field) => item.options.field === key);
    if (field) {
      changes.push({
        field: field.options,
        after: model.get(key)
      });
    }
  });
  // TODO(bug): state.currentUser 不是 belongsTo field 的 target 实例
  // Sequelize 会另外创建一个 Model 的继承类，无法直传 instance
  // await log.setUser(state.currentUser, { transaction });
  await log.updateAssociations({
    ...(state.currentUser ? { user: state.currentUser.id } : {}),
    changes
  }, {
    transaction
  });

  if (!options.transaction) {
    await transaction.commit();
  }
}
