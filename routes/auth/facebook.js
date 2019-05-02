const router = require("express").Router();
const passport = require("passport");

router.route('/').get(passport.authenticate('facebook'));
router.route('/callback').get(passport.authenticate('facebook', 
{   
    successRedirect: process.env.NODE_ENV === 'production'
    ? 'https://community-chicago.herokuapp.com/signup'
    : 'http://localhost:3000/signup',
    failureRedirect: '/login' 
}));

module.exports = router;