/**
 * external imports
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

/**
 * internal imports
 */
const { isDev } = require('./config/env');
const { connectDB } = require('./config');

/**
 * variables
 */
const testMessage = isDev ? 'The app is running: local environment.' : 'The app is running: production environment.';

/**
 * app activation
 */
const app = express();
connectDB();

/**
 * security
 */
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());

/**
 * middleware
 */

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
  res.status(200).send(testMessage);
});

/**
 * error handling
 */

/**
 * export
 */
module.exports = app