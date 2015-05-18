// javascript code goes here

(function(){

	// this requires ng-app="mainModule" directive to be present in html
	var app = angular.module("mainModule", []); // empty parentheses create new module, instead of searching one 

	// in current version of angular (v1.3.15) controller needs to be in a module
	var MainCtrl = function($scope, github, $interval, $log, $location, $anchorScroll){

		var os = {
			src : "http://41.media.tumblr.com/802e00b2139ae9d77f172d586ab9fe42/tumblr_njplfbZDeI1s29bjuo1_1280.png",
			name: "Ubuntu"
		}

		$scope.search = function(username){
			$log.info("Searching for " + username);

			github.getUser(username).then(onUserComplete, onErrorMessage); // error function is optional as second argument				

			if(countdownInterval){
				$interval.cancel(countdownInterval);
			}
		}

		var onUserComplete = function(data){
			$scope.user = data; 

			// additional call for repos based on user find result
			github.getRepos($scope.user).then(onRepos, onErrorRepos);
		}

		var onErrorMessage = function(response){
			var message = "An error has occured";
			$scope.errorMessage = message;
			console.log(message);
		}

		var onRepos = function(data){
			$scope.repos = data; 

			// scroll down to results if not visible
			$location.hash("userDetails");
			$anchorScroll(); 
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

		// if user will search before countdown reaches 0 then countdown should not perform search again and stop the counter -> new variable introduced in order to cancel interval
		var countdownInterval = null; 
		var startCountdown = function(){
			countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown); 
		}

		$scope.message = "Hello angular";
		$scope.sortOrder = "-stargazers_count"; // allows dynamic sorting
		$scope.os = os; 
		$scope.countdown = 5; 

		startCountdown(); 
	};


	// required for module to work
	// in addition parameters are passed as array in case of minification of these file
	app.controller("MainCtrl", ["$scope","github", "$interval","$log","$location", "$anchorScroll", MainCtrl]);	
}());