const del = require('del');

/* variables */
const { styles } = require('./variables');
const { CLEAN: CLEANSCSS} = styles;

const toDelete = CLEANSCSS;

function clean() {
  return del(toDelete);
}

module.exports = clean;