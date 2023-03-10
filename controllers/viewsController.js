import AppError from '../utils/appError.js';
import Booking from '../models/bookingModel.js';
import catchAsync from '../utils/catchAsync.js';
import Tour from '../models/tourModel.js';
import User from '../models/userModel.js';

export const getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

export const getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name!', 404));
  }

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getSignUpForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign Up for an Account',
  });
};

export const getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log Into Your Account!',
  });
};

export const getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your Account',
  });
};

export const getMyTours = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });

  const tourIDs = bookings.map((el) => el.tour);

  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours,
  });
});

export const updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render('account', {
    title: 'Your Account',
    user: updatedUser,
  });
});
