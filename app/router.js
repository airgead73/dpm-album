const { Router } = require('express');
const appRouter = Router();
const { clientRouter } = require('./units/client');
const { photoRouter } = require('./units/photos');
const { workRouter } = require('./units/works');

appRouter.use('/', clientRouter);
appRouter.use('/api/photos', photoRouter);
appRouter.use('/api/works', workRouter);

module.exports = appRouter;