testController.controller('danmusetController', ["$scope", "$http",function ($scope, $http) {


    /*$scope.pooId = $stateParams.pooId;
    if ($scope.pooId.$isEmpty()) {
        $scope.pooId = "578f2ad27d8459ed6656a33e";
        alert($scope.pooId);
    }*/

    $scope.pooId = "578f2ad27d8459ed6656a33e";
    $scope.delayTime = 0;
    $scope.dealTime = 0;
    $scope.danmuCount = 0;
    //严格度
    $scope.strictstatus = 0;
    $scope.reduceDalyTime = function (value) {
        if (value <= 0) {
            return;
        }
        $scope.delayTime = $scope.delayTime - 1;
    };

    $scope.addDalyTime = function (value) {
        $scope.delayTime = $scope.delayTime + 1;
    }

    $scope.reduceDealTime = function (value) {
        if (value <= 0) {
            return;
        }
        $scope.dealTime = $scope.dealTime - 1;
    }

    $scope.addDealTime = function (value) {
        $scope.dealTime = $scope.dealTime + 1;
    }

    $scope.reduceDanmuCount = function (value) {
        if (value <= 0) {
            return;
        }
        $scope.danmuCount = $scope.danmuCount - 1;
    }

    $scope.addDanmuCount = function (value) {
        $scope.danmuCount = $scope.danmuCount + 1;
    }

    //严格度来控制延迟时间。单条弹幕显示
    $scope.strictClick = function (value) {
        $scope.strictstatus = value;
        if (value == 1) {
            $("#delayTimeDiv").hide();
            $("#dealTimeDiv").hide();
            $scope.dealTime = 0;
            $scope.delayTime = 0;
        } else {
            $("#delayTimeDiv").show();
            $("#dealTimeDiv").show();
        }
    }

    //设置严格度的状态
    if ($scope.strictstatus == 1) {
        $("#delayTimeDiv").hide();
        $("#dealTimeDiv").hide();
        $scope.dealTime = 0;
        $scope.delayTime = 0;
    } else {
        $("#delayTimeDiv").show();
        $("#dealTimeDiv").show();
    }


    /*var url = "http://10.2.0.140:8780/danmuConfig/addConfig";
     var paramObject = {
     withCredentials:true,
     strictstatus: $scope.strictstatus,
     delayTime: $scope.delayTime,
     dealTime: $scope.dealTime,
     danmuCount: $scope.danmuCount
     };
     $http.post(url, paramObject).success(function (data) {
     alert(data);
     });*/

    /**
     * .controller('ProducersCtrl', function ($scope, $state) { $scope.toProducer = function (producerId) { $state.go('producer', {producerId: producerId}); }; });

     .controller('ProducerCtrl', function ($scope, $state, $stateParams) {
   var producerId = $stateParams.producerId;
})

     作者：Ye Huang
     链接：http://www.zhihu.com/question/33565135/answer/69651500
     来源：知乎
     著作权归作者所有，转载请联系作者获得授权。
     */

    $scope.save = function () {
        var paramObject = {
            strictstatus: $scope.strictstatus,
            pooId:"578f2ad27d8459ed6656a33e",
            delayTime: $scope.delayTime,
            dealTime: $scope.dealTime,
            danmuCount: $scope.danmuCount
        };
        $.ajax({
            type: "post",
            url: "/bms/danmuConfig/addConfig",
            data: paramObject,
            dataType: "json",
            xhrFields: {
                withCredentials: true,
            }
        }).success(function (data) {
            alert(data);
        });
    }

}]);
