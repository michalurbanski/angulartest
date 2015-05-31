// javascript code goes here

(function(){

	// this requires ng-app="mainModule" directive to be present in html
	// empty parentheses create new module, instead of searching one 
	// Note: when module is created in another file remember not use parentheses in module creation
	var app = angular.module("mainModule"); 

	// in current version of angular (v1.3.15) controller needs to be in a module
	var MainCtrl = function($scope, $interval, $location){

		var os = {
			src : "http://41.media.tumblr.com/802e00b2139ae9d77f172d586ab9fe42/tumblr_njplfbZDeI1s29bjuo1_1280.png",
			name: "Ubuntu"
		}

		$scope.search = function(username){
			if(countdownInterval){
				$interval.cancel(countdownInterval);
			}

			// TODO: code to go to correct route
			$location.path("/user/" + username);
		}

		var onErrorMessage = function(response){
			var message = "An error has occured";
			$scope.errorMessage = message;
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
		
		$scope.username = "angular";
		$scope.os = os; 
		$scope.countdown = 5; 

		startCountdown(); 
	};


	// required for module to work
	// in addition parameters are passed as array in case of minification of these file
	app.controller("MainCtrl", ["$scope",  "$interval","$location", MainCtrl]);	
}());