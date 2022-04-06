const c = console;
const log = ($toLog) => {
  c.log($toLog);
}
const warn = ($toWarn) => {
  c.warn($toWarn);
}
const error = ($toErr) => {
  c.error($toErr)
}
const d = document;
const q = {
  id: function($id) {
    return d.getElementById($id);
  },
  s: function($selector) {
    return d.querySelector($selector);
  },
  all: function($selector) {
    return d.querySelectorAll($selector);
  }
}

const a = {
  set: function($el, $attr, $value) {
    return $el.setAttribute($attr, $value)
  },
  get: function($el, $attr) {
    return $el.getAttribute($attr);
  },
  has: function($el, $attr) {
    return $el.hasAttribute($attr);
  }
}

const txt = {
  create: function($str) {
    return d.createTextNode($str);
  },
  append: function($el, $str) {
    const content = d.createTextNode($str);
    return $el.appendChild(content);
  }
}

