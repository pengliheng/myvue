const path = require('path');
const merge = require('webpack-merge');
const devWebpackConfig = require('./build/webpack.dev.config');
const prodWebpackConfig = require('./build/webpack.prod.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env =>
  merge(env.NODE_ENV === 'dev' ? devWebpackConfig : prodWebpackConfig, {
    entry: {
      app: ['./src/client/myvue/index.js'],
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, 'dist/myvue'),
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
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_module/,
          loader: 'babel-loader',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: {
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true,
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist/myvue']),
      new ExtractTextPlugin({
        filename: 'index.[hash].css',
      }),
      // new webpack.ProvidePlugin({
      // 	Vue: ['vue/dist/vue.esm.js', 'default']
      // })
    ],
  });
