module.exports = function(grunt){

	grunt.initConfig({
    watch: {
      files: ['**/*'],
      tasks: ['jshint']
    },

    jshint: {
			all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint']);
};