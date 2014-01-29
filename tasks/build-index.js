module.exports = function(grunt) {
  grunt.registerTask('build-index', function() {
    var loom = require('loom');
    loom.appPath = 'js';
    loom('index', this.async());
  });
};
