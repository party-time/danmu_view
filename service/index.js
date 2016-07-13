/**
 * Created by user on 16/7/5.
 */



/**
 * 登陆业务处理
 * @param req
 * @param res
 */
module.exports.login = function (req, res) {
    var object = {
        userId:1,
        userName:"2222"
    }
    //req.session.user = object;
    console.log('发起登陆请求');
    res.send(200);
}