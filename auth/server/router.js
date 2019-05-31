const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport'); //check user for us is singin or not
const passport = require('passport');

//that middle ware we want to use to check
const requireAuth = passport.authenticate('jwt', { session : false });
const requireSingIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
  app.get('/', requireAuth , function (req,res){
    res.send({ hi : 'there'});
  });
  app.post('/signin', requireSingIn, Authentication.signin);
  app.post('/signup', Authentication.singup);
}