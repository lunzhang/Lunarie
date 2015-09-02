var Lunarie = angular.module('Lunarie', ['ngRoute']);
Lunarie.config(function($routeProvider) {
  $routeProvider
  // route for the home page
  .when('/lunarie', {
    templateUrl: 'templates/Lunarie.html',
    controller: 'LunarieController'
  })
  .otherwise({ redirectTo: '/lunarie'});
});
