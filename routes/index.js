var express = require('express');
var indexService = require('../service/index')
var commonService = require('../service/common')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    /*var flg = commonService.checkSession(req,res);
    if(!flg){
        res.render('login', {});
    }else{
        res.render('danmu/main', {});
    }*/
    res.render('index', {});
});

router.route('/login').get(function (req, res) {
    res.render('login', {});
}).post(indexService.login);


router.route('/main').get(function (req, res) {
    /*var flg = commonService.checkSession(req,res);
    if(!flg){ 					//到达/home路径首先判断是否已经登录
        req.session.error = "请先登录"
        res.redirect("/login");				//未登录则重定向到 /login 路径
    }else{
        res.render('main', {});
    }*/
    res.render('main', {});
})

module.exports = router;
