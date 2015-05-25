module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Register alias tasks.
  grunt.registerTask('build', ['eslint', 'jshint', 'karma']);

  grunt.registerTask('svil4ok', ['build', 'watch']);

  grunt.registerTask('default', ['build']);
};
