const forms = Array.from(q.all('.forms'));

/* buildRequestBody */
const buildRequestBody = ($form) => {

  const attrs = {};

  if(a.get($form, 'data-form') === 'photo') {
    c.log('form is for photos')
  } else {
    c.log('form is for works')
  }

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

/* buildRequestObject */
const buildRequestObject = ($form) => {

  const url = a.get($form, 'action');
  const body = buildRequestBody($form);
  const method = a.get($form, 'method');
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)  
  }

  const request = new Request(url, options);

  return request;  

}

const handleResponse = ($data) => {

  const { success } = $data;

  if(success) {
    console.log('success!');
    handleLoading('close');
  }

}

/* sendForm */
const sendForm = async ($request) => {

  try {

    handleLoading('open', `Processing...`);

    const response = await fetch($request);
    const json = await response.json();

    handleResponse(json);

  } catch(err) {
    handleLoading('close');
    c.error(err);

  }
  
}

  // calls handleResponse


/* handleResponse */


/* handleForm */
const handleForm = ($form) => {
  const requestObject = buildRequestObject($form);
  sendForm(requestObject);
  
}

/* init forms */
const formsInit = ($formsArr) => {

  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();      
      handleForm($form);
    })
  }); 

}

/* check for forms */

if(forms.length) formsInit(forms);