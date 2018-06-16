
app.config(function($routeProvider, $locationProvider, $httpProvider) {
  	//Allow Credentials
  	$httpProvider.defaults.withCredentials = true;
	$locationProvider.html5Mode({
    	enabled:true,
    	requireBase: false
	});
	// Rotas Angularjs
	$routeProvider
		.when('/',{
			templateUrl: 'views/home/index.html',
			controller: 'HomeController'
		})
		.when('/word-cloud',{
			templateUrl: 'views/cloud/index.html',
			controller: 'CloudController'
		})
		.when('/retweet',{
			templateUrl: 'views/retweet/index.html',
			controller: 'RetweetController'
		})
		.otherwise({redirectTo: '/'});

});