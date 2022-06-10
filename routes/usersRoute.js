const { response } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel")


router.post("/login", async(req, res) => {

        const {username , password} = req.body
        try {
            const user = await User.findOne({username , password })
            if(user){
                res.send(user)
            }
            else{
                return res.status(400).json(error);
            }
           
        } catch (error) {
            return res.status(400).json(error);
        }
});

router.post("/register", async(req, res) => {

    
    try {
        const newuser = new User(req.body)
        await newuser.save()
        res.send('Registration was successfull!')
       
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.get("/getallusers", async(req, res) => {


    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/adduser", async (req, res) => {
    try {
      const newuser = new User(req.body);
      await newuser.save();
      res.send("User was added successfully!");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  router.post("/edituser", async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.body._id });
      user.username = req.body.username;
      user.password = req.body.password;
      user.address = req.body.address;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.role = req.body.role;
      user.image = req.body.image;
  
      await user.save();
  
      res.send("User details updated successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  router.post("/deleteuser", async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.body.userid });
  
      res.send("User deleted successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

module.exports = router;


