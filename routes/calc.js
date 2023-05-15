const express = require('express');

const router = express.Router();

const { calculator } = require('../controllers/calculator');

router.get('/', calculator);

module.exports = router;
