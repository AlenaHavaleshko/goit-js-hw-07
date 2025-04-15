
const refs = {
 input: document.querySelector('#name-input'),
 title: document.querySelector('h1'),
 output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

 function onInputChange(event) {
  const trimmedValue = event.currentTarget.value.trim();

  refs.output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
 };