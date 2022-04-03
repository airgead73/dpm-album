/**
 * external imports
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

/**
 * internal imports
 */
const { isDev, testLocal, testProduction } = require('./config/env');

/**
 * variables
 */
const testMessage = isDev ? `The app is running: ${testLocal}` : `The app is running: ${testProduction}`;

/**
 * app activation
 */
const app = express();

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