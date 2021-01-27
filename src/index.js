const express = require('express');
require('./db/mongoose');
const app = express();

// app.use((req, res, next)=>{
//     if(req.method === 'GET'){
//         res.send('GET request are disabled')
//     }else{
//         next();
//     }
// })
// app.use((req, res, next)=>{
//     if(req.method){
//         res.status(503).send('Under Maintance')
//     }
//     next();
// })

const userRouter = require('./routers/user');
app.use(userRouter)

const taskRouter = require('./routers/tasks');
app.use(taskRouter)

const port = process.env.PORT || 3000;

app.use(express.json());




app.listen(port, () => console.log(`Server running on port ${port}`));

// const jwt = require('jsonwebtoken');
// const myFunction = async ()=>{
//     const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'0 seconds'})
//     console.log(token);

//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data);
// }

// myFunction()