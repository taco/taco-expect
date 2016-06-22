const reporters = ['spec'];
const argv = require('yargs').argv;
const specReporter = {
    maxLogLines: 20,
    suppressErrorSummary: true,
    suppressFailed: false,
    suppressPassed: false,
    suppressSkipped: true
};

if (argv['suppress-passed'] !== undefined) {
    specReporter.suppressPassed = !!argv['suppress-passed'];
}

if (argv['suppress-failed'] !== undefined) {
    specReporter.suppressFailed = !!argv['suppress-failed'];
}

if (argv['suppress-error-summary'] !== undefined) {
    specReporter.suppressErrorSummary = !!argv['suppress-error-summary'];
}

if (argv.coverage) {
    reporters.push('coverage');
}

module.exports = function exports(config) {
    config.set({
        browsers: ['jsdom'],
        frameworks: ['jasmine', 'es6-shim', 'expect', 'sinon-chai'],
        files: [
            './tests.webpack.js'
        ],
        singleRun: true,
        plugins: [
            'karma-sourcemap-loader',
            'karma-jasmine',
            'karma-babel-preprocessor',
            'karma-coverage',
            'karma-es6-shim',
            'karma-eslint',
            'karma-jsdom-launcher',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-expect',
            'karma-sinon-chai',
            'karma-spec-reporter'
        ],
        preprocessors: {
            '../test/tests.webpack.js': ['webpack']
        },
        reporters: reporters,
        logLevel: config.LOG_WARN,
        eslint: {
            stopOnError: true,
            stopOnWarning: true
        },
        specReporter: specReporter,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'html',
                    subdir: 'report-html'
                }
            ]
        },

        webpack: {
            target: 'web',
            node: {
                fs: 'empty'
            },
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'text-encoding': 'window',
                'jsdom': 'window'
            },
            module: {
                postLoaders: [

                ],
                loaders: [
                    {
                        test: /\.js$|\.jsx$/,
                        loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
                        exclude: /[\\\/]node_modules[\\\/]/
                    },
                    {
                        test: /\.styl$/,
                        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
                        exclude: /[\\\/]node_modules[\\\/]/
                    }
                ]
            },
            watch: false
        },
        webpackServer: {
            noInfo: true
        }
    });
};
