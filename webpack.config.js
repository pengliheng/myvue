// package
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

// local
const devWebpackConfig = require('./build/webpack.dev.config');
const prodWebpackConfig = require('./build/webpack.prod.config');

module.exports = env => merge(env.NODE_ENV === 'dev' ? devWebpackConfig : prodWebpackConfig, {
  context: __dirname,
  // 同时打包多个单页面应用。。。
  // 适应不同风格？vue/react/angular?????
  // 单页面SPA
  // 多页面  ，不存在的吧？
  entry: {
    xuduoduo: './src/client/xuduoduo/index.js',
    lufa: './src/client/lufa/index.js',
    fst: './src/client/fst/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/js/index.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    rules: [
      {
        test: /(\.less|\.css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
        // use: ['style-loader', 'css-loader', 'less-loader'],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        loader: 'babel-loader',
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          cssModules: {
            localIdentName: '[path][name]---[local]---[hash:base64:5]',
            camelCase: true,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'xuduoduo',
      // template: './src/client/xuduoduo/index.html',
      template: './assets/template/index.ejs',
      filename: 'xuduoduo/index.html',
      chunks: ['xuduoduo'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'lufa',
      filename: 'lufa/index.html',
      template: './assets/template/index.ejs',
      chunks: ['lufa'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'fst',
      filename: 'fst/index.html',
      template: './assets/template/index.ejs',
      chunks: ['fst'],
      chunksSortMode: 'manual',
    }),
    new ExtractTextPlugin('[name]/css/index.css'),
    // new WorkboxPlugin({
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    new webpack.ProvidePlugin({
    	Vue: ['vue/dist/vue.esm.js', 'default'],
    }),
  ],
});
