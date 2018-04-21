const path = require('path');
const rootRout = './public';
    
module.exports = function (passport) {
    var f = {};

    f.renderHomePage = (req, res, next) => {
        //res.render('index.html');
        res.sendFile(path.resolve(rootRout + '/index.html'));
    }

    f.renderLoginPage = (req, res, next) => {
        res.render('login.ejs', {message: req.flash('loginMessage')});
    }

    f.login = (req, res, next) => {
        passport.authenticate('local-login', {
            successRedirect: '/profile', // redirect to the secure profile section
            failureRedirect: '/login', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        })
    }

    f.renderSignupPage = (req, res, next) => {
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    }

    f.signup = (req, res, next) => {
        passport.authenticate('local-signup', {
            successRedirect: '/', // redirect to the secure profile section
            failureRedirect: '/signup', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        })
    }

    f.logout = (req, res, next) => {
        req.logout();
        res.redirect('/');
    }

    return f;
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}