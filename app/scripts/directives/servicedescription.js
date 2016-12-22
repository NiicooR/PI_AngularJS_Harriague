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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the serviceDescription directive');
      }
    };
  });
