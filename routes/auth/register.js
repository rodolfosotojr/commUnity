const router = require("express").Router();
const bcrypt = require("bcrypt");
const db = require("../../models");
const Op = db.Sequelize.Op

router.route("/").post(function(req,res){
    console.log(req.body);
    var hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
    db.User.findOne({where:{
      [Op.or]:[
        {
          username:req.body.username
        }, 
        {
          email:req.body.email
        }
      ]}
      }).then(function(user){
        if (user)
        {
          res.redirect("/")
        }
        else if (req.body.userType==="volunteer")
        {
            db.Volunteer.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                state: req.body.state,
                city: req.body.city,
                email: req.body.email,
                username: req.body.username,
                password: hashedPW
            }).then(()=> res.redirect("/"))
        }
        else {
          db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            state: req.body.state,
            city: req.body.city,
            email: req.body.email,
            username: req.body.username,
            password: hashedPW
        }).then(()=> res.redirect("/"))
        // res.redirect("/")
      }
    })
  });

  module.exports = router;