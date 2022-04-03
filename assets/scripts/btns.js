const btn = document.getElementById('process_btn');
const display = document.getElementById('processed_txt');

const handleClick = ($target) => {
  display.value = '';
  let input = $target.getAttribute('data-process')
  input = document.getElementById(input);  
  display.value = processStr(input.value);
  input.value = '';
  
}

btn.addEventListener('click', function(event) {
  event.preventDefault();
  handleClick(event.target);
});