const express = require('express');
require('./db/mongoose');
const app = express();

const userRouter = require('./routers/user');
app.use(userRouter)

const taskRouter = require('./routers/tasks');
app.use(taskRouter)

const port = process.env.PORT || 3000;

app.use(express.json());

const multer = require('multer');
const upload = multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a Word document'))
        }
        cb(undefined, true)
        // cb(new Error('File must be PDF'))
        // cb(undefined, true)
        // cd(undefined, false)
    }
})

app.post('/upload', upload.single('upload'),(req, res)=>{
    res.send()
},(error, req, res, next)=>{
    res.status(400).send({error:error.message})
})

app.listen(port, () => console.log(`Server running on port ${port}`));



const main = async () =>{
    // const task = await Task.findById('60121de2a9e669122091ae59')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner);

    // const user = await User.findById('60121bd4e2cca22750b6dff7');
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks);
}

main()