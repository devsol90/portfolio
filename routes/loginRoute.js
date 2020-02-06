const express = require('express');
const passport = require('passport');
// const path = require('path');

const router = express.Router();
// const db = require('../db/loginDB');

const bodyParser = require('body-parser');
const signAuth = require('../services/signAuth');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// const jsonParser = bodyParser.json()
// const passport   = require("../services/passport")

// const ensureAuth   = require("../services/ensureAuth")


router.get('/', [signAuth], (req, res) => {
  if (req.user === undefined) {
    const user = { user: '' };
    res.render('index', { user });
    return;
  }
  res.render('index', { user: req.user });
});
router.get('/user_data', (req, res) => {
  if (req.user === undefined) {
    const user = { user: '' };
    res.json({ hits: user });
    return;
  }
  res.json({ hits: req.user });
});

router.post('/signin', [urlencodedParser, passport.authenticate('local', {
  failureRedirect: '/login',
})], (req, res) => {
  res.redirect('/');
});

module.exports = router;
