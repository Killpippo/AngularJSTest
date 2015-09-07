
mainApp.controller("shapeController",function($scope) {
	$scope.message = "This is a shape";
	$scope.type = "undefined";
});

mainApp.controller("squareController",function($scope) {
	$scope.message = "This is a SQUARE";
	$scope.type = "SQUARE";
});

mainApp.controller("circleController",function($scope) {
	$scope.message = "This is a Circle";
	$scope.type = "CIRCLE";
});
