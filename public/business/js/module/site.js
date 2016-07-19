testController.controller("siteCtrl",["$scope",function($scope){
    $scope.pageClass = 'page-site';
	$scope.citys = $city;
	$scope.citysName = [];
	//选择省市
	$scope.cityName = function(index){
		$scope.province = $scope.citys[index].name;
		$scope.area(index);
	};
	//省市联动
	$scope.area = function(i){
		if($scope.citysName){
			$scope.citysName.length = 0;
		};
		if($scope.citys[i].name == $scope.citys[i].city[0].name){
			$scope.areas = $scope.citys[i].city[0].area;
			$scope.citysName = $scope.areas;
		}else{
			for(var j=0;j<$scope.citys[i].city.length;j++){
				$scope.citysName.push($scope.citys[i].city[j].name);
			};
			$scope.areas = $scope.citysName;
		};
	};
	$scope.cityName(0);
	//选择城市
	$scope.areasName = function(index){
		$scope.areaName = $scope.citysName[index];
	};
	$scope.areasName(0);
	
}]);