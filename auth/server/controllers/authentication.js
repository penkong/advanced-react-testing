//------------- logic to process req for auth --------------
// controllers are logic of router.js
const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config/config');

//arg user model
//sub is convention as subject //iat issued at time
function tokenForUser(user){
  const timestamp = new Date().getTime();
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
  if(!email || !password) return res.status(422).send({ error: 'provide value for register!'});
  User.findOne({ email }, (err,existUser) => {
    if (err) return next(err);
    if (existUser) {
      //un process able entity 422
      return res.status(422).send({ error : 'Email Is In Use'});
    }
    const user = new User({ email, password });
    user.save((err) => {
      if (err) return next(err);
      res.json({ token: tokenForUser(user) }); 
      // we give user token can know him next time
    });
  });
}