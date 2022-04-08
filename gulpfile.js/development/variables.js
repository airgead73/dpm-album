const filenames = {
  scss: 'main.css'
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

;

const watch = {
  SRC: styles.SRC
}

module.exports = {
  styles,
  watch
}