// javascript code goes here

(function(){

	// this requires ng-app="mainModule" directive
	var app = angular.module("mainModule", []); // empty parentheses create new module, instead of searching one 


	// in current version of angular controller needs to be in module
	var MainCtrl = function($scope, $http){

		var os = {
			src : "http://41.media.tumblr.com/802e00b2139ae9d77f172d586ab9fe42/tumblr_njplfbZDeI1s29bjuo1_1280.png",
			name: "Ubuntu"
		}

		var onUserComplete = function(response){
			$scope.user = response.data; // automatically deserialized by angular
		}

		var onErrorMessage = function(response){
			console.log("An error has occured");
		}

		$scope.message = "Hello angular";
		$scope.os = os; 

		$http.get("https://api.github.com/users/michalurbanski")
				.then(onUserComplete, onErrorMessage); // error function is optional as second argument	
	};


	// required for module to work
	// in addition parameters are passed as array in case of minification of these file
	app.controller("MainCtrl", ["$scope","$http", MainCtrl]);	
}());