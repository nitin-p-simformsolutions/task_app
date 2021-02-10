const express = require('express');
require('./db/mongoose');
const app = express();

const userRouter = require('./routers/user');
app.use(userRouter)

const taskRouter = require('./routers/tasks');
app.use(taskRouter);

app.use(express.json());

module.exports = app;