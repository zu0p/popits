import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/user',
})

// regist user
export function registUser(info){
  return instance({
    method: 'post',
    url: `/regist`,
    data: info
  })
}