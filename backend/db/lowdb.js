// import {low} from 'lowdb';
// const FileSync = require('lowdb/adapters/FileSync'); // lowdb 동기식으로 관리
// const adapter = new FileSync('db.json');
// const db = low(adapter);

// const defaultDataSet = {
//   userId: '',
//   userPwd: '',
//   userName: ''
// }
// db.defaults({users: [{userId:'zu0p', userPwd:'zu0p1234!', userName:'박주영'}]}).write();

// // regist user
// export const regist = function(value, keys = []){
//   let info = {};
//   info = JSON.parse(JSON.stringify(defaultDataSet));

//   if(keys.length === 0){
//     db.get('users')
//       .push(value)
//       .write()
//   }
//   else{
//     for(let key of keys){
//       info[key] = value[key];
//     }
//     db.get('users')
//       .push(info)
//       .write()
//   }
// }
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

// // If file.json doesn't exist, db.data will be null
// // Set default data
db.data ||= { users: [] }
// db.data = db.data || { users: [] } // for node < v15.x

// // Create and query items using plain JS
db.data.users.push('hello world')
db.data.users[0]

// // You can also use this syntax if you prefer
const { users } = db.data
users.push('hello world')

// // Write db.data content to db.json
await db.write()