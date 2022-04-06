const postForms = Array.from(q.all('form[method="POST"]'));
let hasPhoto = false;

const extractAttrs = ($form) => {

  const attrs = {};

  Array.from($form.elements).forEach($el => {

    if(a.get($el, 'type') === 'file') {
      hasPhoto = true;
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

const postForm = async($action, $body) => {

  try {

    const response = await fetch($action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify($body)
    });

    const json = await response.json();

    if(json.success) {
      let msg = hasPhoto ? 'has photo' : 'does not have photo';
      console.log(msg);
      console.log(json);
    }
    
  } catch(err) {

    c.error(err);

  }

}

const handleSubmit = ($form) => {

  const action = a.get($form, 'action');
  const body = extractAttrs($form);
 
  postForm(action, body);

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
