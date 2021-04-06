//CRUD create update read delete

const { MongoClient, ObjectID } = require("mongodb")

// const mongodb = require('mongodb')
// //mongoclinet gives access to the function necessary to connect to the database so we can perform our 4 basic crud operations
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectID


const id = new ObjectID()
const connectionUrl='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser:true, useUnifiedTopology:true},(error, client)=>{
    if(error)
        return console.log('unable to connect to database')
    //console.log('connected correctly')

    const db = client.db(databaseName)
                //name of collection
    // db.collection('users').insertOne({
    //     name:'Raj',
    //     age:23
    // },(error, result)=>{
    //     if(error)
    //     return console.log('unable to insert');
    //     console.log(result.ops);
    // })
    // db.collection('users').insertMany([
    //     {
    //         name:'jay',
    //         age:25
    //     },
    //     {
    //         name:'koyal',
    //         age:41
    //     }
    // ],(error, result)=>{
    //     if(error)
    //     return console.log('unable to insert users');
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'complete nodejs course on udemy',
    //         completed:false
    //     },{
    //         description:'complete reacts course',
    //         completed:false
    //     },{
    //         description:'build a demo to show your learning',
    //         completed:false
    //     }
    // ],(error,result)=>{
    //     if(error)
    //     return console.log('unable to inse   rt tasks');
    //     console.log(result.ops)
    // })


    // db.collection('users').findOne({name:'koyal',age:1},(error, user)=>{
    //     if(error)
    //      return console.log('unable to fetch user');
    //     console.log(user)
    // })

    // db.collection('users').find({name:'Raj'}).toArray((error,users)=>{
    //     if(error)
    //         return console.log('unable to fetch user');
    //     console.log(users);
    // })
    // db.collection('users').find({name:'Raj'}).count((error,users)=>{
    //     if(error)
    //         return console.log('unable to fetch user');
    //     console.log(users);
    // })

    // db.collection('tasks').findOne({_id:new ObjectID('6061682a2ce460241098b132')},(error,task)=>{
    //     if(error)
    //         return console.log('unable to fetch task');
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     if(error)
    //         return console.log('unable to fetch tasks');
    //     console.log(tasks)
    // })


    // const updatePromise = db.collection('users').updateOne(
    //     {_id:new ObjectID('606157b71e9a7d3a6447544a')
    // },{
    //     $set:{
    //         name:'Ram',
    //         age:24
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((reject)=>{
    //     console.log(reject);
    // })

    // db.collection('users').updateOne(
    //     {_id:new ObjectID('606157b71e9a7d3a6447544a')
    // },{
    //     $set:{
    //         name:'Ram',
    //         age:24
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((reject)=>{
    //     console.log(reject);
    // })


    // db.collection('tasks').updateMany(
    //     {completed:false
    //     },{
    //         $set:{
    //             completed:true
    //         }
    //     }).then((result)=>{
    //         console.log(result);
    //     }).catch((error)=>{
    //         console.log(error);
    //     })

    

})