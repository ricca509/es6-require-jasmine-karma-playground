'use strict';

module.exports = function (grunt) {
    return {
        options: grunt.file.readJSON('.jshintrc'),
        all: [            
            'src/**/*.js',
            'spec/**/*.js',
            'Gruntfile.js'
        ]
    };
};
