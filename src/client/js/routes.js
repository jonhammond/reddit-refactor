app.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/main.html',
      controller: 'postsController'
    })
    .when('/login', {
      templateUrl: '../templates/login.html',
      controller: 'loginController'
    })
    .when('/register', {
      templateUrl: '../templates/register.html',
      controller: 'registerController'
    })
    .otherwise({redirectTo: '/login'})
});
