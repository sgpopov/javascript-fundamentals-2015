// Karma configuration
module.exports = function (config) {
  'use strict';

  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],

    // list of files / patterns to load in the browser
    files: ['spec/**/*.spec.js'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,
    reporters: ['dots'],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    preprocessors: {
      'spec/**/*.spec.js': ['browserify']
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // browserify configuration
    browserify: {
      debug: true
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
