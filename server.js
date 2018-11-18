require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const _ = require('lodash');
const {sendEmail} = require('./server/sendmail');

var app = express();
var port = process.env.PORT;

app.use(express.static(__dirname+'/static'));
app.use(bodyParser.json());
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.all("/*", (req, res, next) => {

  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials",true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.post('/sendmail/:data',(req,res) => {
  var body = JSON.parse(req.params.data);
  console.log(body,'------=====+++++===-------');
  sendEmail('qasimali24@gmail.com',body.message,`Easyheal - new message from ${body.name}`)
  res.status(200).send();
})


app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})
