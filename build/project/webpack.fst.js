const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    pc: path.resolve('./src/pages/fst/pc/index.js'),
    mobile: path.resolve('./src/pages/fst/mobile/index.js'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'fst/[name]/js/index.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'fst',
      filename: 'fst/pc/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['pc'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'fst',
      filename: 'fst/mobile/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['mobile'],
      chunksSortMode: 'manual',
    }),
    new ExtractTextPlugin('fst/[name]/css/index.css'),
  ],
};
