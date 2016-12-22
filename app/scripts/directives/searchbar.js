'use strict';

/**
 * @ngdoc directive
 * @name freeReviewsApp.directive:searchBar
 * @description
 * # searchBar
 */
angular.module('freeReviewsApp')
  .directive('searchBar', function () {
    return {
      templateUrl: 'scripts/directives/searchBar.html',
      restrict: 'E'
    };
  });
