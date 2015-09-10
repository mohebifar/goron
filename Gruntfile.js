module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      lib: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js', '**/*.jsx'],
          dest: 'lib'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'src/**/*.jsx'],
        tasks: ['babel:lib'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);
};