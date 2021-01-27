const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router =express.Router();
router.use(express.json());

//create User
router.post('/users',async (req, res)=>{
    
    try {
      const user = new User(req.body);
      const token =await user.generateAuthToken();
      await user.save()
      res.status(200).send({user, token})
    } catch (error) {
      res.status(400).send(error);
    }
})
//login
router.post('/users/login',async (req, res)=>{
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({user , token});
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/users/logout',auth, async (req, res)=>{
  try {
    req.user.tokens = req.user.tokens.filter((token)=>{
      return token.token !== req.token;
    })
    await req.user.save();

    res.send()
  } catch (error) {
    //console.log(error);
    res.status(500).send(error)
  }
})

router.post('/users/logoutAll',auth, async (req, res)=>{
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send()
  } catch (error) {
    //console.log(error);
    res.status(500).send(error)
  }
})

router.get("/users/me", auth ,async (req, res) => {
  res.send(req.user);

});

router.get("/users/:id",async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  } catch (error) {
    res.status(500).send(err)
  }
  // User.findById(_id).then((user)=>{
  //     if(!user){
  //         return res.status(404).send();
  //     }
  //     res.send(user);
  // }).catch(err => res.status(500).send(err))
});

router.patch('/users/:id',async (req, res)=>{
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password','age']

  const isValid = updates.every((update)=>{
    return allowedUpdates.includes(update);
  })

  if(!isValid){
    return res.status(400).send({error:'Invalid Update'})
  }

  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    updates.forEach(update => {
      user[update] = req.body[update]
    })
    await user.save();
    //const upUser =await User.findByIdAndUpdate(_id,req.body, {new:true, runValidators:true});
    if(!user){
      return res.status(404).send()
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
})

router.delete('/users/:id', async (req, res)=>{
  const _id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(_id)
    if(!deletedUser){
      res.status(404).send();
    }
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send();
  }
})

module.exports = router;