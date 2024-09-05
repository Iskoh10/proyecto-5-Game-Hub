import { stickers } from '../../data/stickers';
import './Button.css';

export const createButton = ({ ownClass, text, parentNode }) => {
  const button = document.createElement('button');
  button.classList.add(ownClass);
  button.textContent = text;

  // const signUpButton = document.querySelector('.signUp');
  // console.log(signUpButton);
  button.addEventListener('click', (e) => {
    const inputName = document.querySelector('#username');
    const inputPassword = document.querySelector('#password');
    const inputConfirmPwd = document.querySelector('#confirmPwd');

    const validateForm = () => {
      e.preventDefault();
      if (inputName.value.trim() === '') {
        const spanErrorName = document.querySelector('.username');
        spanErrorName.style.display = 'block';
        inputName.focus();
      } else if (inputPassword.value.trim() === '') {
        const spanErrorPassword = document.querySelector('.password');
        spanErrorPassword.style.display = 'block';
        inputPassword.focus();
      } else if (inputConfirmPwd.value.trim() === '') {
        const spanErrorConfirmPwd = document.querySelector('.confirmPwd');
        spanErrorConfirmPwd.style.display = 'block';
        inputConfirmPwd.focus();
      }
    };

    validateForm();

    //! Comprobar que se ha seleccionado un sticker!!
    if (inputPassword.value === inputConfirmPwd.value) {
      const sendData = () => {
        const myPro = [
          {
            name: inputName.value,
            password: inputPassword.value
          }
        ];
        localStorage.setItem('myProfile', JSON.stringify(myPro));
      };
      if (!localStorage.getItem('myProfile')) {
        sendData();
      }
    } else {
      console.log('Las contraseñas no coinciden');
    }
    const stickerSelected = document.querySelector(
      'input[name="inputSticker"]:checked'
    );
    for (const sticker of stickers) {
      if (parseInt(stickerSelected.value) === sticker.value) {
        console.log(sticker);
      }
    }

    e.preventDefault();
  });

  parentNode.appendChild(button);
};
