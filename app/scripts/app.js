'use strict';

/**
 * @ngdoc overview
 * @name freeReviewsApp
 * @description
 * # freeReviewsApp
 *
 * Main module of the application.
 */
angular
  .module('freeReviewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/servicedetail', {
        templateUrl: 'views/servicedetail.html',
        controller: 'ServicedetailCtrl',
        controllerAs: 'servicedetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
