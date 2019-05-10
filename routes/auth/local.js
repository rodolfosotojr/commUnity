const router = require("express").Router();
const passport = require("../../config/passport");
var jwt = require('jsonwebtoken')

router.route("/").post(passport.authenticate('local',{session: false}), function(req, res){
    console.log(req.user)   
    let token = jwt.sign({
    id: req.user.username},
    process.env.secretOrKey,
    {expiresIn: "11m"} 
    );
    res.cookie('jwt', token, { httpOnly: true })
    .sendStatus(200);
});

router.route("/protected").post(passport.authenticate("jwt", {session: false}), function(req, res){
  res.send(req.user)

})


module.exports = router;