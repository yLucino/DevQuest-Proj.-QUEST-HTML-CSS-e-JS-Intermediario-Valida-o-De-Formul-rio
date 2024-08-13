const btnSubmit = document.querySelector('#submit');
const textInvalidFill = document.querySelectorAll('.text-p-invalid');

btnSubmit.addEventListener('click', () => {
  const allInputs = document.querySelectorAll('.inputs-to-fill')

  allInputs.forEach((input, length) => {
    if (input.value == '') {
      addClassNameInvalidInTagP(length)
      input.classList.remove('valid')
      input.classList.add('invalid')
    } else {
      removeClassNameInvalidInTagP(length)
      input.classList.remove('invalid')
      input.classList.add('valid')
    }
  });
});

function addClassNameInvalidInTagP(length) {
  textInvalidFill[length].classList.add('p-invalid')
}

function removeClassNameInvalidInTagP(length) {
  textInvalidFill[length].classList.remove('p-invalid')
}