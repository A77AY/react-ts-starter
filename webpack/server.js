import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from '../src/config'
import webpackConfig from './config/dev'

// Run
new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    nodInfo: true,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}).listen(config.port, config.host, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.info('==> Webpack: ' + config.url);
});