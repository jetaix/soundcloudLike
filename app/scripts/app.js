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
    'LocalStorageModule',
    'plangular'
  ])
  .config(function ($routeProvider, plangularConfigProvider) {
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

    plangularConfigProvider.clientId = '18aac409b20d5c245f44a29c6df94f01';
  });
