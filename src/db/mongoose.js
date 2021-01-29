const mongoose = require('mongoose');
const validator = require('validator');
const dotenv = require('dotenv')
dotenv.config()

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log('DB Connect');
// })

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
}).then(()=>{
    console.log("DB CONNECTED");
});

// const me = new User({
//     name:'  naitik  ',
//     email:'naitiK@example.com',
//     password:'  res3  ',
//     age:8
// })

// me.save().then((me)=>{
//     console.log(me);
// }).catch((err)=>{
//     console.log(err);
// })



// const task = new Task({
//     description:' Eat launch',
//     completed:true,
// })

// task.save()
//     .then(data => {
//         console.log(data);
//     }).catch(err =>{
//         console.log(err)
//     })