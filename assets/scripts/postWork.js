const postForms = Array.from(q.all('form[method="POST"]'));

const extractAttrs = ($form) => {

  const attrs = {};

  Array.from($form.elements).forEach($el => {

    if(a.get($el, 'type') === 'file') {
      attrs.url = cp.url;
      attrs.filename = cp.filename;
    }

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

const handleSubmit = ($form) => {

  const action = a.get($form, 'action');
  const body = extractAttrs($form);
  
  console.log(action);
  console.log(body);

}

const initForms = ($forms) => {

  $forms.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();
      handleSubmit(e.target);
    });  
  });

}

if(postForms.length) initForms(postForms);
