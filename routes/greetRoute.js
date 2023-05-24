const express = require('express');

const router = express.Router();

const Greet = require('../controllers/greet');

router.get('/', (req, res, next) => {
  const newGreet = new Greet();
  const name = req.query.val1;

  res.render('greet', {
    sayHello: newGreet.sayHello(name),
  });
});

module.exports = router;
