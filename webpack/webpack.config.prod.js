const webpack = require('webpack');
const defaultConfig = require('./webpack.config.default.js');
const config = defaultConfig;

const plugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
});

config.plugins = [plugin];

config.module.loaders.push({
    test: /\.js$|\.jsx$/,
    loaders: [
        'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
    ],
    exclude: /\.test.js$|[\\\/]node_modules[\\\/](?!mozu|react-redux-grid)/
});

module.exports = config;
