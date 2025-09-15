const express= require('express');
const authRoutes= require('./auth/authRoutes')

const app= express()
const PORT= 3000;

app.use(express.json());

// routes

app.use('/api', authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})