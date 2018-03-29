const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    pc: path.resolve('./src/pages/lufa/pc/index.js'),
    mobile: path.resolve('./src/pages/lufa/mobile/index.js'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'lufa/[name]/js/index.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'lufa',
      filename: 'lufa/pc/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['pc'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'lufa',
      filename: 'lufa/mobile/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['mobile'],
      chunksSortMode: 'manual',
    }),
    new ExtractTextPlugin('lufa/[name]/css/index.css'),
  ],
};
