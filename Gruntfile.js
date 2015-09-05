/**
 * Created by pippo on 04/09/15.
 */
"use strict";

var $srcFiles = 'app/**/*.js';
var $testFiles = 'app/**/*_test.js';
var $outputDir = 'target';
var $junitResults = $outputDir + '/junit-test-results.xml';
var $jasmineSpecRunner = $outputDir + '/_SpecRunner.html';
var $coverageOutputDir = $outputDir + '/coverage';

module.exports = function(grunt) {

	grunt.initConfig({
			//pkg: grunt.file.readJSON('package.json'),

			jasmine : {
				pivotal: {
					src : [$srcFiles,'!app/bower_components/**/*.js'],
					options : {
						specs : $testFiles,
						//outfile: $jasmineSpecRunner,
						vendor : [
							'app/bower_components/angular/angular.js',
							'app/bower_components/angular-loader/angular-loader.js',
							'app/bower_components/angular-mocks/angular-mocks.js',
							'app/bower_components/angular-route/angular-route.js'
						]
					}
				}
				//src: $srcFiles,
				//options: {
				//  specs: $testFiles,
				//  outfile: $jasmineSpecRunner,
				//  keepRunner: 'true'  // keep SpecRunner/outfile file
				//}
			},

			jshint: {
				files: ['Gruntfile.js', $srcFiles, '!app/bower_components/**/*.js', '!app/components/**/*.js'],
				options: {
					jshintrc: '.jshintrc',
					globals: {
						jQuery: true
					}
				}
			},

			//karma: {
			//	unit: {
             //   	configFile: 'karma.conf.js'
            	//},
			//
			//  continuous: {
			//	singleRun: 'true',
			//	browsers: [ 'PhantomJS' ]
			//  },
			//
			//  options: {
			//	plugins: [
			//	  'karma-jasmine',
			//	  'karma-phantomjs-launcher',
			//	  'karma-junit-reporter',
			//	  'karma-coverage'
			//	],
			//	frameworks: [ 'jasmine' ],
			//	files: [ $srcFiles, $testFiles ],
			//	reporters: [ 'junit', 'coverage' ],
			//	  junitReporter: {
			//		outputFile: $junitResults
			//	  },
			//	preprocessors: {
			//	  // source files must be a literal string
			//	  'src/main/javascript/**/*.js': [ 'coverage' ]
			//	},
			//	coverageReporter: {
			//	  type: 'lcov',
			//	  dir: $coverageOutputDir
			//	}
			//  }
			//}

			watch: {
			  files: ['<%= jshint.files %>'],
			  tasks: ['jshint']
			}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	//grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['jshint','jasmine']);

	grunt.registerTask('test', ['jasmine']);

};