const { Router } = require('express');
const photoRouter = Router();

// controllers
const { create, read, upload, compileData } = require('./photo.controller');

// routes
photoRouter.route('/').get(read).post(upload, compileData, create);

module.exports = photoRouter;