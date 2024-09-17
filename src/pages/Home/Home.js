import { createMenuInfo } from '../../components/MenuInfo/MenuInfo';
import { createGmoW } from '../GmoW/GmoW';
import { createMøm } from '../Møm/Møm';
import { createTicTacToe } from '../Tictactoe/Tictactoe';
import './Home.css';

export const createHomePage = () => {
  document.body.innerHTML = '';
  const dataProfile = JSON.parse(localStorage.getItem('myProfile'));
  const divBgHome = document.createElement('div');
  divBgHome.classList.add('div_bg_home', 'flex_container');

  const sectionContainerHome = document.createElement('section');
  sectionContainerHome.classList.add('section_containerHome', 'flex_container');

  const h2Home = document.createElement('h2');
  h2Home.textContent = `Welcome ${dataProfile[0].name}`;

  const divH3Trilogy = document.createElement('div');
  divH3Trilogy.classList.add('div_h3_trilogy', 'flex_container');

  const h3NameTrilogy = document.createElement('h3');
  h3NameTrilogy.textContent = 'Divertrix';

  const sectionGames = document.createElement('section');
  sectionGames.classList.add('section_games', 'grid_container');

  const sectionTicTacToe = document.createElement('section');
  sectionTicTacToe.classList.add('section_Ttt', 'flex_container');
  sectionTicTacToe.addEventListener('click', () => {
    createTicTacToe();
  });
  const imgTtt = document.createElement('img');
  imgTtt.src = 'public/assets/tictactoegame.svg';

  sectionTicTacToe.appendChild(imgTtt);

  const sectionGmoWorld = document.createElement('section');
  sectionGmoWorld.classList.add('section_Gw', 'flex_container');
  sectionGmoWorld.addEventListener('click', () => {
    createGmoW();
  });

  const imgGm = document.createElement('img');
  imgGm.src = 'public/assets/gwgame.svg';

  sectionGmoWorld.appendChild(imgGm);

  const sectionMøm = document.createElement('section');
  sectionMøm.classList.add('section_Møm', 'flex_container');
  sectionMøm.addEventListener('click', () => {
    document.body.innerHTML = '';
    createMøm();
  });
  const imgMøm = document.createElement('img');
  imgMøm.src = 'public/assets/mømgame.svg';

  sectionMøm.appendChild(imgMøm);

  createMenuInfo(sectionContainerHome);

  document.body.appendChild(divBgHome);

  sectionContainerHome.appendChild(h2Home);

  divH3Trilogy.appendChild(h3NameTrilogy);
  sectionContainerHome.appendChild(divH3Trilogy);

  sectionGames.appendChild(sectionTicTacToe);
  sectionGames.appendChild(sectionGmoWorld);
  sectionGames.appendChild(sectionMøm);
  sectionContainerHome.appendChild(sectionGames);

  document.body.appendChild(sectionContainerHome);
};
