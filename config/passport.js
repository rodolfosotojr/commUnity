const FacebookStrategy = require("passport-facebook").Strategy,
LocalStrategy = require("passport-local").Strategy,
jwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt,
bcrypt = require("bcrypt"),
db = require("../models")

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.secretOrKey;

module.exports = passport => {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb){
        console.log(profile);
        cb(null, profile);   
    })),
    passport.use(
    new LocalStrategy({session:false},(username, password, done)=>{      
        db.User.findOne({where:{username:username}}).then(function(user){
            console.log(password);
            if (!user) 
            {
                return done(null, false, { message: 'Incorrect username' });
            }
            bcrypt.compare(password, user.password).then(function(success)
            {
                if(success)
                {
                    return done(null, user);
                }
                else{
                    return done(null, false, { message: 'Incorrect password' });
                }
            }).catch(function(err){
                console.log(err);
            })   
        })
    })
    )
    passport.use(new jwtStrategy(options, (jwt_payload, done) =>{
        db.User.findOne({
            where: {
                username: jwt_payload.id
            },
        }).then(user => {
            if (user) {
            console.log("user found")
            done(null, user);
            
        } else {
            console.log("user not found")
            done(null, false)
            }
        }).catch(err =>{
            done(err);
        })
    }))
}