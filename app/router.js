const { Router } = require('express');
const appRouter = Router();
const { clientRouter } = require('./units/client');
const { photoRouter } = require('./units/photos');

appRouter.use('/', clientRouter);
appRouter.use('/api/photos', photoRouter);

module.exports = appRouter;