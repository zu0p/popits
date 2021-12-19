import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/profile',
})

// get profile sticker
export function getProfileSticker(userId){
  return instance({
    method: 'get',
    url: `/getProfile/${userId}`
  })
}

// set profile sticker
export function setProfileSticker(param){
  return instance({
    method: 'post',
    url: `/setProfile`,
    data: param
  })
}

// get sticker package list
export function getPacakgeList(userId){
  return instance({
    method: 'get',
    url: `/getPackageList/${userId}`
  })
}

// get sticker package info
export function getPacakgeInfo(param){
  return instance({
    method: 'get',
    url: `/getPackageInfo/${param.userId}/${param.packageId}`
  })
}