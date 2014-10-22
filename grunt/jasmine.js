'use strict';

module.exports = function () {
    return {
        options: {
            keepRunner: true
        },
        all: {
            src: [ 'build/src/**/*.js' ],
            options: {
                specs: [ 'build/spec/**/*.spec.js' ],
                helpers: [ 'src/vendor/traceur/traceur-runtime.js' ],
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfig: {
                        baseUrl: ''
                    }
                }
            }
        }
    };
};
