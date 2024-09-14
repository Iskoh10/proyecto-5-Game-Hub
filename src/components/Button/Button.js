import { stickers } from '../../data/stickers';
import './Button.css';

export const createButton = ({ ownClass, text, parentNode }) => {
  const button = document.createElement('button');
  button.classList.add(ownClass);
  button.textContent = text;

  if (ownClass === 'signUp') {
    button.addEventListener('click', (e) => {
      const inputName = document.querySelector('#username');
      const inputPassword = document.querySelector('#password');
      const inputConfirmPwd = document.querySelector('#confirmPwd');
      const stickerSelected = document.querySelector(
        'input[name="inputSticker"]:checked'
      );

      const validateForm = () => {
        if (inputName.value.trim() === '') {
          const spanErrorName = document.querySelector('.username');
          spanErrorName.style.display = 'block';
          inputName.focus();
        } else {
          const spanErrorName = document.querySelector('.username');
          spanErrorName.style.display = 'none';
        }
        if (inputPassword.value.trim() === '') {
          const spanErrorPassword = document.querySelector('.password');
          spanErrorPassword.style.display = 'block';
          inputPassword.focus();
        } else {
          const spanErrorPassword = document.querySelector('.password');
          spanErrorPassword.style.display = 'none';
        }

        if (inputConfirmPwd.value.trim() === '') {
          const spanErrorConfirmPwd = document.querySelector('.confirmPwd');
          spanErrorConfirmPwd.style.display = 'block';
          inputConfirmPwd.focus();
        } else {
          const spanErrorConfirmPwd = document.querySelector('.confirmPwd');
          spanErrorConfirmPwd.style.display = 'none';
        }

        //! recoge el sticker seleccionado para mandarlo al home
        if (!stickerSelected) {
          const divStickers = document.querySelector('.div_h3_sticker > h3');
          divStickers.textContent = 'You need a Sticker';
          divStickers.style.fontSize = '20px';
        } else {
          for (const sticker of stickers) {
            if (parseInt(stickerSelected.value) === sticker.value) {
              console.log(sticker);
            }
          }
        }

        if (inputPassword.value === inputConfirmPwd.value) {
          const sendData = () => {
            const myPro = [
              {
                name: inputName.value,
                password: inputPassword.value,
                sticker: stickerSelected.value
              }
            ];

            localStorage.setItem('myProfile', JSON.stringify(myPro));
          };

          if (!localStorage.getItem('myProfile')) {
            sendData();
          }
        } else {
          const spanErrorMatchPwd = document.querySelector(
            '.span_err_match_pwd'
          );
          spanErrorMatchPwd.style.display = 'block';
          inputPassword.value = '';
          inputConfirmPwd.value = '';
          inputPassword.focus();
        }
      };

      validateForm();
      e.preventDefault();
    });
  } else if (ownClass === 'login') {
    button.addEventListener('click', () => {
      //! recoger inputUserName, inputPassword, comparar con los datos del localstorage y llamar al home, si no coinciden, borrar input.
    });
  }

  parentNode.appendChild(button);
};
