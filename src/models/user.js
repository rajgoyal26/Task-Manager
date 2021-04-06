const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('bson')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Email is invalid')
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes("password"))
                throw new Error('password should not include word password')
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0)
                throw new Error('Age must be positive integer') 
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

userSchema.statics.findByCredentials = async (email,password)=>{
    //console.log(email,password)
    const user= await User.findOne({ email })
    //console.log(user);
    if(!user){
        //console.log("user not found");
        throw new Error('This Mail does not exist')
    }
    //console.log("user with this mail found");
    const isMatch= await bcrypt.compare(password,user.password)
    //console.log('user with this mail and password found')
    if(!isMatch){
        //console.log("user with this password not found");
        throw new Error('Password is incorrect')
    }
    //console.log(user);
    return user
}

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token= await jwt.sign({_id:user._id.toString()},'learningsomethingnew')
    user.tokens = user.tokens.concat({token})
    await user.save()
    //console.log(token);
    return token
}


//hash plain text password before saving
userSchema.pre('save',async function(next){
    const user = this
    //console.log('just before saving');
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})

const User = mongoose.model('User',userSchema)

////first method was this later schema was introduced
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

module.exports = User