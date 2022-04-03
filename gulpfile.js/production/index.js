const { series } = require('gulp');
const scss = require('./scss');
const { jsConcat, jsBrowserify, jsBabel, jsReset } = require('./js');
const clean = require('./clean');

exports.build = series(clean, scss, jsConcat, jsBrowserify, jsBabel, jsReset);