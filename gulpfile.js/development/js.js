const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const rollup = require('rollup-stream');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

function jsConcat() {
  return src(['assets/scripts/bootstrap.bundle.js', 'assets/scripts/main.js'])
    .pipe(concat('compiled.js'))
    .pipe(dest('assets/scripts'))
}

function js() {
  return rollup({
    input: './assets/scripts/main.js',
    sourcemap: true,
    format: 'umd'
  })
  .pipe(source('main.js', '/assets/scripts'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(rename('index.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./app/public'));
}

exports.compile = jsConcat;
exports.js = js;