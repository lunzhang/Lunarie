var Loupon = angular.module('Loupon', ['ngRoute']);
Loupon.config(function($routeProvider) {
  $routeProvider
  // route for the home page
  .when('/loupon', {
    templateUrl: 'templates/Loupon.html',
    controller: 'LouponController'
  })
  .otherwise({ redirectTo: '/loupon'});
});
