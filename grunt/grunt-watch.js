module.exports = function (grunt) {
  'use strict';

  grunt.config('watch', {
    js: {
      files: ['<%= eslint.default.src %>'],
      tasks: ['build']
    }
  });
};
