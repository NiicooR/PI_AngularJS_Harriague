'use strict';

/**
 * @ngdoc directive
 * @name freeReviewsApp.directive:serviceCalification
 * @description
 * # serviceCalification
 */
angular.module('freeReviewsApp')
  .directive('serviceCalification', function () {
    return {
      templateUrl: 'scripts/directives/serviceCalification.html',
      restrict: 'E'      
    };
  });
