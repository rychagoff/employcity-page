const range = document.querySelector('.range');
const rangeInput = range.querySelector('.range__input');
const rangeOutput = range.querySelector('.range__output');

rangeInput.addEventListener('input', handleInputRange);
rangeOutput.textContent = `${rangeInput.value} %`;

function handleInputRange(evt) {
  range.style.setProperty(
    '--value',
    evt.target.value
  );

  evt.target.nextElementSibling.value = `${evt.target.value} %`;
}
