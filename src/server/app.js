// package
const Koa = require('koa');
const http = require('http');
const path = require('path');
const koaSend = require('koa-send');
const logger = require('koa-logger');
const KoaStatic = require('koa-static');
const bodyparser = require('koa-bodyparser');

// local
const config = require(path.resolve('./config/server'));

// application
const port = process.env.PORT || config.port;


const myvue = new Koa();
myvue
  .use(logger())
  .use(KoaStatic(path.resolve('./dist/myvue')))
// 将前端路由指向 index.html
  .use(async (ctx, next) => {
    if (!/\./.test(ctx.request.url)) {
      await koaSend(
        ctx,
        'index.html',
        {
          root: path.resolve('./dist/myvue'),
          gzip: true,
        },
      );
    } else {
      await next();
    }
  });


http.createServer(myvue.callback()).listen(8001, () => {
  console.log(` myvue项目监听端口: ${8001}`);
});
