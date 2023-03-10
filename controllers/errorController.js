import AppError from './../utils/appError.js';
import ErrorStack from './../models/errorModel.js';

const saveError = async (err) => {
  const newError = await ErrorStack.create({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });

  return newError.id;
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;

  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

  const message = `Duplicate field value: ${value}. Please use another value!`;

  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;

  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired. Please log in again!', 401);

const sendErrorDev = async (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  console.error('ERROR 💥', err);

  const errorId = await saveError(err);

  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: `${err.message} (${errorId})`,
  });
};

const sendErrorProd = async (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    if (err.isOperational) {
      const errorId = await saveError(err);

      return res.status(err.statusCode).json({
        status: err.status,
        message: `${err.message} (${errorId})`,
      });
    }

    console.error('ERROR 💥', err);

    const errorId = await saveError(err);

    return res.status(500).json({
      status: 'error',
      message: `Something went wrong! (${errorId})`,
    });
  }

  if (err.isOperational) {
    const errorId = await saveError(err);

    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: `${err.message} (${errorId})`,
    });
  }

  console.error('ERROR 💥', err);

  const errorId = await saveError(err);

  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: `Please try again later! (${errorId})`,
  });
};

export default function globalErrorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    error.message = err.message;

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, req, res);
  }
}
