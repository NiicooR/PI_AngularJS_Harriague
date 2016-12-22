'use strict';

/**
 * @ngdoc directive
 * @name freeReviewsApp.directive:reviewPost
 * @description
 * # reviewPost
 */
angular.module('freeReviewsApp')
  .directive('reviewPost', function () {
    return {
      templateUrl: 'scripts/directives/reviewPost.html',
      restrict: 'E'      
    };
  });
