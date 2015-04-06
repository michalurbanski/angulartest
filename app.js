// javascript code goes here

(function(){

	// this requires ng-app="mainModule" directive
	var app = angular.module("mainModule", []); // empty parentheses create new module, instead of searching one 


	// in current version of angular controller needs to be in module
	var MainCtrl = function($scope){
		$scope.message = "Hello angular";
	};


	// required for module to work
	// in addition parameters are passed as array in case of minification of these file
	app.controller("MainCtrl", ["$scope", MainCtrl]);	
}());