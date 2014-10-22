'use strict';

module.exports = function () {
    return {
        options: {
            browsers: ['Chrome'],
            port: 9999,
            logLevel: 'INFO',
            colors: true,
            singleRun: true,
            reporters: ['mocha']
        },
        unit: {
            options: {
                frameworks: ['jasmine', 'requirejs', 'traceur'],
                preprocessors: {
                    'src/**/*.js': ['traceur'],
                    'spec/**/*.js': ['traceur']
                },
                files: [
                    'test-main.js',
                    { pattern: 'src/**/*.js', included: false },
                    { pattern: 'spec/**/*.js', included: false },

                    { pattern: 'node_modules/assert/dist/amd/**/*.js', included: false }
                ],
                traceurPreprocessor: {
                    options: {
                        modules: 'amd',
                        sourceMap: true
                    }
                }
            }
        }
    };
};
