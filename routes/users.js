var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ initials: 'AS, ES, NP, KE' });
});

module.exports = router;
