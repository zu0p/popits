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

// If file.json doesn't exist, db.data will be null
// Set default data
// db.data ||= { posts: [] }
db.data = db.data || { users: [] } // for node < v15.x

// // Create and query items using plain JS
// db.data.users.push('hello world')
// db.data.users[0]

// // You can also use this syntax if you prefer
// const { users } = db.data
// users.push('hello world')

// // Write db.data content to db.json
// await db.write()

export const regist = async function(info) {
  console.log("lowdb")
  console.log(info)
  const { users } = db.data
  users.push(info)

  await db.write()
}