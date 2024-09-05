import { stickers } from '../../data/stickers';
import { createLanding } from '../../pages/Landing/Landing';
import { createLogin } from '../../pages/Login/Login';
import { createButton } from '../Button/Button';
import { createInput } from '../Input/Input';
import './Form.css';

export const createForm = ({ sectionInfo, classtype }) => {
  const form = document.createElement('form');
  form.className = classtype;
  form.noValidate = true;

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

  if (sectionInfo === 'Create your Account') {
    createInput({
      type: 'password',
      name: 'confirmPwd',
      placeholder: 'Confirm Password',
      parentNode: form
    });

    const divH3Sticker = document.createElement('div');
    divH3Sticker.classList.add('div_h3_sticker', 'flex_container');
    const h3Sticker = document.createElement('h3');
    h3Sticker.textContent = 'Choose your Sticker';

    const divStickers = document.createElement('div');
    divStickers.classList.add('div_stickers', 'flex_container');

    for (const sticker of stickers) {
      const divSticker = document.createElement('div');
      divSticker.classList.add('div_sticker', 'flex_container');

      const inputCheck = document.createElement('input');
      inputCheck.type = 'radio';
      inputCheck.className = 'input_check';
      inputCheck.name = 'inputSticker';
      inputCheck.value = sticker.value;
      inputCheck.required = true;

      const labelCheck = document.createElement('label');
      labelCheck.className = 'label_check';
      labelCheck.id = sticker.id;

      divSticker.appendChild(inputCheck);
      divSticker.appendChild(labelCheck);

      divStickers.appendChild(divSticker);
    }

    divH3Sticker.appendChild(h3Sticker);
    form.appendChild(divH3Sticker);
    form.appendChild(divStickers);

    createButton({ ownClass: 'signUp', text: 'Sign up', parentNode: form });

    const divFootSign = document.createElement('div');
    divFootSign.classList.add('div_foot_sign', 'flex_container');

    const pFootSign = document.createElement('p');
    pFootSign.textContent = 'Already have an account?';
    const pLogin = document.createElement('p');
    pLogin.className = 'p_login';
    pLogin.textContent = 'Login';

    pLogin.addEventListener('click', () => {
      createLanding('createLogin');
    });

    divFootSign.appendChild(pFootSign);
    divFootSign.appendChild(pLogin);
    form.appendChild(divFootSign);
  } else if (sectionInfo === 'Login to your Account') {
    createButton({ ownClass: 'login', text: 'Login', parentNode: form });

    const divFootLogin = document.createElement('div');
    divFootLogin.classList.add('div_foot_login', 'flex_container');

    const pFootLogin = document.createElement('p');
    pFootLogin.textContent = `Don't have an account?`;
    const pSignUp = document.createElement('p');
    pSignUp.className = 'p_sign_up';
    pSignUp.textContent = 'Sign Up';

    pSignUp.addEventListener('click', () => {
      createLanding('createSignUp');
    });

    divFootLogin.appendChild(pFootLogin);
    divFootLogin.appendChild(pSignUp);
    form.appendChild(divFootLogin);
  }

  document.body.appendChild(form);

  const divConfirmPwd = document.querySelector('.div_form:nth-of-type(3)');
  if (divConfirmPwd) {
    const spanErrorMatchPwd = document.createElement('span');
    spanErrorMatchPwd.className = 'span_err_match_pwd';
    spanErrorMatchPwd.textContent = `Those passwords did't match`;

    divConfirmPwd.appendChild(spanErrorMatchPwd);
  }
};
