//  Type `npm install` from this directory

module.exports = function(grunt) {
  'strict';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    jshint: {
      src: ['js/script.js'],
    },

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['sass/*.scss', 'sass/**/*.scss'],
        tasks: ['compass', 'notify:sass'],
        options: {
          livereload: false,
        },
      },
      js: {
        files: ['js/*.js'],
        tasks: ['jshint', 'notify:js'],
      },
      css: {
        files: ['css/*.css'],
      },
    },

    notify: {
      js: {
        options: {
          //title: 'Task Complete',  // optional
          message: 'JSHint finished, no errors!', //required
        }
      },
      sass: {
        options: {
          //title: 'Task Complete',  // optional
          message: 'SASS/Compass finished compiling!', //required
        }
      },
    }

  }); // end json

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s)
  grunt.registerTask('default', ['compass', 'watch']);

};