const forms = Array.from(q.all('.forms'));

/* buildRequestBody */
const buildRequestBody = ($form) => {

  const attrs = {};

  // if(a.get($form, 'data-form') === 'photo') {
  //   c.log('form is for photos')
  // } else {
  //   c.log('form is for works')
  // }

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
    method: a.get($form, 'method'),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)  
  }

  const request = new Request(url, options);

  return request;

  // c.log('url:', url);
  // c.log('method:', method);
  // c.log('body:', body); 
  

}

  // calls build request body
  // returns to handleForm

/* sendForm */
const sendForm = async ($request) => {

  try {

    const response = await fetch($request);
    const json = await response.json();

    console.log(json);

  } catch(err) {

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

    // calls buildRequestObject
    // then calls send form


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