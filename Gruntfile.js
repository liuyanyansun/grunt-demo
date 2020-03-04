module.exports = function (grunt) {
	grunt.initConfig({
		htmlhint: {
			options:{
				htmlhint: './.htmlhintrc'
			},
			src:['*.html']
		}
	});
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.registerTask('default', ['htmlhint']);
};
