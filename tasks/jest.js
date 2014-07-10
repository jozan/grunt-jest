'use strict';

module.exports = function(grunt) {

  grunt.registerTask('jest', 'Run tests with Jest.', function() {
    require('jest-cli').runCLI(this.options(), __dirname, this.async());
  });

};
