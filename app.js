const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// eslint-disable-next-line no-unused-vars
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware

// Serves static files

app.use(express.static(path.join(__dirname, 'public')));

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

// Data sanitization against NoSQL query injection

app.use(mongoSanitize());

// Data sanitization against XSS

app.use(xss());

// Prevent parameter pollution

app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

// Testing middleware

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.get('/', (req, res) => {
  res.set('Content-Security-Policy', "default-src 'self'");
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Bradley',
  });
});

app.get('/overview', (req, res) => {
  res.set('Content-Security-Policy', "default-src 'self'");
  res.status(200).render('overview', {
    title: 'All Tours',
  });
});

app.get('/tour', (req, res) => {
  res.set('Content-Security-Policy', "default-src 'self'");
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
