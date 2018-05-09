const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/, loader: 'babel-loader',
				exclude: path.resolve(__dirname, "node_modules"), include: path.resolve(__dirname, "src")
			},
			{
				test: /\.css$/, loader: 'style-loader!css-loader'
			},
			{
				test: /\.html$/, loader: 'html-loader'
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
			minify: {
				removeComments: true,
				// collapseWhitespace: true
			}
		})
	]
}