var app = angular.module('app', [
	'ngRoute',
	'dx',
	'chart.js'
]);

app.run(function($rootScope, $route){
		
	$rootScope.$route 	= $route;

});

app.config(function($httpProvider, ChartJsProvider) {

	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

	ChartJsProvider.setOptions({
    	chartColors: ['#FF5252', '#FF8A80'],
      	responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      	showLines: false
    });

});
