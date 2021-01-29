const express = require('express');
require('./db/mongoose');
const app = express();

const userRouter = require('./routers/user');
app.use(userRouter)

const taskRouter = require('./routers/tasks');
app.use(taskRouter)

const port = process.env.PORT || 4000;

app.use(express.json());


app.listen(port, () => console.log(`Server running on port ${port}`));
