require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const _ = require('lodash');
const {sendEmail} = require('./server/sendmail');

// const {mongoose} = require('./db/mongoose');

var app = express();
var port = process.env.PORT;

app.use(express.static(__dirname+'/static'));
app.use(bodyParser.json());
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.get('/',(req,res) => {
  res.render('dumy2/index.hbs');
})

app.post('/sendmail/:data',(req,res) => {
  var body = JSON.parse(req.params.data);
  console.log(body,'------=====+++++===-------');
  sendEmail('qasimali24@gmail.com',body.message,'Easyheal - new message')
  res.status(200).send();
})

app.get('/eft',(req,res) => {
  res.render('dumy2/EFT.hbs');
})

app.get('/distancehealing',(req,res) => {
  res.render('dumy2/distancehealing.hbs');
})

app.get('/umore',(req,res) => {
  res.render('dumy2/umore.hbs');
})

app.get('/aboutme',(req,res) => {
  res.render('dumy2/aboutme.hbs');
})

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})
