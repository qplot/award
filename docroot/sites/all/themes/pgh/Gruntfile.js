//  Enter `npm install` from this directory

module.exports = function(grunt) {

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

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: false,
        },
      },
      // php: {
      //   files: ['templates/*.php'],
      // },
      js: {
        files: ['js/*.js'],
      },
      css: {
        files: ['css/*.css'],
      },
    }

  }); // end json

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s)
  grunt.registerTask('default', ['compass', 'watch']);

};