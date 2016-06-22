const loaders = require('./build/loaders.default.js');
const path = require('path');

/**
* resolve.alias ensures that only one instance of React will be generated
**/

/**
* target: 'web' ensures that node libraries will not be built into the bundle
**/

/**
* resolveLoader ensures that only node modules
* relative to this application will be used
* which will include npm linked packages
**/

/**
* resolve.alias ensures that all apps use the same instances
* of the listed packages
* - react doesnt work when multiple instances are running
* - also this lessens the package weight for sub applications
*   as they dont require these dependencies
**/

module.exports = {
    entry: [
        './src/entry.js'
    ],
    output: {
        path: path.join(__dirname, '/../lib/'),
        filename: 'bundle.js',
        publicPath: 'lib/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            react: path.join(__dirname, '/../node_modules/react'),
            'react-redux': path.join(__dirname, '/../node_modules/react-redux'),
            'react-dom': path.join(__dirname, '/../node_modules/react-dom'),
            'redux-thunk': path.join(__dirname, '/../node_modules/redux-thunk'),
            'react-hot-loader':
                path.join(__dirname, '/../node_modules/react-hot-loader'),
            immutable: path.join(__dirname, '/../node_modules/immutable')
        },
        modulesDirectories: [
            path.join(__dirname, '/../node_modules')
        ],
        fallback: [
            path.resolve(__dirname, '/../node_modules/')
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, '/../node_modules'),
        fallback: [
            path.resolve(__dirname, '/../node_modules/')
        ]
    },
    module: {
        loaders: loaders
    },
    stylus: {
        'import': [
            path.join(__dirname, 'build/variables.styl')
        ]
    }
};
