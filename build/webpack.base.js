// package
const path = require('path');
const webpack = require('webpack');
// const merge = require('webpack-merge');
// const WebpackBar = require('webpackbar');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
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
        // images 作为公共资源。以便于其他项目再次使用的时候，用户不需要重新加载一次同样的图片
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: './images',
            name: '[name].[ext]',
          },
        }],
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
    new webpack.ProvidePlugin({
    	Vue: ['vue/dist/vue.esm.js', 'default'],
    }),
  ],
};
