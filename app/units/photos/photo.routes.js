const { Router } = require('express');
const photoRouter = Router();

// controllers
const { create, read, upload } = require('./photo.controller');

// routes
photoRouter.route('/').get(read).post(upload, create);

module.exports = photoRouter;