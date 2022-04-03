const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

/* variables */
const { scripts } = require('./variables');
const { SRC, FILE, DEST } = scripts;

function jsConcat() {
  return src(SRC.concat)
    .pipe(concat(FILE.concat))
    .pipe(dest('assets/scripts'));
}

function jsBrowserify() {
  return browserify(SRC.browserify)
    .bundle()
    .pipe(source(FILE.browserify))
    .pipe(buffer())
    .pipe(dest(DEST.browserify))
}

function jsBabel() {
  return src(SRC.babel)
    .pipe(babel({ presets:['@babel/preset-env'], plugins: [['@babel/plugin-transform-runtime']]}))
    .pipe(uglify())
    .pipe(rename(FILE.babel))
    .pipe(dest(DEST.babel));
}

function jsReset() {
  return del(SRC.reset)
}

module.exports = {
  jsConcat,
  jsBrowserify,
  jsBabel,
  jsReset
};