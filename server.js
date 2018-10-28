require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const _ = require('lodash');

// const {mongoose} = require('./db/mongoose');

var app = express();
var port = process.env.PORT;

app.use(express.static(__dirname+'/static'));
app.use(bodyParser.json());
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.get('/',(req,res) => {
  res.render('index.hbs');
})

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})
