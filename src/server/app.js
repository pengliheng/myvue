// package
const Koa = require('koa');
const http = require('http');
const path = require('path');
const json = require('koa-json');
const koaSend = require('koa-send');
const logger = require('koa-logger');
const koaStatic = require('koa-static');
// const bodyparser = require('koa-bodyparser');

// local
const config = require('../../config/server');

// application
const app = new Koa();
const server = http.createServer(app.callback());
const port = process.env.PORT || config.port;

app
// .use(bodyparser())
  .use(json())
  .use(logger())
  .use(koaStatic(path.resolve('./dist'), {
    gzip: true,
  }))
  // 将前端路由指向 index.html
  .use(async (ctx, next) => {
    console.log(ctx.request.url);
    console.log(/xuduoduo/.test(ctx.request.url));
    if (/^\/xuduoduo/.test(ctx.request.url)) {
      await koaSend(
        ctx,
        'index.html',
        { root: path.resolve('./dist/xuduoduo') },
      );
    } else if (/^\/fst/.test(ctx.request.url)) {
      await koaSend(
        ctx,
        'index.html',
        { root: path.resolve('./dist/fst') },
      );
    } else if (/^\/lufa/.test(ctx.request.url)) {
      await koaSend(
        ctx,
        'index.html',
        { root: path.resolve('./dist/lufa') },
      );
    } else {
      await next();
    }
  });

server.listen(port, () => {
  console.log(` >>> port: ${port}`);
  console.log(` >>> ENV: ${process.env.NODE_ENV}`);
});
