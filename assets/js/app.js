var app = angular.module('todoMVC', [
  'ui.router',
  'ngAnimate',
  'ui.utils',
  'satellizer'
]);

app.config(function($stateProvider, $authProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/#");
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })
        .state('/login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
});