var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
  // add Vite app as allowed list
  origin: 'http://localhost:5173',
  // add "Access-Control-Allow-Credentials" to header
  credentials: true,
}))

const URL_PREFIX = '/api/v1';
app.use('/', indexRouter);
app.use(URL_PREFIX + '/cv', projectsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render as response body
  res.status(err.status || 500).json({
    "status": "error",
    "errors": err.message
  });
});

module.exports = app;
