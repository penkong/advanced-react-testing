const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport'); //check user for us is singin or not
const passport = require('passport');

//that middle ware we want to use to check
                                   //JWT STRATEGY , COOKIE SESSION FALSE DON CREATE IT
const requireAuth = passport.authenticate('jwt', { session : false });
const requireSingIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
  app.get('/dummy', requireAuth , function (req, res, next){
    res.send({ hi : 'there'}); //DUMMY ROUTE
  });
  app.post('/signin', requireSingIn, Authentication.signin);
  app.post('/signup', Authentication.singup);
}