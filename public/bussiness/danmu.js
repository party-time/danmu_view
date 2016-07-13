/*global $ */

var app = angular.module('danmuApp', [])
var ws;
app.controller('danmuController', function ($scope) {

    //声明全局变量
    $scope.danmulist = [];//弹幕列表
    $scope.onlineStatus = 0;//在线状态 在线：1;离线：0
    $scope.strictStatus = 0;//严格度 严格:1，一般:0
    $scope.delayTime = 5;//处理延迟
    $scope.isAccept = false;//是否接受弹幕
    $scope.sum = 0;//弹幕总数

    //设置系统时间
    $scope.systemTime = new Date();

    if (!WebSocket) {
        alert('此浏览器不支持websocket.请更换浏览器')
        return;
    }
    //判断服务器是否连接过
    if (ws) {
        ws.close();
    }

    $scope.check = function (val) {
        if (!val) {

            setInterval(refreshDanmuList, 500);
            ws = new WebSocket("ws://localhost:7070/ws");
            ws.onopen = function () {
                console.log("连接上了服务器!");
                $scope.onlineStatus = 1;
                //TODO:定时心跳发送
                /*setInterval(function () {
                 if ($scope.wsStatus == 2) {
                 client.send(JSON.stringify({type: 'isOk'}));
                 }
                 }, 30 * 1000);*/

                //收取消息
                ws.onmessage = function (event) {
                    console.log("收到的数据" + event.data);
                    var data = JSON.parse(event.data);
                    if (data.code == 200) {
                        if (data.type == "login") {
                            ws.send(JSON.stringify({type: 'login'}));
                        } else if (data.type == "message") {
                            var object = {};
                            object.message = data.object.message;
                            object.time = data.object.time;
                            object.delaytime = $scope.delayTime;
                            object.id = data.object.id;
                            $scope.danmulist.push(object);
                            console.log($scope.danmulist);
                            $scope.sum = $scope.danmulist.length;
                        }
                    } else {
                        alert('服务器异常,确定后刷新界面');
                        offlineDeal();
                        window.location.reload();
                    }
                }


            }
            ws.onclose = function () {
                console.log('连接被关闭.');
                offlineDeal();
                return;
            };

            ws.onerror = function (error) {
                console.error("客户端发生异常:" + error);
                alert('无法连接服务器!');
                offlineDeal();
                return;
            };

        } else {
            ws.close();
            offlineDeal();
        }
    }

    var refreshDanmuList = function () {
        if ($scope.danmulist && $scope.danmulist.length > 0) {
            var nowTime = new Date().getTime();
            for (var i = 0; i < $scope.danmulist.length; i++) {
                setDanmuLeftTime($scope.danmulist[i], nowTime)

            }
        }
    };

    var setDanmuLeftTime = function (danmu, nowTime) {
        console.log(danmu.time);
        if (!danmu.delaytime || danmu.delaytime > 0) {
            console.log("22342342342344444444");
            var sub = parseInt((nowTime - danmu.time) / 1000);
            if (sub >$scope.delayTime) {
                var sendObject = {};
                sendObject.data = danmu.id;
                sendObject.type = "DEAL_OK";
                ws.send(JSON.stringify(sendObject));
                $scope.danmulist.splice($scope.danmulist.indexOf(danmu), 1);
                $scope.sum = $scope.danmulist.length;
            }
            danmu.delaytime = $scope.delayTime - sub;

            return danmu;
        }
    };
    //更新系统时间
    setInterval(function () {
        $scope.$apply(function () {
            //系统时间
            var nowTime = new Date();
            $scope.systemTime = nowTime;

            //系统时间加秒，处理时间减1
            /*for (var i = 0; i < $scope.danmulist.length; i++) {
             if ($scope.danmulist[i].lasttime > 0) {
             $scope.danmulist[i].lasttime = (nowTime - $scope.danmulist[i].time) / 1000;
             }
             }*/
        });
    }, 1000);


    //发送弹幕
    $scope.sendDanmu = function (object) {
        $scope.danmulist.splice($scope.danmulist.indexOf(object), 1);
        $scope.sum = $scope.danmulist.length;

        //JSON.stringify({type: 'login'}
        var sendObject = {};
        sendObject.data = object.id;
        sendObject.type = "DEAL_OK";
        ws.send(JSON.stringify(sendObject));
    };
    //删除弹幕处理
    $scope.deleletDanmu = function (object) {
        if (confirm("你确定放弃发送弹幕吗？")) {
            alert('放弃');
            //TODO:发送放弃
        }
    }

    var offlineDeal = function () {
        $scope.sum = 0;
        $scope.danmulist = [];
        $scope.onlineStatus = 0;

    }

    //清除处理完毕的弹幕
    /*setInterval(function () {
     $scope.$apply(function () {
     //系统时间加秒，处理时间减1
     for (var i = 0; i < $scope.danmulist.length; i++) {
     if ($scope.danmulist[i].lasttime > 1000) {
     $scope.danmulist.splice($scope.danmulist.indexOf($scope.danmulist[i]), 1);
     //alert("send iid---->"+$scope.danmulist[i].id);
     var sendObject = {};
     sendObject.data = $scope.danmulist[i].id;
     sendObject.type = "DEAL_OK";
     ws.send(JSON.stringify(sendObject));
     }
     }
     });
     }, 500);*/


});




