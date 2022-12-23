const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// eslint-disable-next-line no-unused-vars
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware

// Set security HTTP headers

app.use(helmet());

// Development Logging

if (process.env.NODE_ENV !== 'development') {
  app.use(morgan('dev'));
}

// Limit number of requests from the same IP address

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    'Too many requests from this IP address, please try again in an hour!',
});

app.use('/api', limiter);

// Body parser, which reads data from the body and puts it into req.body

app.use(express.json({ limit: '10kb' }));

// Serves static files

app.use(express.static(`${__dirname}/public`));

// Testing middleware

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
