const form = q.id('photoUpload');

const extractAttrs = ($form) => {
  const attrs = {};

  attrs.url = cp.url;

  Array.from($form.elements).forEach($el => {

    if(a.get($el, 'type') === 'file') return;

    if(a.has($el, 'name')) {
      let property = a.get($el, 'name');
      let value = $el.value;
      attrs[property] = value;
    } else {
      return;
    }

  });

  return attrs;

}

const handleSubmit = ($target) => {
  const action = a.get($target, 'action');
  const body = extractAttrs($target);
  console.log(body);
}

const initForm = ($form) => {
  $form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleSubmit(e.target);
  });

  $form.addEventListener('reset', function() {
    resetPhoto();
  })
}

if(form) initForm(form);