import { toInactivateProfileBtn } from '../FunctionProfileBtnTtt/FunctionProfileBtnTtt';
import { functionalityTtt } from '../FunctionTtt/FunctionTtt';

export const startButton = () => {
  toActivateStartBtn();
};

export const functStart = () => {
  const startBtn = document.querySelector('.btn_start_ttt');
  let numClick = [];
  const divboxes = document.querySelectorAll('.square');
  const turn = document.querySelector('.turn');
  turn.textContent = '';
  numClick = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  for (const divBox of divboxes) {
    divBox.innerHTML = '';
    divBox.style.backgroundColor = '';
  }
  startBtn.textContent = 'Playing...';
  toInactivateStartBtn();
  toInactivateProfileBtn();
  functionalityTtt(numClick, divboxes);
};

export const toInactivateStartBtn = () => {
  const startBtn = document.querySelector('.btn_start_ttt');
  startBtn.removeEventListener('click', functStart);
};

export const toActivateStartBtn = () => {
  const startBtn = document.querySelector('.btn_start_ttt');
  startBtn.addEventListener('click', functStart);
};
