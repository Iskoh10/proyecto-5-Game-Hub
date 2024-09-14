import { createHomePage } from '../../pages/Home/Home';

export const CheckLogin = (inputName, inputPassword) => {
  const dataProfile = JSON.parse(localStorage.getItem('myProfile'));

  if (
    inputName.value === dataProfile[0].name &&
    inputPassword.value === dataProfile[0].password
  ) {
    createHomePage();
  } else {
    const h3Message = document.querySelector('.login_form > h3');
    h3Message.textContent = 'Check your Credentials';
    h3Message.style.color = 'red';
    inputName.focus();
  }
};
