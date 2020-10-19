var express = require('express');
var router = express.Router();

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const content = require('./../data/messages.json');
const fs = require('fs');

const saveMessageToFile = message => {
  content.push(message);
  return fs.promises.writeFile('data/messages.json', JSON.stringify(content));
}

router.post('/', async (req, res, next) => {
  const messageBody = Object.assign({}, req.body);
  messageBody.date = (new Date).toLocaleTimeString('en-PK', dateOptions);
  await saveMessageToFile(messageBody);
  res.redirect('/');
});

router.get('/', (req, res, next) => {
  res.render('new', {});
});

module.exports = router;
