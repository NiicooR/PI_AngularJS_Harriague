'use strict';

/**
 * @ngdoc function
 * @name freeReviewsApp.controller:ServicedetailCtrl
 * @description
 * # ServicedetailCtrl
 * Controller of the freeReviewsApp
 */
 angular.module('freeReviewsApp')
 .controller('ServicedetailCtrl', function ($routeParams, getService, $scope) {
  	//console.log('ID: ' + $routeParams.serviceId); 
  	
  	var promise = getService.getMainInfo($routeParams.serviceId);
  	
  	promise.then(function(response){  		
  		$scope.services = response;
      
  	})
  	.catch(function(error){
  		console.log("Something went terribly wrong, looking for services");
    })

    $scope.publish = function() {      
      $scope.services.reviews.push($scope.review);     

      getService.postReview($scope.review);
      $scope.review = '';

    }

  });
