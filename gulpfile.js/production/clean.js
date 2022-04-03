const del = require('del');

const { styles, scripts } = require('./variables');
const { CLEAN: CLEANJS } = scripts;
const { CLEAN: CLEANSCSS } = styles;
const toDelete = CLEANSCSS.concat(CLEANKS);

function clean() {
  return del(toDelete);
}

module.exports = clean;