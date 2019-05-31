//help us to authenticate user when that routes need
//is user logged in or not
//income req => passport => RouteHandlers
const passport = require('passport');
const User = require('../models/user');
const config = require('../config/config');
//strategy is method for authenticate a user
const JwtStrategy = require('passport-jwt').Strategy; 
//verify usr jwt , verify user with name and pass
const ExtractJwt = require('passport-jwt').ExtractJwt; 

//setup opt for jwt strategy
 //... we say where to look to find jwt of user
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

//create jwt strategy constructor              //when user try
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  //payload is decoded jwt //done is callback is we can or not authenticate user
  //we want to see if user id in payload exist in db
  //it it call done with user;
  User.findById(payload.sub, function(err, user){
    if (err) return done(err, false); // if err for any reason
    if (user) done(null, user); //not find user
    else done(null, false); //find user
  });
});

//tell passport to use strategy
passport.use(jwtLogin);