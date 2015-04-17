'use strict';

/**
 * @ngdoc function
 * @name libelikeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the libelikeApp
 */
angular.module('libelikeApp')
  .controller('MainCtrl', function ($scope, localStorageService, soundcloud) {

    $scope.connect = false;

    // Check if user data is stocked into a locastorage

    if(localStorageService.get('connectionStatus') === 'true') {
      $scope.connect = true;
      $scope.userInfo = localStorageService.get('userInfo');
      $scope.likes = localStorageService.get('userLikes');
    } 

    $scope.connectSC = function () {
      soundcloud.connect().then(function(userInfo){

        $scope.connect = true;
        $scope.userInfo = userInfo;

        localStorageService.set('connectionStatus', 'true');

        soundcloud.getUserLike($scope.userInfo.id).then(function(userLikes){
          $scope.likes = userLikes;

          localStorageService.set('userLikes', userLikes);

        });

      });
  	};

    $scope.logout = function() {
      $scope.connect = false;
      localStorageService.remove('connectionStatus');
      localStorageService.remove('userInfo');
      localStorageService.remove('userLikes');
    };

  });
