import { stickers } from '../../data/stickers';
import { createButton } from '../Button/Button';
import { createInput } from '../Input/Input';
import './Form.css';

export const createForm = (sectionInfo) => {
  const form = document.createElement('form');

  const h2 = document.createElement('h2');
  h2.textContent = 'Divertrix';

  const h3Info = document.createElement('h3');
  h3Info.textContent = sectionInfo;

  form.appendChild(h2);
  form.appendChild(h3Info);

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
  h3Sticker.textContent = 'Choose your Sticker';

  const divStickers = document.createElement('div');
  divStickers.classList.add('div_stickers', 'flex_container');

  for (const sticker of stickers) {
    const divSticker = document.createElement('div');
    divSticker.classList.add('div_sticker', 'flex_container');

    const inputCheck = document.createElement('input');
    inputCheck.type = 'checkbox';
    inputCheck.className = 'input_check';

    const labelCheck = document.createElement('label');
    labelCheck.className = 'label_check';
    labelCheck.id = sticker.id;

    divSticker.appendChild(inputCheck);
    divSticker.appendChild(labelCheck);

    divStickers.appendChild(divSticker);
  }

  form.appendChild(h3Sticker);
  form.appendChild(divStickers);

  createButton({ ownClass: 'signUp', text: 'Sign up', parentNode: form });

  const divFootSign = document.createElement('div');
  divFootSign.classList.add('div_foot_sign', 'flex_container');

  const pFootSign = document.createElement('p');
  pFootSign.textContent = 'Already have an account?';
  const pLogin = document.createElement('p');
  pLogin.className = 'p_login';
  pLogin.textContent = 'Login';

  divFootSign.appendChild(pFootSign);
  divFootSign.appendChild(pLogin);
  form.appendChild(divFootSign);

  document.body.appendChild(form);
};
