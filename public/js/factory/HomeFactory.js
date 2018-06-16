app.factory('HomeFactory', ['$http', '$q', '$rootScope', '$timeout', 
	function($http, $q, $rootScope, $timeout){

	var ing 	= "js/data/ing/";
	var hash 	= "js/data/hashtag/";
	var hora 	= "js/data/hora/";
	var retweet = "js/data/retweet/";
	var sent 	= "js/data/sent/";

	var headers = {
		'Access-Control-Allow-Origin': true,
		'Content-Type': 'application/json; charset=utf-8',
		'X-Requested-With': 'XMLHttpRequest'
	}
	
	return {
		getPolarity: function(data){
			return $http.get(sent + "vingadores_" + data + "_ing_sent.json").then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		getRetweet: function(data){
			return $http.get(retweet + "vingadores_" + data + "_ing_retweet.json").then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		getHashtag: function(data){
			return $http.get(hash + "vingadores_" + data + "_ing_hashtag.json").then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		}
	}

}]);