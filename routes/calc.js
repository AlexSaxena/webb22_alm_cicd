const express = require('express');

const router = express.Router();

const Calculator = require('../controllers/calculator');

const myCalc = new Calculator();

router.get('/', (req, res, next) => {
  res.render('calculator', {
    add: myCalc.add(2, 2),
    remove: myCalc.remove(2, 2),
    multiply: myCalc.multiply(2, 2),
    divide: myCalc.divide(2, 2),
  });
});

module.exports = router;
