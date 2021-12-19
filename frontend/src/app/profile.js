import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
})

// get profile sticker
export function getProfileSticker(userId){
  return instance({
    method: 'get',
    url: `/profile/getProfile/${userId}`
  })
}

// set profile sticker
export function setProfileSticker(param){
  return instance({
    method: 'post',
    url: `profile/setProfile`,
    data: param
  })
}

// get sticker package list
export function getPacakgeList(userId){
  return instance({
    method: 'get',
    url: `/profile/getPackageList/${userId}`
  })
}

// get sticker package info
export function getPacakgeInfo(param){
  return instance({
    method: 'get',
    url: `/profile/getPackageInfo/${param.userId}/${param.packageId}`
  })
}