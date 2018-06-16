app.controller('HomeController', ['$rootScope', '$location', '$scope', '$http', '$timeout', 'HomeFactory',
	function($rootScope, $location, $scope, $http, $timeout, HomeFactory){

	$rootScope.activetab 	= $location.path();
	var control 			= this;

	control.getPolarity = function(dia){
		$scope.a1 = [];
		HomeFactory.getPolarity(dia).then(function(response){
			// console.log(response.data);
			$scope.tamanho = response.data;
			$scope.cneg = []; $scope.cpos = []; $scope.cneu = [];  
			for (var i = 0 ; i < $scope.tamanho.length; i++){
				$scope.pol = parseFloat($scope.tamanho[i].compound);
				if($scope.pol < 0){
					$scope.cneg.push(i);
					$scope.neg = $scope.cneg.length;
				} 	
				if($scope.pol > 0){
					$scope.cpos.push(i);
					$scope.pos = $scope.cpos.length;
				}
				if($scope.pol == 0.0){
					$scope.cneu.push(i);
					$scope.neu = $scope.cneu.length;
				}
				$scope.dia = {
					state: dia,
					positivo: $scope.pos,
					negativo: $scope.neg,
					neutro: $scope.neu
				}
			}
			$scope.a1.push($scope.dia);
		}, function (errResponse){
			console.log(errResponse);
		});
	}
	control.getPolarity("2018_04_20");
	control.getPolarity("2018_04_21");
	control.getPolarity("2018_04_22");
	control.getPolarity("2018_04_23");
	control.getPolarity("2018_04_24");
	control.getPolarity("2018_04_25");
	control.getPolarity("2018_04_26");
	control.getPolarity("2018_04_27");
		
	$timeout(function(){
		$scope.chartOptions = {
	        dataSource: $scope.a1,
	        commonSeriesSettings: {
	            argumentField: "state",
	            type: "stackedBar"
	        },
	        series: [
	            { valueField: "positivo", name: "Positivos" },
	            { valueField: "negativo", name: "Negativos" },
	            { valueField: "neutro", name: "Neutros" }
	        ],
	        legend: {
	            verticalAlignment: "bottom",
	            horizontalAlignment: "center",
	            itemTextPosition: 'top'
	        },
	        valueAxis: {
	            title: {
	                text: "número de tweets"
	            },
	            position: "right"
	        },
	        title: "Polaridade de Tweets Avengers Infinity War antes da estreia",
	        "export": {
	            enabled: true
	        },
	        tooltip: {
	            enabled: true,
	            location: "edge",
	            customizeTooltip: function (arg) {
	                return {
	                    text:"Tweets " + arg.seriesName + ": " + arg.valueText
	                };
	            }
	        }
	    };
	}, 30000 );

	control.getPolarity2 = function(dia){
		$scope.a2 = [];
		HomeFactory.getPolarity(dia).then(function(response){
			// console.log(response.data);
			$scope.tamanho = response.data;
			$scope.cneg = []; $scope.cpos = []; $scope.cneu = [];  
			for (var i = 0 ; i < $scope.tamanho.length; i++){
				$scope.pol = parseFloat($scope.tamanho[i].compound);
				if($scope.pol < 0){
					$scope.cneg.push(i);
					$scope.neg = $scope.cneg.length;
				} 	
				if($scope.pol > 0){
					$scope.cpos.push(i);
					$scope.pos = $scope.cpos.length;
				}
				if($scope.pol == 0.0){
					$scope.cneu.push(i);
					$scope.neu = $scope.cneu.length;
				}
				$scope.dia = {
					state: dia,
					positivo: $scope.pos,
					negativo: $scope.neg,
					neutro: $scope.neu
				}
			}
			$scope.a2.push($scope.dia);
		}, function (errResponse){
			console.log(errResponse);
		});
	}

	control.getPolarity2("2018_04_29");
	control.getPolarity2("2018_04_30");
	control.getPolarity2("2018_05_01");
	control.getPolarity2("2018_05_02");
	control.getPolarity2("2018_05_03");
	control.getPolarity2("2018_05_04");

	$timeout(function(){
		$scope.chartOptions2 = {
	        dataSource: $scope.a2,
	        commonSeriesSettings: {
	            argumentField: "state",
	            type: "stackedBar"
	        },
	        series: [
	            { valueField: "positivo", name: "Positivos" },
	            { valueField: "negativo", name: "Negativos" },
	            { valueField: "neutro", name: "Neutros" }
	        ],
	        legend: {
	            verticalAlignment: "bottom",
	            horizontalAlignment: "center",
	            itemTextPosition: 'top'
	        },
	        valueAxis: {
	            title: {
	                text: "número de tweets"
	            },
	            position: "right"
	        },
	        title: "Polaridade de Tweets Avengers Infinity War após a estreia",
	        "export": {
	            enabled: true
	        },
	        tooltip: {
	            enabled: true,
	            location: "edge",
	            customizeTooltip: function (arg) {
	                return {
	                    text:"Tweets " + arg.seriesName + ": " + arg.valueText
	                };
	            }
	        }
	    };
	}, 30000 );

}]);