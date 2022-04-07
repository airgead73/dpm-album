const formWork = q.id('formWork');
let hasPhoto = false;

const buildRequest = ($form) => {

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

const sendRequest = async($request) => {

  try {

    const method = a.get($form, 'method');
    const url = a.get($form, 'action');
    const body = getAttrs($form);

    handleLoading('open', `Processing ${$body.title}...`);

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
      setActiveForm(null);
      handleLoading('close', '');
      window.location.reload();
    }
    
  } catch(err) {

    handleLoading('close', '');

    c.error(err);

  }

}

const handleForm = ($form) => {

  // const action = a.get($form, 'action');
  // const body = extractAttrs($form);

  const request = buildRequest($form);
  sendRequest(request);

  // setActiveForm($form);
  // sendForm(action, body);

}

const initForm = ($form) => {

  $form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleForm(e.target);
  });  

}

if(formWork.length) initForm(formWork);
