import './Input.css';

export const createInput = ({ type, name, placeholder, parentNode }) => {
  const divForm = document.createElement('div');
  divForm.classList.add('div_form', 'flex_container');

  const input = document.createElement('input');
  input.type = type;
  input.id = name;
  input.placeholder = placeholder;
  input.required = true;

  divForm.appendChild(input);
  parentNode.appendChild(divForm);
};
