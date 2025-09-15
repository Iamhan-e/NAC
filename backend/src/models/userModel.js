const db= require('../db/database')

function createUser(username, passwordHash, role= 'student'){
    return new Promise((resolve, reject) =>{
        db.run(
            `INSERT INTO users(username, password_hash, role) VALUES (?, ?, ?)`,
            [username, passwordHash, role],
            function(err){
                if(err) return reject(err);
                resolve({id: this.lastID, username, role})
            }
        )
    })

}

function findUserByUsername(username){
    return new Promise((resolve, reject) =>{
        db.get(
            `SELECT * FROM users WHERE username= ?`,
            [username],
            (err, row)=>{
                if (err) return reject(err);
                resolve;
            }
        )
    })

}

module.exports= {createUser, findUserByUsername};