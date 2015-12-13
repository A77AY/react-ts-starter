import path from 'path';
import baseConfig from '../config';

let config = baseConfig;
let env = config.env = process.argv[2] ? process.argv[2] : "dev";
let isClient = config.isClient = (typeof document !== 'undefined');
let rootDir = config.rootDir = path.join(__dirname, '..');

config.dev.url = getUrl(config.dev);
config.prod.url = getUrl(config.prod);
config.webpack.url = getUrl(config.webpack);

config.protocol = baseConfig[env].protocol;
config.port = baseConfig[env].port;
config.host = baseConfig[env].host;
config.url = config[env].url;

function getUrl (config) {
    return config.protocol + "://" + config.host + (config.port?":"+config.port:"")
}

export default config;