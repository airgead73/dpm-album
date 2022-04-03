const { authSecret, baseUrl, clientId, issuerBaseUrl } = require('./env');

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: issuerBaseUrl,
  baseURL: baseUrl,
  clientID: clientId,
  secret: authSecret,
  idpLogout: true,   
}

module.exports = {
  authConfig
}