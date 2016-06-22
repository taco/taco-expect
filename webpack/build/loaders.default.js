module.exports = [
    {
        test: /\.styl$/,
        exclude: /[\\\/]node_modules[\\\/](?!mozu|react-redux-grid)/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
    }
];
