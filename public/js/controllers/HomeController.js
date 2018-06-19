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
	// 		console.log($scope.a2)
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
		{state: "20/04", pos: 19709, neg: 5452, neu: 15599},
		{state: "21/04", pos: 42276, neg: 12986, neu: 36404},
		{state: "22/04", pos: 55397, neg: 18336, neu: 61674},
		{state: "23/04", pos: 81816, neg: 36454, neu: 99908},
		{state: "24/04", pos: 258376, neg: 129003, neu: 329519},
		{state: "25/04", pos: 199190, neg: 84258, neu: 254429},
		{state: "26/04", pos: 265065, neg: 100184, neu: 237842},
		{state: "27/04", pos: 246126, neg: 160846, neu: 278131}
	];

	$scope.depois = [
		{state: "29/04", pos: 363795, neg: 231265, neu: 506872},
		{state: "30/04", pos: 448868, neg: 348742, neu: 771735},
		{state: "01/05", pos: 372368, neg: 308646, neu: 529062},
		{state: "02/05", pos: 259038, neg: 238169, neu: 274343},
		{state: "03/05", pos: 194307, neg: 191772, neu: 201505},
		{state: "04/05", pos: 117273, neg: 150002, neu: 150261}
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