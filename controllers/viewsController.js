exports.getOverview = (req, res) => {
  res.set('Content-Security-Policy', "default-src 'self'");
  res.status(200).render('overview', {
    title: 'All Tours',
  });
};

exports.getTour = (req, res) => {
  res.set('Content-Security-Policy', "default-src 'self'");
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
