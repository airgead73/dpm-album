const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

/* variables */
const { styles } = require('./variables');
const { SRC, FILE, DEST } = styles;

/* tasks */

function scss() {
  return src(SRC, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(rename(FILE))
    .pipe(dest(DEST, { sourcemaps: '.'}))
}

module.exports = scss;
