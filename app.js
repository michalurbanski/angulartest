// javascript code goes here

(function(){

	// this requires ng-app="mainModule" directive
	var app = angular.module("mainModule", []); // empty parentheses create new module, instead of searching one 


	// in current version of angular controller needs to be in module
	var MainCtrl = function($scope){

		var os = {
			src : "http://41.media.tumblr.com/802e00b2139ae9d77f172d586ab9fe42/tumblr_njplfbZDeI1s29bjuo1_1280.png",
			name: "Ubuntu"

		}

		$scope.message = "Hello angular";
		$scope.os = os; 
	};


	// required for module to work
	// in addition parameters are passed as array in case of minification of these file
	app.controller("MainCtrl", ["$scope", MainCtrl]);	
}());