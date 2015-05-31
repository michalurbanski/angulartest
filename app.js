(function(){
	// this requires ng-app="mainModule" directive to be present in html
	// Create new module - this works when app.js file is above MainController.js in markup
	var app = angular.module("mainModule", ['ngRoute']); // empty parentheses create new module, instead of searching one 

	// configuration function used for routes
	app.config(function($routeProvider){
		$routeProvider
			.when('/main', 
			{
				templateUrl: 'main.html',
				controller: 'MainCtrl'
			})
			.otherwise(
			{
		 		redirectTo: '/main'
		 	}); 
	});
}());
