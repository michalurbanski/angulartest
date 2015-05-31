(function(){
	var app = angular.module("mainModule"); // use existing module

	var RepoController = function($scope, github, $routeParams){
		$scope.username = $routeParams.username;
		$scope.reponame = $routeParams.reponame;

		function onReposComplete(data){
			$scope.openIssuesCount = data.open_issues_count; 

			github.getContributors(data.contributors_url).then(onContributorsSuccess, onError);
		};

		function onContributorsSuccess(data){
			$scope.contributors = data; 
		};

		function onError(response){
			$scope.errorMessage = response;
		};

		github.getRepoDetails($scope.username, $scope.reponame).then(onReposComplete, onError);
	};

	app.controller("RepoController", ["$scope", "github","$routeParams", RepoController]);

}());