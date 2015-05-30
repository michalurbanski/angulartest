(function(){
	// this requires ng-app="mainModule" directive to be present in html
	var app = angular.module("mainModule", ['ngRoute']); // empty parentheses create new module, instead of searching one 

	// configuration function used for routes
	app.config(function($routeProvider){
		$routeProvider
			.when('/main', {
				templateUrl: 'main.html',
				controller: 'MainCtrl'
			})
			.otherwise(
			 	{
			 		redirectTo: '/main'
			 	}); 
	});
}());

// Apps

//var app = angular.module('app', []);

//var views = angular.module('views', []);

// (function(){
// var mainApp = angular.module('mainApp', ['ngRoute']);

// mainApp.config(function($routeProvider){
// 	$routeProvider.
// 		when('/developers', {templateUrl: 'dev.html', controller: 'DevCtrl'}).
// 		when('/designers',{templateUrl: 'design.html',controller: 'DesignCtrl'}).
// 		otherwise({ redirectTo: 'index.html' });
// 	//$locationProvider.html5Mode(true);
// });
// }());





//Controllers

// app.controller('MainController', function($scope) {
// 	$scope.text = "Hello World!!!!";
// });

// views.controller('DevCtrl', function($scope) {
// 	$scope.developers = [
// 	    {"name":"John", "family":"Doe"}, 
// 	    {"name":"Anna", "family":"Smith"},
// 	    {"name":"Peter", "family":"Jones"},
// 	    {"name":"Alex", "family":"Volkov"}, 
// 	    {"name":"Yaniv", "family":"Smith"},
// 	]
// });

// views.controller('DesignCtrl', function($scope) {
// 	$scope.designers = [
// 	    {"name":"Inna", "family":"Doe"}, 
// 	    {"name":"Anna", "family":"Smith"},
// 	    {"name":"Yafit", "family":"Jones"}
// 	]
// });
