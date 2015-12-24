import path from 'path';
import baseConfig from '../../config';

let env = process.argv[2] ? process.argv[2] : "dev";
let isClient = (typeof document !== 'undefined');
let rootDir = path.join(__dirname, '../..');

let config = {
    env: env,
    isClient: isClient,
    rootDir: rootDir,
    dev: {
        url: getUrl(baseConfig.dev)
    },
    prod: {
        url: getUrl(baseConfig.prod)
    },
    webpack: {
        url: getUrl(baseConfig.webpack)
    }
};

config.protocol = baseConfig[env].protocol;
config.port = baseConfig[env].port;
config.host = baseConfig[env].host;
config.url = config[env].url;

function getUrl (config) {
    return config.protocol + "://" + config.host + (config.port?":"+config.port:"")
}

export default Object.assign(baseConfig, config);