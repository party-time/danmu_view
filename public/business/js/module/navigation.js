testController.controller("navigationCtrl",["$scope",function($scope){
    $scope.pageClass = 'page-navigation';
	$scope.id = 0;
	$scope.href = location.hash.replace(/\//g, ',').split(",");
	$scope.navs = [
		{id:1,path:'today',text:'今日活动',className:false},
		{id:2,path:'site',text:'场地管理',className:false},
		{id:3,path:'session',text:'场次管理',className:false},
		{id:4,path:'personnel',text:'人员管理',className:false},
		{id:5,path:'preset',text:'预置弹幕管理',className:false}
	];
	for(var i=0;i<$scope.navs.length;i++){
		if($scope.navs[i].path == $scope.href[1]){
		   $scope.navs[i].className = true;
		};
	};
	$scope.click = function (id){
		$scope.navs[$scope.id].className = false;
		$scope.navs[id-1].className = true;
		$scope.id = id-1;
	};
	
}]);
