const input = document.getElementById('photoInput');
const container = document.getElementById('photoDisplay');
const form = document.getElementById('photoUpload');

function Photo($src) {
  this.src = $src,
  this.tag = container,
  this.display = function() {
    (this.tag).setAttribute('class', 'show');
    (this.tag).setAttribute('src', this.src);
    return;
  }
  this.log = function() {
    console.log("photo:", this.src);
  }
}

const handleChange = ($target) => {
  const file = ($target).files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const currentPhoto = new Photo(reader.result);
    currentPhoto.display();
  }
}

const uploadPhoto = async ($url) => {
  try {

    const response = await fetch('/api/photos', {
      method: 'POST',
      body: JSON.stringify({ data: $url }),
      headers: { 'Content-Type': 'application/json' }
    });

    const json = await response.json();

    console.log(json);

  } catch(err) {
    console.error(err);
  }
}

const handleSubmit = ($target) => {
  const inputs = $target.elements;
  const input = inputs["photoInput"];
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const currentPhoto = new Photo(reader.result);
    uploadPhoto(currentPhoto.src);
  }
  
}

const initInput = ($input) => {

  $input.addEventListener('change', function(event) {
    handleChange(event.target);
  });

}

const initForm = ($form) => {
  $form.addEventListener('submit', function(event) {
    event.preventDefault();
    handleSubmit(event.target);
  });
}

if(input) initInput(input);
if(form) initForm(form);



// }

// const handleSubmit = ($target) => {
//   const reader = new FileReader();
//   const file = input.files[0];
//   reader.readAsDataURL();  
// }

// const init = ($input, $form) => {

//   // $input.addEventListener('change', function(event) {
//   //   const target = event.target;
//   //   const file = target.files[0];
//   //   console.log("file", file)
//   //   previewFile(file);
//   // });

//   // $form.addEventListener('submit', function(event) {
//   //   event.preventDefault();
//   //   const target = event.target;

//   // });

// }

// if(input) init(input, form);