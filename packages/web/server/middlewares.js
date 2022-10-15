const maxAge = (age = 60) => (req, res, next) => {
  res.set('Cache-Control', `public, max-age=${age}`);
  next();
};

module.exports = {
  maxAge,
};
