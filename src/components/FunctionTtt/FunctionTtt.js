import { gameResult, playerTurn } from '../../pages/Tictactoe/Tictactoe';
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
    const startBtn = document.querySelector('.btn_start_ttt');
    if (
      divbox1.textContent === divbox2.textContent &&
      divbox2.textContent === divbox3.textContent &&
      divbox1.textContent !== ''
    ) {
      divbox1.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox2.style.backgroundColor = 'var(--isc-hp-color7)';
      divbox3.style.backgroundColor = 'var(--isc-hp-color7)';
      console.log('Partida ganada por: ' + divbox1.textContent);
      if (divbox1.textContent === 'X') {
        if (!localStorage.getItem('won')) {
          console.log('Creamos tu perfil');
          const wonGames = localStorage.setItem('won', 1);
        } else {
          let wonGame = localStorage.getItem('won');
          console.log('sumar 1');
          wonGame = parseInt(wonGame) + 1;
          const wonGames = localStorage.setItem('won', wonGame);
        }

        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox1.textContent === 'O') {
        const lostGames = localStorage.setItem('lost', 1);
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
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
      console.log('Partida ganada por: ' + divbox1.textContent);
      if (divbox1.textContent === 'X') {
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox1.textContent === 'O') {
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
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
      console.log('Partida ganada por: ' + divbox1.textContent);
      if (divbox1.textContent === 'X') {
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox1.textContent === 'O') {
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
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
      console.log('Partida ganada por: ' + divbox2.textContent);
      if (divbox2.textContent === 'X') {
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox2.textContent === 'O') {
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
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
      console.log('Partida ganada por: ' + divbox3.textContent);
      if (divbox3.textContent === 'X') {
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox3.textContent === 'O') {
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
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
      console.log('Partida ganada por: ' + divbox3.textContent);
      if (divbox3.textContent === 'X') {
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox3.textContent === 'O') {
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
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
      console.log('Partida ganada por: ' + divbox4.textContent);
      if (divbox4.textContent === 'X') {
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox4.textContent === 'O') {
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
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
      console.log('Partida ganada por: ' + divbox7.textContent);
      if (divbox7.textContent === 'X') {
        gameResult('You Win!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      } else if (divbox7.textContent === 'O') {
        gameResult('You Loose!');
        startBtn.textContent = 'Start';
        startButton();
        for (const divBox of divboxes) {
          divBox.removeEventListener('click', toDraw);
        }
      }
    } else if (numClick.length === 0) {
      const drawGames = localStorage.setItem('draw', 1);
      gameResult('A draw!');
      startBtn.textContent = 'Start';
      startButton();
      for (const divBox of divboxes) {
        divBox.removeEventListener('click', toDraw);
      }
    }
  };
};
