const postForms = Array.from(q.all('form[method="POST"]'));

console.log('post forms')

const initForms = ($forms) => {

  $forms.forEach($form => {
    console.log($form);
  })

  // $form.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   console.log(e.target);
  // })

}

if(postForms.length) initForms(postForms);
