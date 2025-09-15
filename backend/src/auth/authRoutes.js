const express= require('express')
const {register}= require('./authController')

const router= express.Router();

//registration route
router.post('/register', register)

module.exports= router;