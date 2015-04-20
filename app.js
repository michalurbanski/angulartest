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

		$scope.search = function(username){
			$http.get("https://api.github.com/users/" + username)
				.then(onUserComplete, onErrorMessage); // error function is optional as second argument				
		}

		var onUserComplete = function(response){
			$scope.user = response.data; // automatically deserialized by angular

			// additional call for repos based on user find result
			$http.get($scope.user.repos_url)
				.then(onRepos, onErrorRepos);
		}

		var onErrorMessage = function(response){
			var message = "An error has occured";
			$scope.errorMessage = message;
			console.log(message);
		}

		var onRepos = function(response){
			$scope.repos = response.data; 
		}

		var onErrorRepos = function(reason){
			$scope.errorMessage = "Cannot fetch user repos for user " + $scope.user.name;
		}

		var decrementCountdown = function(){
			$scope.countdown -= 1; 
			if($scope.countdown < 1) {
				$scope.search($scope.username);
			}
		}

		var startCountdown = function(){


		}

		$scope.message = "Hello angular";
		$scope.sortOrder = "-stargazers_count"; // allows dynamic sorting
		$scope.os = os; 
		$scope.countdown = 5; 

		startCountdown(); 
	};


	// required for module to work
	// in addition parameters are passed as array in case of minification of these file
	app.controller("MainCtrl", ["$scope","$http", MainCtrl]);	
}());