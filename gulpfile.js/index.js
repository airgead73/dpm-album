const { dev } = require('./development');
const {js, compile} = require('./development/js');

exports.js = js;
exports.compile = compile;
exports.default = dev;