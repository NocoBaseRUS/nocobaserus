export function wrapMiddlewareWithLogging(fn, logger?) {
  if (process.env['LOGGER_LEVEL'] !== 'trace') {
    return fn;
  }

  const name = fn.name || fn.toString().slice(0, 100);

  return async (ctx, next) => {
    const reqId = ctx.reqId;

    if (!logger && !ctx.logger) {
      return await fn(ctx, next);
    }

    if (!logger && ctx.logger) {
      logger = ctx.logger;
    }

    logger.trace(`--> Entering middleware: ${name}`, { reqId });

    const start = Date.now();

    await fn(ctx, async () => {
      await next();
    });

    const ms = Date.now() - start;
    logger.trace(`<-- Exiting middleware: ${name} - ${ms}ms`, { reqId });
  };
}
