export async function i18n(ctx, next) {
  const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
  ctx.i18n = i18n;
  ctx.t = i18n.t.bind(i18n);
  const lng =
    ctx.get('X-Locale') ||
    (ctx.request.query.locale as string) ||
    ctx.app.i18n.language ||
    ctx.acceptsLanguages().shift() ||
    'en-US';
  if (lng !== '*' && lng) {
    i18n.changeLanguage(lng);
  }
  await next();
}
