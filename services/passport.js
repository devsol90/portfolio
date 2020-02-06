/* eslint-disable consistent-return */
const passsport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../db/loginDB');

module.exports = () => {
  passsport.serializeUser((user, done) => {
    done(null, user);
  });
  passsport.deserializeUser((user, done) => {
    done(null, user);
  });
  passsport.use(new LocalStrategy({
    usernameField: 'uid',
    passwordField: 'upw',
    session: true,
    passReqToCallback: true,
  },
  (req, id, password, done) => {
    if (id === undefined || password === undefined) {
      return done(null, false);
    }
    db.signin(id, password, (result) => {
      if (result === false) {
        console.log('err');
        return done(null, false);
      }
      console.log('success');
      const user = { id };
      return done(null, user);
    });
  }));
};
