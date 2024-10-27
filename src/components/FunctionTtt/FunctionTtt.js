import { gameResult, playerTurn } from '../../pages/Tictactoe/Tictactoe';
import { functionalityProfileBtn } from '../FunctionProfileBtnTtt/FunctionProfileBtnTtt';
import { startButton } from '../FunctionStartBtnTtt/FunctionStartBtnTtt';
import './FunctionTtt.css';

export const functionalityTtt = (numClick, divboxes) => {
  const toDraw = (e) => {
    selector(e);
  };

  for (const divBox of divboxes) {
    divBox.addEventListener('click', toDraw);
  }

  const selector = (e) => {
    if (numClick.length % 2 === 0 && e.target.textContent === '') {
      e.target.textContent = 'O';
      numClick.pop();
      playerTurn('X');
      check();
    } else if (numClick.length % 2 !== 0 && e.target.textContent === '') {
      e.target.textContent = 'X';
      numClick.pop();
      playerTurn('O');
      check();
    }
  };

  const divbox1 = document.querySelector('.one');
  const divbox2 = document.querySelector('.two');
  const divbox3 = document.querySelector('.three');
  const divbox4 = document.querySelector('.four');
  const divbox5 = document.querySelector('.five');
  const divbox6 = document.querySelector('.six');
  const divbox7 = document.querySelector('.seven');
  const divbox8 = document.querySelector('.eight');
  const divbox9 = document.querySelector('.nine');

  const check = () => {
    const btnProfile = document.querySelector('.btn_profile');
    const startBtn = document.querySelector('.btn_start_ttt');
    if (
      divbox1.textContent === divbox2.textContent &&
      divbox2.textContent === divbox3.textContent &&
      divbox1.textContent !== ''
    ) {
      divbox1.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox2.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox3.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox1.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox1.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (
      divbox1.textContent === divbox4.textContent &&
      divbox4.textContent === divbox7.textContent &&
      divbox1.textContent !== ''
    ) {
      divbox1.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox4.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox7.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox1.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox1.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }

        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (
      divbox1.textContent === divbox5.textContent &&
      divbox5.textContent === divbox9.textContent &&
      divbox1.textContent !== ''
    ) {
      divbox1.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox5.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox9.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox1.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox1.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }

        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (
      divbox2.textContent === divbox5.textContent &&
      divbox5.textContent === divbox8.textContent &&
      divbox2.textContent !== ''
    ) {
      divbox2.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox5.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox8.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox2.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox2.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }

        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (
      divbox3.textContent === divbox6.textContent &&
      divbox6.textContent === divbox9.textContent &&
      divbox3.textContent !== ''
    ) {
      divbox3.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox6.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox9.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox3.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox3.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }

        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (
      divbox3.textContent === divbox5.textContent &&
      divbox5.textContent === divbox7.textContent &&
      divbox3.textContent !== ''
    ) {
      divbox3.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox5.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox7.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox3.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox3.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }

        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (
      divbox4.textContent === divbox5.textContent &&
      divbox5.textContent === divbox6.textContent &&
      divbox4.textContent !== ''
    ) {
      divbox4.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox5.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox6.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox4.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox4.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }

        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (
      divbox7.textContent === divbox8.textContent &&
      divbox8.textContent === divbox9.textContent &&
      divbox7.textContent !== ''
    ) {
      divbox7.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox8.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox9.style.backgroundColor = 'var(--isc-hp-color7)';

      if (divbox7.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox7.textContent === 'O') {
        if (!localStorage.getItem('lost')) {
          const lostGames = localStorage.setItem('lost', 1);
        } else {
          let lostGame = localStorage.getItem('lost');
          lostGame = parseInt(lostGame) + 1;
          const lostGames = localStorage.setItem('lost', lostGame);
        }

        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        functionalityProfileBtn(btnProfile);

        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (numClick.length === 0) {
      if (!localStorage.getItem('draw')) {
        const drawGames = localStorage.setItem('draw', 1);
      } else {
        let drawGame = localStorage.getItem('draw');
        drawGame = parseInt(drawGame) + 1;
        const drawGames = localStorage.setItem('draw', drawGame);
      }

      gameResult('A draw!');
      startBtn.textContent = 'Start';
      startButton();
      functionalityProfileBtn(btnProfile);

      for (const divBox of divboxes) {
        divBox.removeEventListener('click', toDraw);
      }
    }
  };
};
