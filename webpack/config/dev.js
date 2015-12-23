import path from 'path'
import webpack from 'webpack'
import config from '../../src/config'

export default {
	devtool: '#source-map',
	entry: {
		bundle: [
			'webpack-dev-server/client?'+config.url,
			'webpack/hot/only-dev-server',
			path.join(config.rootDir, 'src/bootstrap.js')
		]
	},
	output: {
		path: path.join(config.rootDir, 'static'),
		publicPath: config.url+'/static',
		filename: '[name].js'
	},
	plugins: [
        new webpack.HotModuleReplacementPlugin()
	],
	module: {
        preLoaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json'
            }
        ],
		loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(config.rootDir, 'src')
            }, {
                test: /\.styl$/,
                loaders: ['style', 'css?sourceMap', 'stylus?sourceMap'],
                include: path.join(config.rootDir, 'src')
            },  {
                test: /\.(jpe?g|png|eot|woff2?|ttf|gif|svg)(\?.*)?$/i,
                loader: 'file-loader',
                include: path.join(config.rootDir, 'src')
            }
        ]
	}
};