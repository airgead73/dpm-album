const { series, watch } = require('gulp');
const scss = require('./scss');
const { jsConcat, jsBrowserify, jsBabel, jsReset } = require('./js');
const clean = require('./clean');

/* variables */
const { watch: WATCH } = require('./variables');

function watchTasks() {
  watch(WATCH.SRC, { ignoreInitial: false }, 
  series(
    clean,
    scss,
    jsConcat, 
    jsBrowserify,
    jsBabel,
    jsReset
  ));
}

module.exports = watchTasks;