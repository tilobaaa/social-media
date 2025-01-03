const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("hey, its auth route");
});

router.post("/register", async (req, res) => {
  
  try {
    //generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //save user to database
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
  }
});


router.post("/login", async(req,res)=>{

    try{
        const user = await User.findOne({email: req.body.email})
        !user && res.status(404).send('Email not found');

        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        !checkPassword && res.status(400).json({msg: 'Wrong password'});

        res.status(200).json(user)
    }catch(err){
        console.log(err)
    } 
   
})
module.exports = router;
