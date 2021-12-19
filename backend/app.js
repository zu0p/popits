var express = require('express');
var cors = require('cors');
// var bodyParser = require('body-parser');
var app = express();
var profileRouter = require('./route/profile.js');

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use('/profile', profileRouter);

app.listen(3001, function(){
  console.log('start server on port 3001')
})