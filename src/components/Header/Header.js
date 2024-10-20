import './Header.css';

export const createHeader = () => {
  const navbar = document.createElement('header');
  const divLogo = document.createElement('div');
  const imgLogo = document.createElement('img');
  imgLogo.src = '/assets/flaticon.svg';

  divLogo.appendChild(imgLogo);
  navbar.appendChild(divLogo);
  document.body.appendChild(navbar);
};
