// javascript code goes here

(function(){

	// this requires ng-app="mainModule" directive to be present in html
	var app = angular.module("mainModule"); // empty parentheses create new module, instead of searching one 

	// in current version of angular (v1.3.15) controller needs to be in a module
	var UserController = function($scope, github, $routeParams){

		var onUserComplete = function(data){
			$scope.user = data; 

			// additional call for repos based on user find result
			github.getRepos($scope.user).then(onRepos, onErrorRepos);
		}

		var onErrorMessage = function(response){
			var message = "An error has occured";
			$scope.errorMessage = message;
		}

		var onRepos = function(data){
			$scope.repos = data; 
		}

		var onErrorRepos = function(reason){
			$scope.errorMessage = "Cannot fetch user repos for user " + $scope.user.name;
		}
		
		$scope.sortOrder = "-stargazers_count"; // allows dynamic sorting
		$scope.username = $routeParams.username; 

		github.getUser($scope.username).then(onUserComplete, onErrorMessage);
	};


	// required for module to work
	// in addition parameters are passed as array in case of minification of these file
	app.controller("UserController", ["$scope","github", "$routeParams", UserController]);	
}());