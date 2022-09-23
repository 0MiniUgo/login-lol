const inputs = document.querySelectorAll('.input');
const btn = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}
const handleFocusOut = ({ target }) => {
  if (target.value == ''){
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value.length >= 4 && password.value.length >= 8) {
    btn.removeAttribute('disabled');
  }else{
    btn.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

inputs.forEach((input) => input.addEventListener('input', handleChange));