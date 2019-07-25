// I  AM A MIDDLE WARE THAT CONSTANTLY CHECK IF USER HAVE TOKEN
// help us to authenticate user when that routes need
// is user logged in or not
// income req => passport => RouteHandlers
const passport = require('passport');
const User = require('../models/user');
const config = require('../config/config');
// passport === many strategies
//strategy is method for authenticate a user
//verify usr jwt , verify user with name and pass
const JwtStrategy = require('passport-jwt').Strategy; 
const ExtractJwt = require('passport-jwt').ExtractJwt; 
const LocalStrategy = require('passport-local');

//------------------THIS IS FOR LOGIN---------------------------
//create localStrategy for sign in user
const localOptions =  { usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  //verify user and pass call done if it correct otherwise call done with false
  User.findOne({ email }, function(err,user){
    if (err) return done(err);
    if (!user) return done(null, false);
    //USE METHOD OF USER MODEL TO CHECK PASSWORD IN DB
    user.comparePassword(password, function (err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    })
  });
});
//---------------SETUP - CREATE CONDITION OF STRATEGY------------------------
//setup opt for jwt strategy
 //... we say where to look ON REQUEST to find jwt of user
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
  //DECODE PAYLOAD 
};
//--------------- CREATE JWT STRATEGY for first time ---------------------
//  I CHECK ARE YOU MY USER CONSTANTLY
//create jwt strategy constructor              //when user try
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  //payload is decoded jwt //done is callback is we can or not authenticate user
  //we want to see if user id in payload exist in db
  //it it call done with user;
  User.findById(payload.sub, function(err, user){
    if (err) return done(err, false); // if err for any reason
    if (user) done(null, user); // find user
    else done(null, false); //not find user ==> redirect to '/' for example
  });
});

//tell passport to use strategy
passport.use(jwtLogin);
passport.use(localLogin);