const del = require('del');

const scssArr = ['app/public/main.css', 'app/public/main.min.css', 'app/public/main.css.map'];
const jsArr = ['app/public/bundle.js', 'app/public/bundle.min.js','app/public/bundle.js.map'];
const toDelete = scssArr.concat(jsArr);

function clean() {
  return del(toDelete);
}

module.exports = clean;