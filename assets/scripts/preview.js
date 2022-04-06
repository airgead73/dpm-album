const cp = {
  input: q.s('input[type="file"][data-preview]'),
  container: q.s('[data-preview="container"]'),
  img: q.s('[data-preview="img"]'),
  url: null,
  placeholder: 'https://via.placeholder.com/150'
}

const resetPhoto = () => {

  a.set(cp.img, 'src', cp.placeholder);
  a.set(cp.container, 'data-display', 'hide');
  
}

const previewPhoto = () => {

  a.set(cp.img, 'src', cp.url);
  a.set(cp.container, 'data-display', 'show');

}

const handleChange = ($target) => {
  const reader = new FileReader();
  const file = $target.files[0];
  console.log(file.name);
  cp.filename = ($target.files[0]).name;
  reader.readAsDataURL($target.files[0]);
  reader.onloadend = () => {
    cp.url = reader.result;
    previewPhoto();
  }

}

const previewInit = ($input) => {

  $input.addEventListener('change', function(e) {
    handleChange(e.target);
  });

}

if(cp.input !== null) previewInit(cp.input);