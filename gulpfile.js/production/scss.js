const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

function scss() {
  return src('assets/scss/index.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(rename('main.min.css'))
    .pipe(dest('app/public', { sourcemaps: '.'}))
}

module.exports = scss;
