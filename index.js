const UserAgent = require('./lib/useragent');

module.exports = async (ctx, next) => {
  const header = ctx.request.header;
  const source = header['user-agent'];

  ctx.userAgent = new UserAgent(source, header);

  await next();
};
