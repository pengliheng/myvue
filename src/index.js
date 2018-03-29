// package
const express = require('express');
const path = require('path');
const device = require('express-device');


// local
const config = require('../config/server');

// application
const app = express();
// const server = http.createServer(app.callback());
const port = process.env.PORT || config.port;

app.use(express.static('dist'));
app.use(device.capture());


app.get('/:project', (req, res, next) => {
  const options = {
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  };
  if (req.device.type === 'phone') {
    options.root = path.resolve(`./dist/${req.params.project}/mobile`);
  } else {
    options.root = path.resolve(`./dist/${req.params.project}/pc`);
  }

  const fileName = 'index.html';
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});


// app
// // .use(bodyparser())
//   // .use(json())
//   // 将前端路由指向 index.html
//   .use(async (ctx, next) => {
//     if (/^\/xuduoduo/.test(ctx.request.url)) {
//       await koaSend(
//         ctx,
//         'index.html',
//         { root: path.resolve('./dist/xuduoduo') },
//       );
//     } else if (/^\/fst/.test(ctx.request.url)) {
//       await koaSend(
//         ctx,
//         'index.html',
//         { root: path.resolve('./dist/fst') },
//       );
//     } else if (/^\/lufa/.test(ctx.request.url)) {
//       await koaSend(
//         ctx,
//         'index.html',
//         { root: path.resolve('./dist/lufa') },
//       );
//     } else {
//       await next();
//     }
//   });

app.listen(port, () => {
  console.log(` >>> port: ${port}`);
  console.log(` >>> ENV: ${process.env.NODE_ENV}`);
});
