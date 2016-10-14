var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
require('./api/db/db');
require('./api/config/passport');
var passport = require('passport');
var routesApi = require('./api/routes/index');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use('/api', routesApi);
app.use('/', routes);
app.use('/',express.static(path.join(__dirname, 'ng')));
app.use('/ng2',express.static(path.join(__dirname, 'ng2')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send({
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
else{
  app.use(function(err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send({
      message: err.message,
      error: {}
    });
  });
}

module.exports = app;
