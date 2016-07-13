var express = require('express');
var danmuService = require('../service/danmu')
var commonService = require('../service/common')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    /*var flg = commonService.checkSession(req,res);
    if(!flg){
        req.session.error = "请先登录"
        res.redirect("/login");
    }else{
        res.render('danmu/main', {});
    }*/
    res.render('danmu/main', {});

});

module.exports = router;
