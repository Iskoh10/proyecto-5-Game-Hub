import './Login.css';

export const createLogin = () => {
  document.body.innerHTML = '';
  const divLogin = document.createElement('div');
  divLogin.classList.add('div_login', 'flex_container');
  const p = document.createElement('p');
  p.textContent = 'Login';

  divLogin.appendChild(p);
  document.body.appendChild(divLogin);
};
