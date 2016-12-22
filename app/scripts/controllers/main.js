'use strict';

/**
 * @ngdoc function
 * @name freeReviewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freeReviewsApp
 */
 angular.module('freeReviewsApp')  
 .controller('MainCtrl', MainCtrl)

 MainCtrl.$inject = ['$scope', 'getService'];
 function MainCtrl($scope, getService){
   $scope.main = this;
   $scope.selectedCategory = null;


   getService.getCategories().then(function(response) {

    $scope.main.categories = response.data;
  });


   getService.getAllServices().then(function(response) {

    $scope.main.services = response.data;
  });


 };
