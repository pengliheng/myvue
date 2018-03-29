const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    xuduoduo: './src/pages/xuduoduo/index.js',
    lufa: './src/pages/lufa/index.js',
    fst: './src/pages/fst/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'xuduoduo',
      filename: 'xuduoduo/index.html',
      template: './src/assets/template/index.ejs',
      chunks: ['xuduoduo'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'lufa',
      filename: 'lufa/index.html',
      template: './src/assets/template/index.ejs',
      chunks: ['lufa'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'fst',
      filename: 'fst/index.html',
      template: './src/assets/template/index.ejs',
      chunks: ['fst'],
      chunksSortMode: 'manual',
    }),
  ],
};
