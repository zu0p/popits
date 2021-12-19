var express = require('express');
var router = express.Router();

var axios = require('axios');

const instance = axios.create({
  baseURL: 'https://profile.stipop.io/v1/package',
  headers: { 
    'apikey': '',
  }
})

// get profile sticker
router.get('/getProfile/:userId', function(req, res){
  let { userId } = req.params;
  let getData = instance({
    method: 'get',
    url: `/sticker/${userId}`
  })
    .then(response=>{
      res.send(response.data)
    })
    .catch(err=>{
      res.status(500).send(err)
      console.log(err)
    })
})

// register profile sticker
router.post('/setProfile', function(req, res){
  let {userId, stickerId} = req.body;
  let postData = instance({
    method: 'post',
    url: `/sticker/${stickerId}?userId=${userId}`
  })
    .then(response=>{
      res.send(response.data)
    })
    .catch(err=>{
      res.status(500).send(err)
    })
})

// get profile sticker list
router.get('/getPackageList/:userId', function(req, res){
  let { userId } = req.params;
  let getData = instance({
    method: 'get',
    url: `?userId=${userId}`
  })
    .then(response=>{
      res.send(response.data)
    })
    .catch(err=>{
      res.status(500).send(err)
      console.log(err)
    })
})

// get profile sticker info
router.get('/getPackageInfo/:userId/:packageId', function(req, res){
  let { userId, packageId } = req.params;
  let getData = instance({
    method: 'get',
    url: `${packageId}?userId=${userId}`
  })
    .then(response=>{
      res.send(response.data)
    })
    .catch(err=>{
      res.status(500).send(err)
      console.log(err)
    })
})


module.exports = router;