import './Home.css';

export const createHomePage = () => {
  document.body.innerHTML = '';
  const divBgHome = document.createElement('div');
  divBgHome.classList.add('div_bg_home', 'flex_container');

  document.body.appendChild(divBgHome);
};
