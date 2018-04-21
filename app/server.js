/* eslint no-console: 0 */
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const flash    = require('connect-flash');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');

const configDB = require('./config/database.js');

mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

app.set('port', (process.env.PORT || 3000));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../public'))); // set public folder

app.use(cors());


app.use(morgan('dev'));     // log every request to the console
app.use(cookieParser());    // read cookies (needed for auth)
app.use(bodyParser());      // get information from html forms

// Passport configuration
app.use(session({ secret: 'erated_secret' })); //session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


//  Routes configuration
require('./routes.js')(app); // load our routes and pass in our app and fully configured passport

console.log(`Starting server on port ${app.get('port')}`);

app.listen(`${app.get('port')}`);
