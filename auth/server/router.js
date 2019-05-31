const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport'); //check user for us is singin or not
const passport = require('passport');

//that middle ware we want to use to check
const requireAuth = passport.authenticate('jwt', { session : false });

module.exports = function (app) {
  app.get('/', requireAuth , function (req,res){
    res.send({ hi : 'there'});
  });
  app.post('/signup', Authentication.singup);
}