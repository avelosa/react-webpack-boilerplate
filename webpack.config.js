var webpack = require('webpack');
var path = require('path');

var SOURCE_PATH = path.resolve(__dirname, 'src');
var BUILD_PATH = path.resolve(__dirname, 'build');

var config = {
	entry: SOURCE_PATH + '/index.jsx',
	output: {
		path: BUILD_PATH,
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SOURCE_PATH,
				loader: 'babel-loader'
			}
		]
	}
};

module.exports = config;
