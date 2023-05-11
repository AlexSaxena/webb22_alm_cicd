const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ initials: 'AS, ES, NP, KE' });
});

module.exports = router;
