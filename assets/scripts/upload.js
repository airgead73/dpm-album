const input = document.getElementById('photoInput');
const display = document.getElementById('photoDisplay');
const form = document.getElementById('photoUpload');
const photo = { src: null, isSelected: false };

const init = ($input, $form) => {
  console.log('init photo upload')
}

if(input && form) init(input, form);


// const previewFile = ($file) => {
//   const reader = new FileReader();
//   reader.readAsDataURL($file);
//   reader.onloadend = () => {
//     const previewSource = reader.result;
//     console.log("source", previewSource);
//     displayImg.setAttribute('class', 'show');
//     displayImg.setAttribute('src', previewSource);
//   }

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