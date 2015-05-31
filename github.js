// this is custom service for github logic

(function(){
	var github = function($http){

		var getUser = function(username){
			return $http.get("https://api.github.com/users/" + username)
				.then(function(response){
					return response.data; // returns data, not the promise
				});
		};

		var getRepos = function(user){
			return $http.get(user.repos_url)
				.then(function(response){
					return response.data; // automatically deserialized by angular
				});
		};

		// Gets details for specific repository
		var getRepoDetails = function(username, reponame){
			// sample url to repo details
			//https://api.github.com/repos/angular/angular-hint

			return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
				.then(function(response){
					return response.data; 
				});
		};

		var getContributors = function(contributorsUrl){
			return $http.get(contributorsUrl)
				.then(function(response){
					return response.data; 
				});
		};

		return {
			getUser: getUser, 
			getRepos: getRepos,
			getRepoDetails : getRepoDetails, 
			getContributors: getContributors
		};
	};

	// reference created in app.js module 
	var module = angular.module("mainModule"); // NOTE: there's no parentheses because module exists

	// register service with angular
	module.factory("github", github); // when referenced using "github", github object (return methods) will be returned 

}());