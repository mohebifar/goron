module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        stage: 0,
        blacklist: [
          'es6.constants',
          'es6.blockScoping',
          'es6.forOf',
          'es6.spread',
          'es6.templateLiterals',
          'es6.parameters',
          'es6.arrowFunctions'
        ]
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js', '**/*.jsx'],
          dest: 'build'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'src/**/*.jsx'],
        tasks: ['babel'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);
};