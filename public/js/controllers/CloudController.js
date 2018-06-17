app.controller('CloudController', ['$rootScope', '$location', '$scope', '$http', '$timeout', 'HomeFactory',
	function($rootScope, $location, $scope, $http, $timeout, HomeFactory){

	$rootScope.activetab 	= $location.path();
	var control 			= this;

	control.getHashtag = function(dia){
		HomeFactory.getHashtag(dia).then(function(response){
			$scope.words = response.data;
			$scope.new_word = [];
			for(var i = 0; i < $scope.words.length; i++){
				$scope.versao = {
					text: $scope.words[i].user_name,
					size: $scope.words[i].qtdHashtag
				}
				$scope.new_word.push($scope.versao);
			}
			control.loadCloud();
		}, function (errResponse){
			console.log(errResponse);
		});
	}
	control.getHashtag("2018_04_21");

	$scope.Hashtag = function(dia){
		// $("#wordcloud").remove();
		var myNode = document.getElementById("wordcloud");
		myNode.innerHTML = '';
		HomeFactory.getHashtag(dia).then(function(response){
			$scope.words = response.data;
			$scope.new_word = [];
			for(var i = 0; i < $scope.words.length; i++){
				$scope.versao = {
					text: $scope.words[i].user_name,
					size: $scope.words[i].qtdHashtag
				}
				$scope.new_word.push($scope.versao);
			}
			control.loadCloud();
		}, function (errResponse){
			console.log(errResponse);
		});
	}

	control.loadCloud = function(){
		$timeout(function(){
			d3.wordcloud()
				.size([800,500])
				.fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
				.selector("#wordcloud")
	        	.words($scope.new_word)
	        	.onwordclick(function(d, i) {
	          		if (d.href) { window.location = d.href; }
		 	    })
	        	.start();
		}, 1000 );		
	}
	
}]);