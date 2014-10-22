'use strict';

module.exports = function () {
    return {
        options: {
            stderr: false
        },
        es6App: {
            command: 'node_modules/.bin/traceur --modules=amd --source-maps inline --dir src build/src'
        },
        es6Test: {
            command: 'node_modules/.bin/traceur --modules=amd --source-maps inline --dir spec build/spec'
        }
    };
};
