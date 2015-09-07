
mainApp.controller("AddStudentController",function($scope){
	$scope.message = "Add student form";
});

mainApp.controller("ViewStudentsController", function($scope){
	$scope.message = "View Students form";
});

mainApp.controller( "studentController", function($scope, $http) {

	var url = "http://192.168.1.64/angulartutorial.json";

	$http.get(url)
		.success( function(response) {
			$scope.students = response;
		});

	//$scope.student = {
	//	firstName: 'Pippo',
	//	lastName: 'Ripippo',
	//	email: "killpippo@hotmail.it",
	//	fees: 500,
	//	subjects:[
	//		{name:'Physics',marks:70},
	//		{name:'Chemistry',marks:80},
	//		{name:'Math',marks:65},
	//		{name:'English',marks:75},
	//		{name:'Hindi',marks:67}
	//	],
	//	fullName: function() {
	//		var studentObject;
	//		studentObject = $scope.student;
	//		return studentObject.firstName + " " + studentObject.lastName;
	//	}
	//};
	//
	//$scope.reset = function() {
	//	$scope.student.firstName = "Pippo";
	//	$scope.student.lastName = "Ripippo";
	//	$scope.student.email = "killpippo@hotmail.it";
	//};
});
