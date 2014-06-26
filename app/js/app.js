'use strict';


// Declare app level module which depends on filters, and services
angular.module('frontApp', [
  'ngRoute',
  'frontApp.filters',
  'frontApp.services',
  'frontApp.directives',
  'frontApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});

  $routeProvider.when('/',
  {
  	templateUrl: 'views/home/index.html',
  	controller: 'HomeController'
  });

  $routeProvider.when('/users/login',
  {
  	templateUrl: 'views/users/login.html',
  	controller: 'UsersController'
  });

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
