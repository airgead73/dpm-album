/**
 * external imports
 */
const express = require('express');
const { auth } = require('express-openid-connect');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');

/**
 * internal imports
 */
const { isDev } = require('./config/env');
const { handleError } = require('./middleware');
const { authConfig, connectDB } = require('./config');

/**
 * variables
 */
const testMessage = isDev ? 'The app is running: local environment.' : 'The app is running: production environment.';

/**
 * app activation
 */
const app = express();
connectDB();
app.use(auth(authConfig))

/**
 * security
 */
app.use(mongoSanitize());

/**
 * middleware
 */
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());

/**
 * dev middleware
 */

/**
 * locals
 */

/**
 * routes
 */
app.get('/', (req, res, next) => {
  const isAuthenticated = req.oidc.isAuthenticated();
  const options = {
    root: path.join(__dirname, 'public')
  }
  const fileName = isAuthenticated ? 'home.html' : 'landing.html';
  const statusCode = isAuthenticated ? 200 : 401;

  res.status(statusCode).sendFile(fileName, options, function(err) {
    if(err) {
      next(err)
    } else {
      console.log('Sent:', fileName);
    }
  });

});

/**
 * error handling
 */
 app.use(function(req, res, next) {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

app.use(handleError);

/**
 * export
 */
module.exports = app