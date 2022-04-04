const { Router } = require('express');
const clientRouter = Router();

// controllers
const { home } = require('./client.controller');

// routes
clientRouter.route('/').get(home);

module.exports = clientRouter;