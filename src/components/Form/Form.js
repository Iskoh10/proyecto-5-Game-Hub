import { stickers } from '../../data/stickers';
import { createButton } from '../Button/Button';
import { createInput } from '../Input/Input';
import './Form.css';

export const createForm = (sectionInfo) => {
  const form = document.createElement('form');

  const h2 = document.createElement('h2');
  h2.textContent = 'Divertrix';

  const h3 = document.createElement('h3');
  h3.textContent = sectionInfo;

  form.appendChild(h2);
  form.appendChild(h3);

  createInput({
    type: 'text',
    name: 'username',
    placeholder: 'Name',
    parentNode: form
  });
  createInput({
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    parentNode: form
  });
  createInput({
    type: 'password',
    name: 'confirmPwd',
    placeholder: 'Confirm Password',
    parentNode: form
  });

  const h3Sticker = document.createElement('h3');
  h3.textContent = 'Choose your Sticker';

  const divStickers = document.createElement('div');
  divStickers.classList.add('div_stickers', 'flex_container');

  for (const sticker of stickers) {
    const divSticker = document.createElement('div');
    divSticker.className = 'div_sticker';
    const imgSticker = document.createElement('img');

    divSticker.appendChild(imgSticker);
    divStickers.appendChild(divSticker);
  }

  createButton({ ownClass: 'signUp', text: 'Sign Up', parentNode: form });

  const divFootSign = document.createElement('div');
  divFootSign.classList.add('div_foot_sign', 'flex_container');

  const pFootSign = document.createElement('p');
  pFootSign.textContent = 'Already have an account?';
  const pLogin = document.createElement('p');
  pLogin.textContent = 'Login';

  form.appendChild(h3Sticker);
  form.appendChild(divStickers);
  divFootSign.appendChild(pFootSign);
  divFootSign.appendChild(pLogin);
  form.appendChild(divFootSign);

  document.body.appendChild(form);
};
