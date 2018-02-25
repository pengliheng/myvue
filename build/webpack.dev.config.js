const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			title: '后台管理系统 - Vue',
			favicon: './favicon.ico',
			template: './assets/template/index.ejs',
		}),
		new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('dev')})
	]
}
