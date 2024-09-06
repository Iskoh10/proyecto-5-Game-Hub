import './Home.css';

export const createHomePage = () => {
  const divBgHome = document.createElement('div');
  divBgHome.classList.add('div_bg_home', 'flex_container');

  const sectionContainerHome = document.createElement('section');
  sectionContainerHome.classList.add('section_containerHome', 'flex_container');

  const h2Home = document.createElement('h2');
  h2Home.textContent = 'Welcome Peluca'; //! + valor del input nombre.

  const divH3Trilogy = document.createElement('div');
  divH3Trilogy.classList.add('div_h3_trilogy', 'flex_container');

  const h3NameTrilogy = document.createElement('h3');
  h3NameTrilogy.textContent = 'Divertrix';

  const sectionGames = document.createElement('section');
  sectionGames.classList.add('section_games', 'grid_container');

  const sectionTicTacToe = document.createElement('section');
  sectionTicTacToe.classList.add('section_Ttt', 'flex_container');
  const imgTtt = document.createElement('img');
  imgTtt.src = 'public/assets/tictactoegame.svg';

  sectionTicTacToe.appendChild(imgTtt);

  const sectionGmoWorld = document.createElement('section');
  sectionGmoWorld.classList.add('section_Gw', 'flex_container');
  const imgGm = document.createElement('img');
  imgGm.src = 'public/assets/gwgame.svg';

  sectionGmoWorld.appendChild(imgGm);

  const sectionMøm = document.createElement('section');
  sectionMøm.classList.add('section_Møm', 'flex_container');
  const imgMøm = document.createElement('img');
  imgMøm.src = 'public/assets/mømgame.svg';

  sectionMøm.appendChild(imgMøm);

  const menuBg = document.createElement('div');
  menuBg.classList.add('menu_bg', 'flex_container');
  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu_container';

  menuBg.appendChild(menuContainer);

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu_info', 'flex_container');
  const pInfo = document.createElement('p');
  pInfo.textContent = 'Info';

  menuInfo.addEventListener('click', () => {
    optionTtt.classList.toggle('show'); //! por aqui
  });

  menuInfo.appendChild(pInfo);
  menuContainer.appendChild(menuInfo);

  const optionTtt = document.createElement('div');
  optionTtt.classList.add('option_ttt', 'flex_container');
  const pTtt = document.createElement('p');
  pTtt.textContent = 'Ttt';

  optionTtt.appendChild(pTtt);
  menuInfo.appendChild(optionTtt);

  const optionGw = document.createElement('div');
  optionGw.classList.add('option_gw', 'flex_container');
  const pGw = document.createElement('p');
  pGw.textContent = 'GW';

  optionGw.appendChild(pGw);
  menuInfo.appendChild(optionGw);

  const optionMøm = document.createElement('div');
  optionMøm.classList.add('option_møm', 'flex_container');
  const pMøm = document.createElement('p');
  pMøm.textContent = 'Møm';

  optionMøm.appendChild(pMøm);
  menuInfo.appendChild(optionMøm);

  document.body.appendChild(divBgHome);

  sectionContainerHome.appendChild(h2Home);

  divH3Trilogy.appendChild(h3NameTrilogy);
  sectionContainerHome.appendChild(divH3Trilogy);

  sectionGames.appendChild(sectionTicTacToe);
  sectionGames.appendChild(sectionGmoWorld);
  sectionGames.appendChild(sectionMøm);
  sectionContainerHome.appendChild(sectionGames);

  sectionContainerHome.appendChild(menuBg);

  document.body.appendChild(sectionContainerHome);
};
