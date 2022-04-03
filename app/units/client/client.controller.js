const asyncHandler = require('express-async-handler');

/**
 * @desc Shifts home view
 * @route GET - /
 * @access Private / Public
 * */

exports.home = asyncHandler(async (req, res, next) => {

  const isAuthenticated = req.oidc.isAuthenticated();
  const options = {
    landing: {
      path: 'pages/landing',
      status: 401,
      success: false,
      main: 'main--landing'
    },
    dashboard: {
      path: 'pages/dashboard',
      success: true,
      status: 202,
      success: true,
      main: 'main--dashboard'
    }
  };

  const toggle = isAuthenticated ? 'dashboard' : 'landing';  

  return res
    .status(options[toggle].status)
    .render(options[toggle].path, {
      success: options[toggle].success,
      title: 'DPM Album',
      main: options[toggle].main
    });

});