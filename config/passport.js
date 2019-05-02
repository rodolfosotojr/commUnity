var FacebookStrategy = require("passport-facebook").Strategy;

module.exports = passport => {
    passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb){
        console.log(profile);
        cb(null, profile);   
    }))
      
    passport.serializeUser(function(user, done) {
    done(null, user);
    });
    passport.deserializeUser(function(user, done) {
        done(null, user);
    })
}