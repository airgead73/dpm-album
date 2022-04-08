const { series, watch } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');
const js = require('./js')

/* variables */
const { watch: WATCH } = require('./variables');

function watchTasks() {
  watch(WATCH.SRC, { ignoreInitial: false, delay: 5000 }, 
  series(
    clean,
    scss,
    js
  ));
}

module.exports = watchTasks;