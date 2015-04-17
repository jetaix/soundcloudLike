'use strict';

/**
 * @ngdoc service
 * @name libelikeApp.soundcloud
 * @description
 * # soundcloud
 * Service in the libelikeApp.
 */
angular.module('libelikeApp')
  .service('soundcloud', function ($q, localStorageService) {
    
    this.connect = function () {
      var deferred = $q.defer();

      SC.initialize({
        client_id: '18aac409b20d5c245f44a29c6df94f01',
        redirect_uri: 'http://127.0.0.1:9000/#/'
      });
    	

      SC.connect(function() {
        SC.get('/me', function(userInfo) {
          deferred.resolve(userInfo);
          localStorageService.set('userInfo', userInfo);
        });
      });

      return deferred.promise;

    };

    this.getUserLike = function (userId) {
      var deferredLike = $q.defer();

      SC.get('/users/'+userId+'/favorites', function(like) {
        deferredLike.resolve(like);
      });

      return deferredLike.promise;
    };
    


  });
