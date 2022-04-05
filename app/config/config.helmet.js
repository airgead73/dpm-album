const policies = {
  directives: {
    "default-src": ["'self'"],
    "img-src": ["'self'", "https://res.cloudinary.com", "https://via.placeholder.com/150","data:"],
    "font-src": ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
    "style-src-elem": ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
    "style-src": ["'self'", "'unsafe-inline'"],
    "script-src-elem": ["'self'", "https://cdn.jsdelivr.net"],
    "script-src": ["'self'", "https://cdn.jsdelivr.net"]
  }
}

module.exports = { policies };