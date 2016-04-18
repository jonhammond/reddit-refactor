var app = angular.module('meanReddit', ['ngAnimate', 'ngRoute']);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = 'Angulaaaaaaaar!';
}])
