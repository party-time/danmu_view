var testController = angular.module("testController",[]);
testController.controller("homeCtrl",["$scope",function($scope){
    $scope.pageClass = 'page-home';
	$scope.counts = [10,20,30,40,50];
	$scope.selectFun = function(val){
		$scope.selectVal = val.target.innerHTML;
	};
}]);
//var timer = angular.module('your-app', ['']);