'use strict';

/**
 * @ngdoc directive
 * @name freeReviewsApp.directive:serviceDescription
 * @description
 * # serviceDescription
 */
angular.module('freeReviewsApp')
  .directive('serviceDescription', function () {
    return {
      templateUrl: 'scripts/directives/serviceDescription.html',
      restrict: 'E'
    };
  });
