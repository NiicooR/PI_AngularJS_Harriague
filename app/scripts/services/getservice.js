'use strict';

/**
 * @ngdoc service
 * @name freeReviewsApp.getService
 * @description
 * # getService
 * Service in the freeReviewsApp.
 */
 angular.module('freeReviewsApp')
 .constant('BDBasePath', '../../BD/generated.json')
 .constant('CategoriesBasePath', '../../BD/categories.json')
 .service('getService', function ($http, $q, BDBasePath, CategoriesBasePath) {

 	this.getMainInfo = function(index){
 		var defered = $q.defer();
 		var promise = defered.promise; 				
 		var el = $http.get(BDBasePath)
 		.success(function(data) { 
 			defered.resolve(getById(data, index)); 
 			
 		});
 		return promise; 				
 	};

 	this.getAllServices = function(){
 		return $http.get(BDBasePath); 			
 	}

 	this.getCategories = function(){
 		return $http.get(CategoriesBasePath); 			
 	}

 	function getById(arr, id) {    	
 		for (var i = 0, len = arr.length; i < len; i++) {
 			
 			if (arr[i].index == id) {        	
 				return arr[i];  
 			}
 		}
 	}
 })

