const mongoose = require('mongoose');
const validator = require('validator');
const dotenv = require('dotenv')
dotenv.config()


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
}).then(()=>{
    console.log("DB CONNECTED");
});