const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')

//CRUD Operations
router.post('/create', async (req,res)=>{
    try{
        const user = new User(req.body)
        const result = await User.create(user);
        res.send(`${result} successfully created!!`)
    }catch(err){
        res.status(500).send(err.message)
    }
})

module.exports = router