const express = require('express');

const router = express.Router();

const Calculator = require('../controllers/calculator');

router.get('/', Calculator);

module.exports = router;
