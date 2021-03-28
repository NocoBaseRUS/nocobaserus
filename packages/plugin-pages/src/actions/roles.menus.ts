import { Op } from 'sequelize';
import { actions } from '@nocobase/actions';
import _ from 'lodash';
import { flatToTree } from '../utils';

export async function list(ctx: any, next: actions.Next) {
  const { associated, associatedKey } = ctx.action.params;
  // TODO: 暂时 action 中间件就这么写了
  ctx.action.mergeParams({
    associated: null
  });
  await actions.common.list(ctx, async () => {
  });
  const MenuPermission = ctx.db.getModel('menus_permissions');
  const rows = ctx.body.rows as any;
  for (const row of rows) {
    row.setDataValue('associatedKey', associatedKey);
    const mp = await MenuPermission.findOne({
      where: {
        role_id: associatedKey,
        menu_id: row.id,
      },
    });
    row.setDataValue('accessible', !!mp);
  }
  ctx.body.rows = flatToTree(rows.map(item => item.toJSON()), {
    id: 'id',
    parentId: 'parent_id',
    children: 'children',
  });
  await next();
}
