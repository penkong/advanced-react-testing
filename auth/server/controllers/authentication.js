//logic to process req for auth
const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config/config');
//arg user model
function tokenForUser(user){
  //sub is convention as subject
  const timestamp = new Date().getTime();
  //iat issued at time
  return jwt.encode({ sub: user.id , iat: timestamp }, config.secret);
}


exports.signin = function (req, res, next){
  //user has already give pass and email we must give token only
  //passport with last done assign user to req.user
  res.send({ token : tokenForUser(req.user) });
}

exports.singup = function (req, res, next){
  const email = req.body.email;
  const password = req.body.password;
  if(!email || !password) return res.status(422).send({ error: 'provide correct value!'});
  User.findOne({ email }, (err,existUser) => {
    if (err) return next(err);
    if (existUser) {//un process able entity 422
      return res.status(422).send({ error : 'Email is in User'});
    }
    const user = new User({ email, password });
    user.save((err) => {
      if (err) return next(err);
      res.json({ token: tokenForUser(user) }); 
      // we give user token can know him next time
    });
  });
}