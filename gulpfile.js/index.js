const { dev } = require('./development');
const { build } = require('./production');

exports.dev = dev;
exports.default = build;