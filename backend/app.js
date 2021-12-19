import express from 'express';
import cors from 'cors';
import profileRouter from './route/profile.js';
import userRouter from './route/user.js';
// var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use('/profile', profileRouter);
app.use('/user/', userRouter);

app.listen(3001, function(){
  console.log('start server on port 3001')
})