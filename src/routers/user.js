const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/test',(req,res)=>{
    res.send('from a new file')
})

//signup route
router.post('/users',async (req,res)=>{
    // console.log(req.body);
    // res.send('testing')
    const user = new User(req.body)
    
    //promise chaining method
    // user.save().then(()=>{
    //     res.send(user)
    // }).catch((error)=>{
    //     //console.log("Error ",error);
    //     res.status(400).send(error)
    // })
    
    //using async await method
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
})

//login route
router.post('/users/login',async(req,res)=>{
    try{
        //console.log(req.body)
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        //console.log(token);
        res.send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
})


//logout a user
router.post('/users/logout',auth,async(req,res)=>{
    try{
        //console.log(req.token);
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

//logout from all
router.post('/users/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})


//fetch all users route
router.get('/users',auth,async (req,res)=>{
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })

    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/users/me',auth,async (req,res)=>{
    res.send(req.user)
})

router.get('/users/:id',async(req,res)=>{
    const _id = req.params.id
    // User.findById(_id).then((user)=>{
    //     if(!user)
    //         return res.status(404).send()
    //     res.send(user) 
    // }).catch(()=>{
    //     res.status(500).send()
    // })
    try{
        const user = await User.findById(_id)
        if(!user)
            return res.status(404).send()
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})


router.patch('/users/:id',async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates'})
    }
    try{

        // this method updates but does not support pre save middleware thus code needs to be changed
        // const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        
        const user = await User.findById(req.params.id)
        updates.forEach((update)=> user[update]=req.body[update])
        await user.save()

        if(!user)
            return res.status(404).send()
        
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/:id',async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user)
            return res.status(404).send()
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})




module.exports = router