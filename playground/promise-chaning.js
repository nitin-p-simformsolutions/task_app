require('../src/db/mongoose');
const Task = require('../src/models/task');
const User = require('../src/models/user');

// 600e30b30e28fa2ba8695ba2

// User.findByIdAndUpdate('600e30b30e28fa2ba8695ba2',{
//     age:'8'
// }).then(user => {
//     console.log(user);
//     return User.countDocuments({age:8})
// }).then((result)=>{
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

const updateAgeAndCount = async (id, age)=>{
    const user = User.findByIdAndUpdate(id,{age:age});
    const count = User.countDocuments({age:age})
    return count;
}

updateAgeAndCount('600e30b30e28fa2ba8695ba2',8).then((count)=>{
    console.log(count);
}).catch(err => console.log(err));