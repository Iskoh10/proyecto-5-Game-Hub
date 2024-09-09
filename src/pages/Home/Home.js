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

  //! Empieza el menu pasarlo a un componente
  const menu = document.createElement('div');
  menu.className = 'container_menu';

  const baseMenu = document.createElement('div');
  baseMenu.className = 'base_menu';

  baseMenu.addEventListener('click', () => {
    document.body.classList.remove('active');
  });

  const mømBtn = document.createElement('div');
  mømBtn.classList.add('møm_btn', 'flex_container');
  const pMøm = document.createElement('p');
  pMøm.textContent = 'Møm';

  mømBtn.appendChild(pMøm);

  const gmoworldBtn = document.createElement('div');
  gmoworldBtn.classList.add('gw_btn', 'flex_container');
  const pGW = document.createElement('p');
  pGW.textContent = 'GW';

  gmoworldBtn.appendChild(pGW);

  const tictactoeBtn = document.createElement('div');
  tictactoeBtn.classList.add('ttt_btn', 'flex_container');
  const pTtt = document.createElement('p');
  pTtt.textContent = 'Ttt';

  tictactoeBtn.appendChild(pTtt);

  baseMenu.appendChild(mømBtn);
  baseMenu.appendChild(gmoworldBtn);
  baseMenu.appendChild(tictactoeBtn);

  const menuBtn = document.createElement('div');
  menuBtn.className = 'menu_btn';
  const pInfo = document.createElement('p');
  pInfo.textContent = 'Info';

  menuBtn.appendChild(pInfo);

  menu.appendChild(baseMenu);
  menu.appendChild(menuBtn);

  menuBtn.addEventListener('click', () => {
    console.log('hole');
    document.body.classList.toggle('active'); //! por aqui
  });

  document.body.appendChild(divBgHome);

  sectionContainerHome.appendChild(h2Home);

  divH3Trilogy.appendChild(h3NameTrilogy);
  sectionContainerHome.appendChild(divH3Trilogy);

  sectionGames.appendChild(sectionTicTacToe);
  sectionGames.appendChild(sectionGmoWorld);
  sectionGames.appendChild(sectionMøm);
  sectionContainerHome.appendChild(sectionGames);

  sectionContainerHome.appendChild(menu);

  document.body.appendChild(sectionContainerHome);
};
