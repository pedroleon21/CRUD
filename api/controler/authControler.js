const express = require('express');

const user = require('../models/order');

const router = express.Router();

router.post('/register', async(req,res) =>{
    try{
        const user = await User.create(req.body);
    }catch (err){
        return res.status(11).send({ error : 'Registration failed'});
    }
});

//recuperando o app
module.exports = app => app.use('/auth', router);