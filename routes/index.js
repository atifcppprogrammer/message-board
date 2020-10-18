var express = require('express');
var router = express.Router();

const messages = require('./../data/messages');

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index', { 'script':'index', messages });
});

module.exports = router;
