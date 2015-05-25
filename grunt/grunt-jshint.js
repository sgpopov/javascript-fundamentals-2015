module.exports = function (grunt) {
  'use strict';

  grunt.config('jshint', {
    config: {
      options: {
        reporter: require('jshint-stylish-ex')
      },
      src: ['src/**/*.js', 'spec/**/*.js']
    }
  });
};
