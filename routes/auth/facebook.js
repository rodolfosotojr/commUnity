const router = require("express").Router();
const passport = require("passport");

router.route('/').get(passport.authenticate('facebook'));
router.route('/callback').get(passport.authenticate('facebook', 
{   
    successRedirect: '/',
    failureRedirect: '/login' 
}));

module.exports = router;