var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
   // router 
  $routeProvider
  // circles page
  .when('/info', {
    templateUrl: './ng/templates/info.html',
    controller: 'infoController'
    })
  // selling page
  .when('/blog', {
    templateUrl: './ng/templates/blog.html',
    controller: 'blogController'
    })
  // socket io page
  .when('/socket', {
    templateUrl: './ng/templates/socket.html',
    controller: 'socketController'
    })
  .when('/react', {
    templateUrl: '/ng/templates/react.html',
    controller:'reactController'
    })
  .otherwise({ redirectTo: '/react'});
});
