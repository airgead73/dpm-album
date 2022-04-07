const currentPhoto = {
  img: q.id('previewImg'),
  url: '',
  filename: '',
  input: q.id('photo')
}

const togglePreview = ($status) => {

  if($status === 'open') {
    a.set(currentPhoto.img, 'src', currentPhoto.url);
    a.set(currentPhoto.img, 'display-display', 'show');
    return;
  } else {
    a.set(currentPhoto.img, 'data-display', 'hide');
    return;
  }

}

const handleChange = ($target) => {

  const reader = new FileReader();
  const file = $target.files[0];
  currentPhoto.filename = file.name;
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    currentPhoto.url = reader.result;
    togglePreview('open');
  }
  
}

const previewInit = ($input) => {
  $input.addEventListener('change', function(e) {
    handleChange($input);
  })
}

if(currentPhoto.input) previewInit(currentPhoto.input);