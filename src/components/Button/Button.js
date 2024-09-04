import './Button.css';

export const createButton = ({ ownClass, text, parentNode }) => {
  const button = document.createElement('button');
  button.classList.add(ownClass);
  button.textContent = text;

  parentNode.appendChild(button);
};
