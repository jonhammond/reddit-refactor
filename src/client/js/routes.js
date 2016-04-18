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
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        logoutUser: function(authService, $location) {
          authService.logout();
          $location.path('/login');
        }
      }
    })
    .otherwise({redirectTo: '/login'})
    // $httpProvider.interceptors.push('authInterceptor');
});

app.run(function($rootScope, $location, $window, authService){
  // check if there is a token
  $rootScope.$on('$routeChangeStart', function(event, next, current){
    // if restricted and no token
    if(next.restricted && !$window.localStorage.getItem('token')) {
      $location.path('/login');
    }
    // if token and prevent logging in
    if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
      $location.path('/');
    }
  })
})
