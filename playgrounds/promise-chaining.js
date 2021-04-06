require('../src/db/mongoose')
const { ObjectId } = require('bson')
const Task = require('../src/models/task')

// Task.deleteOne({_id: new ObjectId('6062737ccc32312c7cce0980')}).then(()=>{
//     return Task.countDocuments({completed:false})
// }).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('6062749d91c78c2b58b8eb1c').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log('e',e);
})