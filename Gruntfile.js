module.exports = function (grunt) {
	grunt.initConfig({
		eslint: {
			options:{
				eslintrc: './.eslintrc.json'
			},
			target:['*.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-eslint');
	grunt.registerTask('default', ['eslint']);
};
