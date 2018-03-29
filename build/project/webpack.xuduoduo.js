const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    pc: path.resolve('./src/pages/xuduoduo/pc/index.js'),
    mobile: path.resolve('./src/pages/xuduoduo/mobile/index.js'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'xuduoduo/[name]/js/index.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'xuduoduo',
      filename: 'xuduoduo/pc/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['pc'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'xuduoduo',
      filename: 'xuduoduo/mobile/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['mobile'],
      chunksSortMode: 'manual',
    }),
    new ExtractTextPlugin('xuduoduo/[name]/css/index.css'),
  ],
};
