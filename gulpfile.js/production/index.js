const { series } = require('gulp');
const scss = require('./scss');
const { jsConcat, jsBrowserify, jsBabel, jsClean } = require('./js');
const clean = require('./clean');

exports.build = series(clean, scss, jsConcat, jsBrowserify, jsBabel, jsClean);