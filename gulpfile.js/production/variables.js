const { scripts: scripts_dev, styles: styles_dev } = require('../development/variables');
const { SRC: SCSS_SRC_DEV, } = styles_dev;
const { SRC: JS_SRC_DEV, } = scripts_dev;

const filenames = {
  scss: 'main.css',
  concat: 'compiled.js',
  browserify: 'browser.js',
  babel: 'bundle.js'
};

const styles = {
  SRC: SCSS_SRC_DEV,
  FILE: filenames.scss,
  DEST: 'app/public',
  CLEAN: [
    `app/public/${filenames.scss}`,
    `app/public/${filenames.scss}.map`
  ]
};

const scripts = {
  SRC: {
    concat: JS_SRC_DEV.concat,
    browserify: `assets/scripts/${filenames.concat}`,
    babel: `assets/scripts/${filenames.browserify}`,
    reset: [
      `assets/scripts/${filenames.concat}`,
      `assets/scripts/${filenames.browserify}`      
    ]
  },
  FILE: {
    concat: filenames.concat,
    browserify: filenames.browserify,
    babel: filenames.babel
  },
  DEST: {
    concat: 'assets/scripts',
    browserify: 'assets/scripts',
    babel: 'app/public'
  },
  CLEAN: [
    `app/public/${filenames.babel}`,
    `app/public/${filenames.babel}.map`,
  ]   
};

module.exports = {
  styles,
  scripts
}