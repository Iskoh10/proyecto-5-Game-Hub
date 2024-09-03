import './Header.css';

export const createHeader = () => {
  const navbar = document.createElement('header');
  const divLogo = document.createElement('div');
  const imgLogo = document.createElement('img');
  imgLogo.src = 'public/assets/flaticon.svg';

  divLogo.appendChild(imgLogo);
  navbar.appendChild(divLogo);
  document.body.appendChild(navbar);
};
