const forms = Array.from(document.getElementsByTagName('form'));


const init = ($forms) => {
  console.log($forms);
}

if(forms.length) {
  init(forms);
} else {
  console.log('no forms');
  return;
}