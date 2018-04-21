const passport = require('passport');
const func      = require('./logic')(passport);

module.exports = function (app) {

    
    app.get('/login', func.renderLoginPage); //LoginPage
    app.post('/login', func.login); //LoginForm

    app.get('/signup', func.renderSignupPage); //SignupPage
    app.post('/signup', func.signup); //SignupForm

    app.get('/logout', func.logout);

    app.get('*', func.renderHomePage); //Homepage

};