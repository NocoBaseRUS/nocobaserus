export async function checkAction(ctx, next) {
  const currentRole = ctx.state.currentRole;
  if (currentRole) {
    const roleInstance = await ctx.db.getRepository('roles').findOne({
      filter: {
        name: currentRole,
      },
      appends: ['menuUiSchemas'],
    });

    ctx.body = {
      role: ctx.app.acl.getRole(currentRole).toJSON(),
      allowConfigure: roleInstance.get('allowConfigure'),
      roleMenuItemIds: roleInstance.get('menuUiSchemas').map((uiSchema) => uiSchema.get('x-uid')),
    };
  }

  await next();
}
