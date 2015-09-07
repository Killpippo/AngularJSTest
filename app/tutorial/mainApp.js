
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(
	['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/addStudent', {
				templateUrl: 'addStudent.html',
				controller: 'AddStudentController'
			})
			.when('/viewStudents', {
				templateUrl: 'viewStudents.html',
				controller: 'ViewStudentsController'
			})
			.otherwise({
				redirectTo: '/addStudent'
			})
	}]
);

mainApp.factory('MathService', function() {
	var factory = {};

	factory.multiply = function( _a, _b ){
		return _a * _b;
	};

	return factory;
});


mainApp.service('CalcService', function(MathService) {
	this.square = function( _a ) {
		return MathService.multiply( _a, _a );
	};
});

