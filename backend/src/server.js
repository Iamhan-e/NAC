const express= require('express');
const bodyParser= require('body-parser');
const authRoutes= require('./auth/authRoutes')

const app= express()
const PORT= 3000;

app.use(bodyParser.json());

// routes

app.use('/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})