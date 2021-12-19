import express from 'express';
var router = express.Router();

import { regist } from '../db/lowdb.js';

// regist user
router.post('/regist', function(req, res){
  console.log("user.js")
  let {userId, userPwd, userName} = req;
  if(userId && userPwd && userName){
    let info = {
      userId: userId,
      userPwd: userPwd,
      userName: userName
    }
    regist(info).then(res=>console.log(res))
  }
})

export default router;