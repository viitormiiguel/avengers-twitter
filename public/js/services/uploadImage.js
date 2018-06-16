app.service('uploadImage', ['$http', '$q', function($http, $q) {    

	this.fileImage = function(file, url){	 
		var fd = new FormData();
		fd.append('profile', file);
		$http.post(url, fd, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		})
		.then(function(response){
			return response.data;
		},function(errResponse){
			return $q.reject(errResponse);
		})
	}

}]);