'use strict';

/**
 * @ngdoc directive
 * @name freeReviewsApp.directive:emojis
 * @description
 * # emojis
 */
angular.module('freeReviewsApp')
  .directive('emojis', function () {
    return {
      templateUrl: 'scripts/directives/emojis.html',
      restrict: 'E'
    };
  });
