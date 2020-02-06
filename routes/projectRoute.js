const express = require('express');

const router = express.Router();
// const db = require('../db/projectDB');

// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json()
// const passport   = require("../services/passport")
// const signAuth   = require("../services/signAuth")
// const ensureAuth   = require("../services/ensureAuth")
// const urlencodedParser = bodyParser.urlencoded({extended : false})

router.get('/:id', (req, res) => {
  // const { id } = req.params;
  if (req.user === undefined) {
    const user = { user: '' };
    res.render('index', { user });
    return;
  }
  res.render('index', { user: req.user });
});

module.exports = router;
