const filenames = {
  scss: 'main.css',
  concat: 'compiled.js',
  browserify: 'browser.js',
  babel: 'bundle.js'  
};

const styles = {
  SRC: [
    'assets/scss/index.scss',
    'assets/scss/_custom.scss',
  ],
  FILE: filenames.scss,
  DEST: 'app/public',
  CLEAN: [
    `app/public/${filenames.scss}`,
    `app/public/${filenames.scss}.map`,
    ]  
};

const scripts = {
  SRC: {
    concat:[
      'assets/scripts/bootstrap.bundle.js',
      'assets/scripts/utils.js',
      'assets/scripts/loading.js',
      'assets/scripts/preview.js',
      'assets/scripts/formWork.js'          
    ],
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

const watch = {
  SRC: (styles.SRC).concat(scripts.SRC.concat)
}

module.exports = {
  styles,
  scripts,
  watch
}