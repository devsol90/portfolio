const express = require('express');

const router = express.Router();
const db = require('../db/projectDB');

// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json()
// const passport   = require("../services/passport")
// const signAuth   = require("../services/signAuth")
// const ensureAuth   = require("../services/ensureAuth")
// const urlencodedParser = bodyParser.urlencoded({extended : false})
router.get('/getProjectList', (req, res) => {
  db.getProjectList((result) => {
    res.json({ hits: result });
  });
});

module.exports = router;
