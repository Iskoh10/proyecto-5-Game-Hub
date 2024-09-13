import { startButton } from '../../components/FunctionStartBtnTtt/FunctionStartBtnTtt';
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

  const h2Ttt = document.createElement('h2');
  h2Ttt.className = 'h2_ttt';
  const userName = JSON.parse(localStorage.getItem('myProfile'));
  h2Ttt.textContent = `Hola, ${userName[0].name}`; //! TRaer datos del localStorage

  const btnProfile = document.createElement('div');
  btnProfile.classList.add('btn_profile', 'flex_container');
  const imgProfile = document.createElement('img');
  imgProfile.src = 'Bee'; //! Llegar del landing
  btnProfile.addEventListener('click', () => {
    const dataProfile = document.createElement('div');
    dataProfile.classList.add('data_profile', 'flex_container');
    sectionTtt.appendChild(dataProfile);

    const won = document.createElement('p');
    if (!localStorage.getItem('won')) {
      won.textContent = `You won: 0`;
    } else {
      const wonGames = localStorage.getItem('won');
      won.textContent = `You won: ${wonGames}`;
    }
    dataProfile.appendChild(won);

    const lost = document.createElement('p');
    if (!localStorage.getItem('lost')) {
      lost.textContent = `You lost: 0`;
    } else {
      const lostGames = localStorage.getItem('lost');
      won.textContent = `You lost: ${lostGames}`;
    }
    dataProfile.appendChild(lost);

    const draw = document.createElement('p');
    if (!localStorage.getItem('draw')) {
      draw.textContent = `You draw: 0`;
    } else {
      const drawGames = localStorage.getItem('draw');
      draw.textContent = `You draw: ${drawGames}`;
    }
    dataProfile.appendChild(draw);
  });

  btnProfile.appendChild(imgProfile);

  divBtnsTtt.appendChild(btnHome);
  divBtnsTtt.appendChild(h2Ttt);
  divBtnsTtt.appendChild(btnProfile);

  const sectionGameTtt = document.createElement('section');
  sectionGameTtt.classList.add('section_game_ttt', 'flex_container');

  const turn = document.createElement('h3');
  turn.className = 'turn';

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
  sectionTtt.appendChild(turn);

  sectionTtt.appendChild(sectionGameTtt);
  sectionTtt.appendChild(startTtt);

  divBgTtt.appendChild(sectionTtt);
  document.body.appendChild(divBgTtt);

  startButton();
};

export const playerTurn = (player) => {
  const turn = document.querySelector('.turn');
  turn.textContent = `It's ${player}'s turn`;
};

export const gameResult = (result) => {
  const turn = document.querySelector('.turn');
  if (result === 'You Win!') {
    turn.style.color = 'green';
  } else if (result === 'You Loose!') {
    turn.style.color = 'red';
  } else {
    turn.style.color = 'orange';
  }
  turn.textContent = result;
};
