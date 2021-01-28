const express = require('express');
const router = new express.Router();
const Task = require('../models/task');
const auth = require('../middleware/auth');
router.use(express.json());


//Task request
router.post("/tasks",auth,async (req, res) => {
    //const task = new Task(req.body);
    const task = new Task({
      ...req.body,
      owner: req.user._id
    })
    try {
      await task.save();
      res.send(task);
    } catch (error) {
      res.status(501).send(error);
    }
  });
  
  //GET /task?completed=true|false
  //GET /task?limit=10&skip=10
  //GET /task?sortBy=createdAt:desc
  router.get("/tasks", auth,async (req, res) => {
    const match = {}
    if(req.query.completed){
      match.completed = req.query.completed === 'true'
    }
    const sort = {}
    if(req.query.sortBy){
      const parts = req.query.sortBy.split(':');
      sort[parts[0]] = parts[1]=== 'desc'?-1:1
    }

    try {
      //const tasks =await Task.find({owner:req.user._id});
      await req.user.populate({
        path:'tasks',
        match,
        options:{
          limit:parseInt(req.query.limit),
          skip:parseInt(req.query.skip),
          sort
        }
      }).execPopulate()
      res.send(req.user.tasks);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.get("/tasks/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try {
      //const task = await Task.findById(_id);
      const task = await Task.findOne({_id, owner:req.user._id})

      if(!task){
        return res.status(404).send();
      }
    res.send(task)
    } catch (error) {
      res.status(500).send();
    }
  });
  
  router.patch('/tasks/:id', auth, async (req, res)=>{
    const updates = Object.keys(req.body);
    const allowed = ['description','completed'];
    const isValid = updates.every((update)=>{
      return allowed.includes(update);
    })
    
    if(!isValid){
      return res.status(400).send({error:'Invalid Update'})
    }
  
    const _id = req.params.id;
    try {
      //const task =await Task.findById(_id);
      const task = await Task.findOne({_id, owner:req.user._id})
      
      if(!task){
        res.status(404).send()
      }

      updates.forEach((update)=>{
        task[update] = req.body[update];
      })
      await task.save();
      //const task = await Task.findByIdAndUpdate(_id, req.body, {new:true, runValidators:true});
      
      res.send(task)
    } catch (error) {
      res.status(500).send()
    }
  })
  
  router.delete('/tasks/:id',auth, async (req, res)=>{
    const _id = req.params.id;
    try {
      //const deletedTask = await Task.findByIdAndDelete(_id);
      const deletedTask = await Task.findOneAndDelete({_id, owner:req.user._id})
      if(!deletedTask){
        res.status(404).send();
      }
      res.send(deletedTask);
    } catch (error) {
      res.status(500).send();
    }
  })
  

module.exports = router;