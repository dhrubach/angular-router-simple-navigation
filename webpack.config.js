const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader' },
					{ loader: 'ts-loader' }
				]
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'tslint-loader'}
				],
				enforce: 'pre',
				options: {
					formattersDirectory: 'node_modules/custom-tslint-formatters/formatters',
					formatter: 'grouped'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:[
					{ loader: 'babel-loader' }
				]
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'raw-loader' }
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	},
	plugins: [],
	resolve: {
		extensions: [ '.ts', '.js']
	},
	devtool: 'cheap-module-source-map'
};

module.exports = config;
