import { functionalityTtt } from '../FunctionTtt/FunctionTtt';

export const startButton = () => {
  const startBtn = document.querySelector('.btn_start_ttt');

  const functStart = () => {
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
    startBtn.removeEventListener('click', functStart);
    functionalityTtt(numClick, divboxes);
  };

  startBtn.addEventListener('click', functStart);
};
