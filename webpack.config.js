// package
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// local
const baseConfig = require('./build/webpack.base');
const xuduoduoConfig = require('./build/project/webpack.xuduoduo');
const fstConfig = require('./build/project/webpack.fst');
const lufaConfig = require('./build/project/webpack.lufa');

const devWebpackConfig = require('./build/webpack.dev');
const prodWebpackConfig = require('./build/webpack.prod');

module.exports = env => [
  // 如果不需要打包该项目，注释即可
  // merge(
  //   baseConfig,
  //   fstConfig,
  //   env.NODE_ENV === 'dev' ? devWebpackConfig : prodWebpackConfig,
  //   {
  //     plugins: [
  //       new CleanWebpackPlugin(['dist/fst']),
  //     ],
  //   },
  // ),
  // merge(
  //   baseConfig,
  //   xuduoduoConfig,
  //   env.NODE_ENV === 'dev' ? devWebpackConfig : prodWebpackConfig,
  //   {
  //     plugins: [
  //       new CleanWebpackPlugin(['dist/xuduoduo']),
  //     ],
  //   },
  // ),
  merge(
    baseConfig,
    lufaConfig,
    env.NODE_ENV === 'dev' ? devWebpackConfig : prodWebpackConfig,
    {
      plugins: [
        new CleanWebpackPlugin(['dist/lufa']),
      ],
    },
  ),
];
