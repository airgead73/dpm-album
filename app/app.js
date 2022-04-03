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
  res.status(200).send(req.oidc.isAuthenticated() ? testMessage : 'logged out');
});

/**
 * error handling
 */

/**
 * export
 */
module.exports = app