const express = require('express');
const router = new express.Router();
const Task = require('../models/task');
router.use(express.json());
//Task request
router.post("/tasks",async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.send(task);
    } catch (error) {
      res.status(501).send(error);
    }
    // task.save().then(()=>{
    //     res.send(task);
    // }).catch(err => res.status(400).send(err))
  });
  
  router.get("/tasks",async (req, res) => {
    
    try {
      const tasks =await Task.find();
      res.send(tasks);
    } catch (error) {
      res.status(500).send(error);
    }
    
    // Task.find().then((tasks)=>{
    //     res.send(tasks)
    // }).catch(err => res.status(500).send());
  });
  
  router.get("/tasks/:id",async (req, res) => {
    const _id = req.params.id;
    try {
      const task = await Task.findById(_id);
      if(!task){
        return res.status(404).send();
      }
    res.send(task)
    } catch (error) {
      res.status(500).send();
    }
    
    // Task.findById(_id).then((task)=>{
    //     if(!task){
    //         return res.status(404).send();
    //     }
    //     res.send(task)
    // }).catch(err => res.status(500).send())
  });
  
  router.patch('/tasks/:id',async (req, res)=>{
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
      const task =await Task.findById(_id);
      updates.forEach((update)=>{
        task[update] = req.body[update];
      })
      await task.save();
      //const task = await Task.findByIdAndUpdate(_id, req.body, {new:true, runValidators:true});
      if(!task){
        res.status(404).send()
      }
      res.send(task)
    } catch (error) {
      res.status(500).send()
    }
  })
  
  router.delete('/tasks/:id', async (req, res)=>{
    const _id = req.params.id;
    try {
      const deletedTask = await Task.findByIdAndDelete(_id);
      if(!deletedTask){
        res.status(404).send();
      }
      res.send(deletedTask);
    } catch (error) {
      res.status(500).send();
    }
  })
  


module.exports = router;