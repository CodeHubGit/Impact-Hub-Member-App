'use strict';

angular.module('impactHubMemberAppApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
