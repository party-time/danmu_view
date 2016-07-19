angular.module("app", ["ngRoute", "ngAnimate", "testController"])
    .config(function ($routeProvider) {
        $routeProvider.when("/nav", {
            controller: "navCtrl",
            templateUrl: "/nav/nav.html"
        }).
            when("/navigation", {
                controller: "navigationCtrl",
                templateUrl: "/navigation/navigation.html"
            }).
            when("/home", {
                controller: "homeCtrl",
                templateUrl: "/home/home.html"
            }).
            when("/today", {
                controller: "todayCtrl",
                templateUrl: "/today/today.html"
            }).
            when("/site", {
                controller: "siteCtrl",
                templateUrl: "/site/site.html"
            }).
            when("/site/add", {
                controller: "siteCtrl",
                templateUrl: "/site/add.html"
            }).
            when("/site/list", {
                controller: "siteCtrl",
                templateUrl: "/site/list.html"
            }).
            when("/session", {
                controller: "sessionCtrl",
                templateUrl: "/session/session.html"
            }).
            when("/session/add", {
                controller: "sessionCtrl",
                templateUrl: "/session/add.html"
            }).
            when("/personnel", {
                controller: "personnelCtrl",
                templateUrl: "/personnel/personnel.html"
            }).
            when("/preset", {
                controller: "presetCtrl",
                templateUrl: "/preset/preset.html"
            }).
            when("/danmucheck", {
                controller: "danmuController",
                templateUrl: "/danmu/danmu.html"
            }).
            when("/danmu", {
                controller: "danmuController",
                templateUrl: "/danmu/danmuset.html"
            }).
            otherwise({redirectTo: '/home'});
    });
