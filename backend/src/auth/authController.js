const bcrypt= require('bcrypt');
const {createUser, findUserByUsername}= require('../models/userModel')

async function reqister(req, res){
    try{
        const {username, password, role}= req.body

        if(!username || !password){
            return res.status(400).json({error:"Username and password required"});

        }

        const existingUser = await findUserByUsername(username);

        if(existingUser){
            return res.status(400).json({error: "username already taken"})
        }

        const saltRounds= 10;
        const passwordHash= await bcrypt.hash(password, saltRounds)

        const user= await createUser(username, passwordHash, role || 'student');
        res.status(201).json({message: "User registered successfully", user});
    } catch(err){
        console.error(err);
        res.status(500).json({error: "Server error"})
    }
}

module.export= {reqister}