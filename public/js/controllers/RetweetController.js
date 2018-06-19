app.controller('RetweetController', ['$rootScope', '$location', '$scope', '$http', '$timeout', 'HomeFactory',
	function($rootScope, $location, $scope, $http, $timeout, HomeFactory){

	$rootScope.activetab 	= $location.path();
	var control 			= this;

	// control.getRt = function(dia){
	// 	$scope.rt = [];
	// 	HomeFactory.getRetweet(dia).then(function(response){
	// 		console.log(response.data.slice(0,5));
	// 		$scope.rtlista = response.data.slice(0,5);
	// 		$scope.mintense = []; $scope.intense = []; $scope.neu = [];
	// 		$scope.sum = [];
	// 		for (var i = 0 ; i < $scope.rtlista.length; i++){
	// 			$scope.sum.push($scope.rtlista[i].qtdretweet)
	// 			$scope.soma = $scope.sum.reduce((a,b) => a + b, 0);
	// 			if($scope.rtlista[i].intensidade == "++"){
	// 				$scope.number = $scope.rtlista[i].qtdretweet;
	// 				$scope.test = {
	// 					total1: dia,
	// 					older1: $scope.number,
	// 					perc1: parseFloat((($scope.number) * 100 / $scope.soma).toFixed(1)),
	// 					tag1: 'true',
	// 				}
	// 				$scope.mintense.push($scope.test);
	// 			}
	// 			if($scope.rtlista[i].intensidade == "+"){
	// 				$scope.number = $scope.rtlista[i].qtdretweet;
	// 				$scope.test = {
	// 					total2: dia,
	// 					older2: $scope.number,
	// 					perc2: parseFloat((($scope.number) * 100 / $scope.soma).toFixed(1)),
	// 					tag2: 'true',
	// 				}
	// 				$scope.intense.push($scope.test);
	// 			}
	// 			if($scope.rtlista[i].intensidade == "0"){
	// 				$scope.number = $scope.rtlista[i].qtdretweet;
	// 				$scope.test = {
	// 					total3: dia,
	// 					older3: $scope.number,
	// 					perc3: parseFloat((($scope.number) * 100 / $scope.soma).toFixed(1)),
	// 					tag3: 'true',
	// 				}
	// 				$scope.neu.push($scope.test);
	// 			}
	// 		}			
	// 		for(var i = 0 ; i < $scope.mintense.length; i++){
	// 			$scope.res = $scope.mintense[i];
	// 			$scope.rt.push($scope.res)
	// 		}
	// 		for(var i = 0 ; i < $scope.intense.length; i++){
	// 			$scope.res = $scope.intense[i];
	// 			$scope.rt.push($scope.res)
	// 		}
	// 		for(var i = 0 ; i < $scope.neu.length; i++){
	// 			$scope.res = $scope.neu[i];
	// 			$scope.rt.push($scope.res)
	// 		}
	// 		console.log($scope.rt)
	// 	},function(errResponse){
	// 		console.log(errResponse);
	// 	});
	// }
	// control.getRt("2018_04_24");
	// control.getRt("2018_04_25");
	// control.getRt("2018_04_26");
	// control.getRt("2018_04_27");
	// control.getRt("2018_04_29");
	// control.getRt("2018_04_30");
	// control.getRt("2018_05_01");
	// control.getRt("2018_05_02");

	var dataSource = [
		{total1: "25/04", older1: 14370, perc1: 25.2, tag1: "true"},
		{total2: "25/04", older2: 42637, perc2: 100, tag2: "true"},
		{total2: "25/04", older2: 14310, perc2: 20.1, tag2: "true"},
		{total1: "24/04", older1: 16437, perc1: 7.3, tag1: "true"},
		{total2: "24/04", older2: 43385, perc2: 23, tag2: "true"},
		{total3: "24/04", older3: 56266, perc3: 38.7, tag3: "true"},
		{total3: "24/04", older3: 19073, perc3: 9.2, tag3: "true"},
		{total1: "02/05", older1: 21883, perc1: 25.3, tag1: "true"},
		{total1: "02/05", older1: 12505, perc1: 11.1, tag1: "true"},
		{total3: "02/05", older3: 23047, perc3: 35.7, tag3: "true"},
		{total1: "26/04", older1: 16573, perc1: 41.6, tag1: "true"},
		{total2: "26/04", older2: 23262, perc2: 100, tag2: "true"},
		{total2: "26/04", older2: 16116, perc2: 28.8, tag2: "true"},
		{total2: "26/04", older2: 13606, perc2: 16, tag2: "true"},
		{total3: "26/04", older3: 15298, perc3: 21.5, tag3: "true"},
		{total3: "27/04", older3: 45781, perc3: 100, tag3: "true"},
		{total3: "27/04", older3: 8889, perc3: 16.3, tag3: "true"},
		{total3: "27/04", older3: 5174, perc3: 7, tag3: "true"},
		{total1: "01/05", older1: 57806, perc1: 46, tag1: "true"},
		{total2: "01/05", older2: 50627, perc2: 28.7, tag2: "true"},
		{total2: "01/05", older2: 21929, perc2: 9.8, tag2: "true"},
		{total3: "01/05", older3: 26594, perc3: 13.1, tag3: "true"},
		{total3: "30/04", older3: 63508, perc3: 25.7, tag3: "true"},
		{total3: "30/04", older3: 59175, perc3: 19.3, tag3: "true"},
		{total3: "29/04", older3: 124871, perc3: 100, tag3: "true"},
		{total3: "29/04", older3: 84132, perc3: 40.3, tag3: "true"},
		{total3: "29/04", older3: 55910, perc3: 21.1, tag3: "true"},
		{total3: "29/04", older3: 40652, perc3: 13.3, tag3: "true"},
		{total3: "29/04", older3: 34303, perc3: 10.1, tag3: "true"}
	];

	$scope.chartOptions = {
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'bubble'
        },
        title: 'Correlation between Total Population and\n Population with Age over 60',
        tooltip: {
            enabled: true,
            location: "edge",
            customizeTooltip: function (arg) {
                return {
                    text: arg.point.tag + '<br/>Total Population: ' + arg.argumentText + 'M <br/>Population with Age over 60: ' + arg.valueText + 'M (' + arg.size + '%)'
                };
            }
        },
        argumentAxis: {
            label: {
                customizeText: function () {
                    return this.value + 'M';
                }
            },
            title: 'Total Population'
        },
        valueAxis: {
            label: {
                customizeText: function () {
                    return this.value + 'M';
                }
            },
            title: 'Population with Age over 60'
        },
        legend: {
            position: 'inside',
            horizontalAlignment: 'left',
            border: {
                visible: true
            }
        },
        palette: ["#00ced1", "#008000", "#ffd700", "#ff7f50"],
        onSeriesClick: function(e) {
            var series = e.target;
            if (series.isVisible()) {
                series.hide();
            } else {
                series.show();
            }
        },
        "export": {
            enabled: false
        },
        series: [{
            name: 'Intensidade ++',
            argumentField: 'total1',
            valueField: 'older1',
            sizeField: 'perc1',
            tagField:'tag1'
        }, {
            name: 'Intensidade +',
            argumentField: 'total2',
            valueField: 'older2',
            sizeField: 'perc2',
            tagField: 'tag2'
        }, {
            name: 'Intensidade neutra',
            argumentField: 'total3',
            valueField: 'older3',
            sizeField: 'perc3',
            tagField: 'tag3'
        }]
    };
	
}]);