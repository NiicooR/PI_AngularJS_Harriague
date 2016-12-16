'use strict';

/**
 * @ngdoc function
 * @name freeReviewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freeReviewsApp
 */
 angular.module('freeReviewsApp')
 .service('MainInfoService', MainInfoService) 
 .constant('BDBasePath', '../../BD/generated.json')
 .constant('CategoriesBasePath', '../../BD/categories.json')
.controller('MainCtrl', MainCtrl)

  MainCtrl.$inject = ['$scope','MainInfoService'];
  function MainCtrl($scope,MainInfoService){
  	$scope.main = this;
    $scope.selectedCategory = null;

  	var promise = MainInfoService.getMainInfo();

	promise.then(function(response){
  		$scope.main.services = response.data;
  	})
  	.catch(function(error){
  		console.log("Something went terribly wrong, looking for services");
 	})

  
  	
  var promise2 = MainInfoService.getCategories();

    promise2.then(function (response) {
    	$scope.main.categories = response.data; 
      
    })
    .catch(function (error) {
      console.log("Something went terribly wrong, looking for categories");
    })


$scope.searchParams = {
    company: '',
    
  };
  
  }


MainInfoService.$inject = ['$http', 'BDBasePath', 'CategoriesBasePath'];
function MainInfoService($http, BDBasePath, CategoriesBasePath ){
	var service = this;

	service.getMainInfo = function(){
		var response = $http({
      method: "GET",
      url: (BDBasePath)
    });
		return response;
	};

 	service.getCategories = function(){
 		var response = $http({
      method: "GET",
      url: (CategoriesBasePath)
    });
		return response;
	};
 	



  };
