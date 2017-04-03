'use strict';
angular.module('underratedYouth.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'vjA7hGXCc7GAgvIpaYUdAzv7VYMp5HZiJkCOwwlX6K'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });
    return deferred.promise;
  });
