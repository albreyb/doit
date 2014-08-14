var controller = require('./auth_controller.js');
var passport = require('./auth.js').passport;

module.exports = exports = function(route){
  route.get('/facebook/callback',
    passport.authenticate('facebook', {session: false, failureRedirect: '/'}),
    controller.authenticate);
};