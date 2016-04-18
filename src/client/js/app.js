var app = angular.module('meanReddit', ['ngRoute', 'ngAnimate']);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = 'Angulaaaaaaaar!';
}])
