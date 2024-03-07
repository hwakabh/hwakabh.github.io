const express = require('express');
const app = express();

// --- Middlewares
const helmet = require('helmet');
app.use(helmet());

const logger = require('morgan');
app.use(logger('combined'));

const compression = require('compression');
app.use(compression());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// limit each IP to 20 requests per 1 minute
const rateLimit = require('express-rate-limit');
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require('cors');
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

// --- Routes
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
app.use('/', indexRouter);
app.use('/', apiRouter);


// --- error handler
// catch 404 and forward to error handler + define error handler
// this should be defined only after including routers
const createError = require('http-errors');
app.use((req, res, next) => {
  next(createError(404));
});

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


// -- exports for including from bin/www
module.exports = app;
