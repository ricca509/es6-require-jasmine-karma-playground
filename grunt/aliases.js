'use strict';

module.exports = function() {
    return {
        default: ['dev'],
        dev: ['vendor', 'jshint', 'es6', 'watch'],
        test: ['vendor', 'es6', 'jasmine', 'open:spec'],
        testKarma: ['vendor', 'es6', 'karma'],
        vendor: ['clean:vendor', 'bowercopy:js'],
        es6: ['clean:build', 'shell:es6App', 'shell:es6Test']
    };
};
