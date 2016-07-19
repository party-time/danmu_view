testController.controller('danmusetController', ["$scope", function ($scope) {

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

    $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php")
        .success(function (response) {
            $scope.names = response.records;
        });
}]);