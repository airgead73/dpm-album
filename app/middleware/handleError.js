const handleError = (err, req, res, next) => {
  const statusCode = err.status || res.statusCode || 500;
  const errorObject = {
    error: true,
    message: err.message,
    status: statusCode,
    name: err.name,
    response: err.response || null,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  }

  if(err.response === 'html') {
    return res
      .status(statusCode)
      .render('pages/error', {
        success: false,
        status: statusCode,
        message: err.message,
        title: 'page error',
        main: 'main--error',
        auth_nav: false
      })
  } else {
    return res
      .status(statusCode)
      .json(errorObject);
  }

  
}

module.exports = handleError;