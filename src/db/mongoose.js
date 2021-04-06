const mongoose = require('mongoose')
const validator = require('validator')



mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

// const User = mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value))
//                 throw new Error('Email is invalid')
//         }
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:7,
//         validate(value){
//             if(value.toLowerCase().includes("password"))
//                 throw new Error('password should not include word password')
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0)
//                 throw new Error('Age must be positive integer') 
//         }
//     }
// })

// const Task = mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })

// const me = new User({
//     name:'Raj   ',
//     age:23,
//     email:'raj02goyal@gmail.com',
//     password:'raj@123   '
// })

// me.save().then(()=>{
//     console.log(me);
// }).catch((error)=>{
//     console.log('Error',error);
// })

// const task = new Task({
//     description:'complete node js           ',
//     //completed:false
// })

// task.save().then(()=>{
//     console.log(task);
// }).catch((error)=>{
//     console.log('Error',error);
// })