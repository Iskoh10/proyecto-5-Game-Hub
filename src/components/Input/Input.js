import './Input.css';

export const createInput = ({ type, name, placeholder, parentNode }) => {
  const divForm = document.createElement('div');
  divForm.classList.add('div_form', 'flex_container');

  const input = document.createElement('input');
  input.type = type;
  input.id = name;
  input.placeholder = placeholder;
  input.required = true;

  const spanError = document.createElement('span');
  spanError.classList.add('span_error', name);
  if (name === 'username') {
    spanError.textContent = 'Name required';
  } else if (name === 'password') {
    spanError.textContent = 'Password required';
  } else if (name === 'confirmPwd') {
    spanError.textContent = 'Confirm password required';
  }
  divForm.appendChild(spanError);
  divForm.appendChild(input);
  parentNode.appendChild(divForm);
};
