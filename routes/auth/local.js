const router = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken')

router.route("/").post((req, res) =>{

  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/register',
  }, (err, user, info) =>{
    if(err){
      console.log(err)
    }
    const token = jwt.sign({
      id: user.username
    }, 
    process.env.jwtSecret);
    res.status(200).send({
      auth: true,
      token: token,
      message: "user found" 
    })
    console.log(user)  
  })
});

module.exports = router;