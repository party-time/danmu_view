var express = require('express'),
    http = require('http'),
    path = require('path'),
    ejs = require('ejs'),
    logger = require('morgan'),
    config = require('./lib/config'),
    app = express();

//set
app.set('port', process.argv && process.argv[2] || config.port);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//lpg
app.use(logger('dev'));

//static
app.use(express["static"](path.join(__dirname, 'public')));
app.use(express["static"](path.join(__dirname, 'views')));

//router
app.get('/', function(req, res) {
  return res.render('index');
});


//service
app.listen(app.get('port'), function() {
  return console.log('success', "adapt project server listening on port " + app.get('port'));
});
