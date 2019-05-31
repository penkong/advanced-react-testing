//logic to process req for auth
const User = require('../models/user');


exports.singup = function (req, res, next){
  const email = req.body.email;
  const password = req.body.password;
  if(!email || !password) return res.status(422).send({ error: 'provide correct value!'});
  User.findOne({ email }, (err,existUser)=>{
    if (err) return next(err);
    if (existUser) {//un process able entity 422
      return res.status(422).send({ error : 'Email is in User'});
    }
    const user = new User({ email, password });
    user.save((err)=>{
      if (err) return next(err);
      res.json({ success : true });
    });
  });
}