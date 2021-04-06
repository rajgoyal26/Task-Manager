const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT || 3000

//using middleware
// app.use((req,res,next)=>{
//     if(req.method=='GET')
//         res.send('GET requests are disabled')
//     else
//         next()
// })

//middleware for server maintenace message
// app.use((req,res,next)=>{
//     res.status(503).send("services are temporarily unavailable due to maintenace")
// })



//it automatically parses the incoming json
app.use(express.json())


app.use(userRouter)
app.use(taskRouter)

// const router = new express.Router()
// router.get('/test',(req,res)=>{
//     res.send('this is from my other router')
// })

// app.use(router)


// app.post('/users',async (req,res)=>{
//     // console.log(req.body);
//     // res.send('testing')
//     const user = new User(req.body)
    
//     //promise chaining method
//     // user.save().then(()=>{
//     //     res.send(user)
//     // }).catch((error)=>{
//     //     //console.log("Error ",error);
//     //     res.status(400).send(error)
//     // })
    
//     //using async await method
//     try{
//         await user.save()
//         res.status(201).send(user)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })


// app.get('/users',async (req,res)=>{
//     // User.find({}).then((users)=>{
//     //     res.send(users)
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })

//     try{
//         const users = await User.find({})
//         res.send(users)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

// app.get('/users/:id',async(req,res)=>{
//     const _id = req.params.id
//     // User.findById(_id).then((user)=>{
//     //     if(!user)
//     //         return res.status(404).send()
//     //     res.send(user) 
//     // }).catch(()=>{
//     //     res.status(500).send()
//     // })
//     try{
//         const user = await User.findById(_id)
//         if(!user)
//             return res.status(404).send()
//         res.send(user)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })


// app.patch('/users/:id',async(req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name','email','password','age']
//     const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates'})
//     }
//     try{
//         const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
//         if(!user)
//             return res.status(404).send()
        
//         res.send(user)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

// app.delete('/users/:id',async (req,res)=>{
//     try{
//         const user = await User.findByIdAndDelete(req.params.id)
//         if(!user)
//             return res.status(404).send()
//         res.send(user)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })



// app.post('/tasks',async (req,res)=>{
//     const task = new Task(req.body)
//     // task.save().then(()=>{
//     //     res.send(task)
//     // }).catch((error)=>{
//     //     res.status(400).send(error)
//     // })
//     try{
//         await task.save()
//         res.status(201).send(task)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })


// app.get('/tasks',async(req,res)=>{
//     // Task.find().then((tasks)=>{
//     //     res.send(tasks)
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
//     try{
//         const tasks = await Task.find()
//         res.status(200).send(tasks)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })

// app.get('/tasks/:id',async(req,res)=>{
//     const _id = req.params.id
//     // Task.findById(_id).then((task)=>{
//     //     if(!task)
//     //         return res.status(404).send()
//     //     res.send(task)
//     // }).catch(()=>{
//     //     res.status(500).send()
//     // })

//     try{
//         const task = await Task.findById(_id)
//         if(!task)
//             return res.status(404).send()
//         res.send(task)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })


// app.patch('/tasks/:id',async (req,res)=>{
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description','completed']

//     const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates'})
//     }
//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
//         if(!task)
//             return res.status(404).send()
//             res.send(task)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

// app.delete('/tasks/:id',async (req,res)=>{
//     try{
//         const task = await Task.findByIdAndDelete(req.params.id)
//         if(!task)
//             return res.status(404).send()
//         res.send(task)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })




app.listen(port,()=>{
    console.log('Server is up on port '+port);
})



const myfunction = async ()=>{
    //example of bcrypt
    // const password = 'raj@123'
    // const hashedPassword = await bcrypt.hash(password,8)
    // console.log(password);
    // console.log(hashedPassword);
    // const isequal = await bcrypt.compare('raj@123',hashedPassword)
    // console.log(isequal);

    //example of jswtokens

    // const token = jwt.sign({_id:'thisisid'},"learningtocreatenewtoken",{expiresIn:'7 days'})
    // console.log(token);
    // console.log(jwt.verify(token,'learningtocreatenewtoken'))
}

// myfunction()