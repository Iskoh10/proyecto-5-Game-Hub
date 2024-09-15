import { createDivBtns } from '../../components/DivBtns/DivBtns';
import { functionalityProfileBtn } from '../../components/FunctionProfileBtnTtt/FunctionProfileBtnTtt';
import {
  startButton,
  toActivateStartBtn,
  toInactivateStartBtn
} from '../../components/FunctionStartBtnTtt/FunctionStartBtnTtt';
import { stickers } from '../../data/stickers';
import { createHomePage } from '../Home/Home';
import './Tictactoe.css';

export const createTicTacToe = () => {
  document.body.innerHTML = '';

  const divBgTtt = document.createElement('div');
  divBgTtt.classList.add('div_bg_ttt', 'flex_container');

  const sectionTtt = document.createElement('section');
  sectionTtt.classList.add('section_ttt', 'flex_container');

  createDivBtns(sectionTtt, 'div_btns_ttt');

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
