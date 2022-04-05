const cp = {
  input: q.s('input[type="file"][data-preview]'),
  container: q.s('[data-preview="container"]'),
  img: q.s('[data-preview="img"]'),
  src: null
}

const previewPhoto = () => {

  a.set(cp.img, 'src', cp.src);
  a.set(cp.container, 'data-display', 'show');

}

const handleChange = ($target) => {
  const reader = new FileReader();
  reader.readAsDataURL($target.files[0]);
  reader.onloadend = () => {
    cp.src = reader.result;
  }

}

const previewInit = ($input) => {

  $input.addEventListener('change', function(e) {
    handleChange(e.target);
  });

}

if(cp.input !== null) previewInit(cp.input);

