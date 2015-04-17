'use strict';

/**
 * @ngdoc overview
 * @name libelikeApp
 * @description
 * # libelikeApp
 *
 * Main module of the application.
 */
angular
  .module('libelikeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/callback', {
        templateUrl: 'views/callback.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
