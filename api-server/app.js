const express = require('express');
const app = express();

// Middlewares
const createError = require('http-errors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const rateLimit = require('express-rate-limit');
// limit each IP to 20 requests per 1 minute
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
  handler: (req, res) => {
    return res.status(429).json({
      path: req.originalUrl,
      error: 'You sent too many requests. Please wait a while then try again'
    })
  }
});
app.use(apiRequestLimiter);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(
  {
    origin: [
      'https://hwakabh.github.io',
      'http://localhost:5173',
      'http://localhost:8080',
    ],
    credentials: true,
  }
))
app.use(helmet());
app.use(logger('dev'));

// Include router
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
app.use('/', indexRouter);
app.use('/', apiRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
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
