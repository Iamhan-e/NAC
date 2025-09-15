const sqlite3= require('sqlite3').verbose()
const path= require('path');

const dbPath= path.resolve(__dirname, 'nac.db');
const db= new sqlite3.Database(dbPath)

//create table if not exist

db.serialize(()=> {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'student',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)
})

module.exports= db;