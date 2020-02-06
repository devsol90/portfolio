/* eslint-disable consistent-return */
module.exports = (req, res, next) => {
  if (req.isAuthenticated() === false) {
    return next();
  }
  res.redirect('/');
};
