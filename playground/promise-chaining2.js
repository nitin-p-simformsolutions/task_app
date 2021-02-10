require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('6008445b8142d70c089f5cae').then((data)=>{
//     console.log(data);
//     return Task.countDocuments({completed:false})
// }).then((cunt)=>{
//     console.log(cunt);
// }).catch(err => {
//     console.log(err);
// })

const deleteAndCount = async (id)=>{
const del =await Task.findByIdAndDelete(id);
const count =await Task.countDocuments({completed:false});
return count;
}

deleteAndCount('6007fb0303e5652680e0a4ad').then((count)=>{
    console.log(count);
}).catch((err => console.log(err)));