'use strict';

/**
 * @ngdoc service
 * @name freeReviewsApp.getService
 * @description
 * # getService
 * Service in the freeReviewsApp.
 */
 angular.module('freeReviewsApp')
 .service('getService', function ($http, $q) {
 	


 	this.getMainInfo = function(index){
 		 var defered = $q.defer();
        var promise = defered.promise;
 		var element = [];
 		var el = $http.get('../../BD/generated.json')
 		.success(function(data) { 
 		 defered.resolve(getById(data, index)); 
 			//element = getById(data, index);
 			//return element; 
 		});

 			 return promise;			
 				
 	};

 	function getById(arr, id) {    	
 		for (var i = 0, len = arr.length; i < len; i++) {
 			
 			if (arr[i].index == id) {        	
 				return arr[i];  
 			}
 		}
 	}

 })

