const forms = Array.from(document.getElementsByTagName('form'));

const uploadPhoto = async($url, $body) => {

  try {

    const response = await fetch($url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify($body)
    });

    const json = await response.json();
    console.log(json);

  } catch(err) {

    console.error(err);

  }

}

const extractValues = ($target) => {
  const attrs = {};

  Array.from($target.elements).forEach($element => {
    if($element.getAttribute('type') === 'file') {
      const file = $element.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        attrs[$element.getAttribute('name')] = reader.result;
      }
    } else if($element.hasAttribute('name')) {
      attrs[$element.getAttribute('name')] = $element.value;
    } else {
      return;
    }
    
  });

  return attrs;

}

const handleSubmit = ($target) => {
  const action = $target.getAttribute('action');
  const body = extractValues($target);
  console.log(body);
}

const init = ($forms) => {
  $forms.forEach($form => {
    $form.addEventListener('submit', function(event) {
      event.preventDefault();
      handleSubmit(event.target);
    })
  })
  
}

if(forms.length) {
  init(forms);
} else {
  console.log('no forms');  
}