const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.set('Content-Security-Policy', "default-src 'self'");
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = (req, res) => {
  res.set('Content-Security-Policy', "default-src 'self'");
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
