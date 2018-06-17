app.controller('HomeController', ['$rootScope', '$location', '$scope', '$http', '$timeout', 'HomeFactory',
	function($rootScope, $location, $scope, $http, $timeout, HomeFactory){

	$rootScope.activetab 	= $location.path();
	var control 			= this;

	// control.getPolarityPos = function(dia){
	// 	$scope.dataSource = [];
	// 	HomeFactory.getPolarity(dia).then(function(response){
	// 		$scope.tamanho = response.data;
	// 		$scope.cneg = []; $scope.cpos = []; $scope.cneu = [];  
	// 		for (var i = 0 ; i < $scope.tamanho.length; i++){
	// 			$scope.pol = parseFloat($scope.tamanho[i].compound);
	// 			if($scope.pol < 0){
	// 				$scope.cneg.push(i);
	// 				$scope.neg = $scope.cneg.length;
	// 			} 	
	// 			if($scope.pol > 0){
	// 				$scope.cpos.push(i);
	// 				$scope.pos = $scope.cpos.length;
	// 			}
	// 			if($scope.pol == 0.0){
	// 				$scope.cneu.push(i);
	// 				$scope.neu = $scope.cneu.length;
	// 			}
	// 			$scope.dia = {
	// 				state: dia,
	// 				pos: $scope.pos,
	// 				neg: $scope.neg,
	// 				neu: $scope.neu
	// 			}
	// 		}
	// 		$scope.dataSource.push($scope.dia);
	// 		console.log($scope.dataSource)
	// 	}, function (errResponse){
	// 		console.log(errResponse);
	// 	});
	// }
	// control.getPolarityPos("2018_04_20");
	// control.getPolarityPos("2018_04_21");
	// control.getPolarityPos("2018_04_22");
	// control.getPolarityPos("2018_04_23");
	// control.getPolarityPos("2018_04_24");
	// control.getPolarityPos("2018_04_25");
	// control.getPolarityPos("2018_04_26");
	// control.getPolarityPos("2018_04_27");

	// control.getPolarity2 = function(dia){
	// 	$scope.a2 = [];
	// 	HomeFactory.getPolarity(dia).then(function(response){
	// 		$scope.tamanho = response.data;
	// 		$scope.cneg = []; $scope.cpos = []; $scope.cneu = [];  
	// 		for (var i = 0 ; i < $scope.tamanho.length; i++){
	// 			$scope.pol = parseFloat($scope.tamanho[i].compound);
	// 			if($scope.pol < 0){
	// 				$scope.cneg.push(i);
	// 				$scope.neg = $scope.cneg.length;
	// 			} 	
	// 			if($scope.pol > 0){
	// 				$scope.cpos.push(i);
	// 				$scope.pos = $scope.cpos.length;
	// 			}
	// 			if($scope.pol == 0.0){
	// 				$scope.cneu.push(i);
	// 				$scope.neu = $scope.cneu.length;
	// 			}
	// 			$scope.dia = {
	// 				state: dia,
	// 				positivo: $scope.pos,
	// 				negativo: $scope.neg,
	// 				neutro: $scope.neu
	// 			}
	// 		}
	// 		$scope.a2.push($scope.dia);
	// 	}, function (errResponse){
	// 		console.log(errResponse);
	// 	});
	// }
	// control.getPolarity2("2018_04_29");
	// control.getPolarity2("2018_04_30");
	// control.getPolarity2("2018_05_01");
	// control.getPolarity2("2018_05_02");
	// control.getPolarity2("2018_05_03");
	// control.getPolarity2("2018_05_04");

	$scope.antes = [
		{state: "20/04", pos: 14096, neg: 16953, neu: 9711},
		{state: "21/04", pos: 31381, neg: 39273, neu: 21012},
		{state: "22/04", pos: 45050, neg: 50957, neu: 39400},
		{state: "23/04", pos: 68608, neg: 86157, neu: 63413},
		{state: "24/04", pos: 267035, neg: 238571, neu: 211292},
		{state: "25/04", pos: 196448, neg: 237083, neu: 104346},
		{state: "26/04", pos: 209628, neg: 272942, neu: 120521},
		{state: "27/04", pos: 187129, neg: 359409, neu: 138565}
	];

	$scope.depois = [
		{state: "29/04", pos: 278960, neg: 548341, neu: 274631},
		{state: "30/04", pos: 371220, neg: 727015, neu: 471110},
		{state: "01/05", pos: 299416, neg: 624521, neu: 286139},
		{state: "02/05", pos: 210827, neg: 413468, neu: 147255},
		{state: "03/05", pos: 163894, neg: 313068, neu: 110622},
		{state: "04/05", pos: 97356, neg: 237231, neu: 82949}
	];

	control.activeChartBef = function(dataSource){		
		$scope.chartOptions = {
	        dataSource: dataSource,
	        commonSeriesSettings: {
	            argumentField: "state",
	            type: "stackedBar"
	        },
	        series: [
	            { valueField: "pos", name: "Positivo" },
	            { valueField: "neg", name: "Negativo" },
	            { valueField: "neu", name: "Neutro" }
	        ],
	        legend: {
	            verticalAlignment: "top",
	            horizontalAlignment: "center",
	            itemTextPosition: 'top'
	        },
	        valueAxis: {
	            title: {
	                // text: "millions"
	            },
	            position: "left"
	        },
	        title: "Tweets antes da estréia",
	        "export": {
	            enabled: false
	        },
	        tooltip: {
	            enabled: true,
	            location: "edge",
	            customizeTooltip: function (arg) {
	                return {
	                    text: " Tweets " +arg.seriesName + ": " +arg.valueText
	                };
	            }
	        }
	    };
	}
	control.activeChartBef($scope.antes);

	control.activeChartAft = function(dataSource){
		$scope.chartOptions2 = {
	        dataSource: dataSource,
	        commonSeriesSettings: {
	            argumentField: "state",
	            type: "stackedBar"
	        },
	        series: [
	            { valueField: "pos", name: "Positivo" },
	            { valueField: "neg", name: "Negativo" },
	            { valueField: "neu", name: "Neutro" }
	        ],
	        legend: {
	            verticalAlignment: "top",
	            horizontalAlignment: "center",
	            itemTextPosition: 'top'
	        },
	        valueAxis: {
	            title: {
	                // text: "millions"
	            },
	            position: "left"
	        },
	        title: "Tweets após estréia",
	        "export": {
	            enabled: false
	        },
	        tooltip: {
	            enabled: true,
	            location: "edge",
	            customizeTooltip: function (arg) {
	                return {
	                    text: " Tweets " +arg.seriesName + ": " +arg.valueText
	                };
	            }
	        }
	    };
	}
	control.activeChartAft($scope.depois);

}]);