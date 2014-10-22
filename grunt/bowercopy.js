'use strict';

module.exports = function () {
    return {
        js: {
            options: {
                destPrefix: 'src/vendor'
            },
            files: {
                'traceur': 'traceur-runtime/traceur-runtime.js',
                'require': 'requirejs/require.js'
            }
        }
    };
};
