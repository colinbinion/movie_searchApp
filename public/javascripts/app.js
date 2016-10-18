var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('controllerName', function($scope, $http){
  $scope.$#(''(){
    fetch();
  });

  // $scope.search = "";

  function fetch () {
    $http.get("OMDB API" + scope.search + "tomatoes info http")
      .then(function(response) {
        $scope.details = response.data;
      });

  function fetch () {
    $http.get("OMDB API" + scope.search)
      .then(function(response) {
        $scope.details = response.data;
      });

  }
})
