const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

function jsConcat() {
  return src([
      'assets/scripts/bootstrap.bundle.js',
      'assets/scripts/forms.js',
      'assets/scripts/btns.js',
      'assets/scripts/camelcase.js'
    ])
    .pipe(concat('compiled.js'))
    .pipe(dest('assets/scripts'));
}

function jsBrowserify() {
  return browserify('assets/scripts/compiled.js')
    .bundle()
    .pipe(source('browser.js'))
    .pipe(buffer())
    .pipe(dest('assets/scripts'))
}

function jsBabel() {
  return src('assets/scripts/browser.js')
    .pipe(babel({ presets:['@babel/preset-env'], plugins: [['@babel/plugin-transform-runtime']]}))
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(dest('app/public'));
}

function jsClean() {
  return del(['assets/scripts/compiled.js', 'assets/scripts/browser.js'])
}

module.exports = {
  jsConcat,
  jsBrowserify,
  jsBabel,
  jsClean
};