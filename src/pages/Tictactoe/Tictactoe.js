import { functionalityTtt } from '../../components/FunctionTtt/FunctionTtt';
import { createHomePage } from '../Home/Home';
import './Tictactoe.css';

export const createTicTacToe = () => {
  document.body.innerHTML = '';

  const divBgTtt = document.createElement('div');
  divBgTtt.classList.add('div_bg_ttt', 'flex_container');

  const sectionTtt = document.createElement('section');
  sectionTtt.classList.add('section_ttt', 'flex_container');

  const divBtnsTtt = document.createElement('div');
  divBtnsTtt.classList.add('div_btns_ttt', 'flex_container');

  const btnHome = document.createElement('div');
  btnHome.classList.add('btn_home', 'flex_container');
  btnHome.addEventListener('click', () => {
    createHomePage();
  });
  const pBtnHome = document.createElement('p');
  pBtnHome.textContent = 'H';

  btnHome.appendChild(pBtnHome);

  const logoTtt = document.createElement('div');
  logoTtt.classList.add('logo_ttt', 'flex_container');
  const imgTtt = document.createElement('img');
  imgTtt.src = 'public/assets/tictactoegame.svg';
  imgTtt.alt = 'Tic tac toe';

  logoTtt.appendChild(imgTtt);

  const btnProfile = document.createElement('div');
  btnProfile.classList.add('btn_profile', 'flex_container');
  const imgProfile = document.createElement('img');
  imgProfile.src = 'Bee'; //! Llegar del landing

  btnProfile.appendChild(imgProfile);

  divBtnsTtt.appendChild(btnHome);
  divBtnsTtt.appendChild(logoTtt);
  divBtnsTtt.appendChild(btnProfile);

  const h2Ttt = document.createElement('h2');
  h2Ttt.className = 'h2_ttt';
  h2Ttt.textContent = 'Hola, Usuario'; //! TRaer datos del localStorage

  const sectionGameTtt = document.createElement('section');
  sectionGameTtt.classList.add('section_game_ttt', 'flex_container');

  const divGridTtt = document.createElement('div');
  divGridTtt.classList.add('div_grid_ttt', 'flex_container');

  divGridTtt.innerHTML = `<div class="square one"></div>
                          <div class="square two"></div>
  <div class="square three"></div>
  <div class="square four"></div>
  <div class="square five"></div>
  <div class="square six"></div>
  <div class="square seven"></div>
  <div class="square eight"></div>
  <div class="square nine"></div>`;

  sectionGameTtt.appendChild(divGridTtt);

  const startTtt = document.createElement('div');
  startTtt.classList.add('btn_start_ttt', 'flex_container');
  startTtt.textContent = 'Start';

  sectionTtt.appendChild(divBtnsTtt);
  sectionTtt.appendChild(h2Ttt);
  sectionTtt.appendChild(sectionGameTtt);
  sectionTtt.appendChild(startTtt);

  divBgTtt.appendChild(sectionTtt);
  document.body.appendChild(divBgTtt);

  functionalityTtt();
};
