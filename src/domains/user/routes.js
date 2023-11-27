const express = require('express');
const router = express.Router();
const {createNewUser, authenticateUser,getUser} = require('./controller')
const auth =require('./../../middleware/auth');

router.get('/private_data',auth,(req,res)=>{
    res.status(200).send(`You are in the private territory of ${req.currentUser.email}`)
});
router.post('/',async(req,res)=>{
    try{
        let {email, password} = req.body;
        email = email.trim();
        password = password.trim();
        console.log(email && password)
        if(!(email && password))
        {
            throw Error('Empty Credentials supplied');
        }
        const authenticatedUser = await authenticateUser({email, password});
        res.status(200).json(authenticatedUser);
    }
    catch(error){
        res.status(400).send(error.message);
    }
})



router.post('/signup',async(req,res)=>{
    try{
        let {name, email, password} =req.body;
        name =name;
        email =  email;
        password = password;

        if(!(name && email && password)){
            throw Error('Empty input fields!');
        }
        else if( !/^[a-zA-Z ]*$/.test(name)){
            throw Error('Invalid name Entered!');
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
        ){
            throw Error('Invalid email entered!');
        }
        else if(password.length<8){
            throw Error('Entered Password must be at least 8 characters');
        }
        else{
            const newUser =await createNewUser({
                name,
                email,
                password,
            });
            res.status(200).json(newUser);
        }
    }
    catch(error){
        res.status(400).send(error.message);
    }
});

router.get('/AllUser',async(req,res)=>{
    try{
        let {name,email,password} =req.body;
        name = name;
        email = email;
        password = password;

        const existingUser = await getUser({
            name,email,password,
        })
        res.status(200).json(existingUser);
    }
    catch(error){
        res.status(400).send(error.message);
    }
})

module.exports = router;