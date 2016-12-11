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

  MainCtrl.$inject = ['MainInfoService'];
  function MainCtrl(MainInfoService){
  	var main = this;

  	var promise = MainInfoService.getMainInfo();

	promise.then(function(response){
  		main.services = response.data;
  	})
  	.catch(function(error){
  		console.log("Something went terribly wrong, looking for services");
 	});

  
  	main.logCategories = function(){
  		var promise = MainInfoService.getCategories();

    promise.then(function (response) {
    	main.categories = response.data; 
      
    })
    .catch(function (error) {
      console.log("Something went terribly wrong, looking for categories");
    })
  	}
  	

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









//.controller('MainCtrl', function () {
// 	this.awesomeThings = [
//	'HTML5 Boilerplate',
// 	'AngularJS',
//	'Karma'
// 	];
// });
