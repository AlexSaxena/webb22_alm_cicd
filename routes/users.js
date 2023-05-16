const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({ initials: 'AS, ES, NP, KE' });
});

module.exports = router;
