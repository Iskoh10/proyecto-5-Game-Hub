import './FunctionTtt.css';

export const functionalityTtt = () => {
  let numClick = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  const divboxes = document.querySelectorAll('.square');

  for (const divBox of divboxes) {
    divBox.addEventListener('click', (e) => {
      selector(e);
    });
  }

  const selector = (e) => {
    if (numClick.length % 2 === 0 && e.target.textContent === '') {
      e.target.textContent = 'O';
      numClick.pop();
      check();
    } else if (numClick.length % 2 !== 0 && e.target.textContent === '') {
      e.target.textContent = 'X';
      numClick.pop();
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
    if (
      divbox1.textContent === divbox2.textContent &&
      divbox2.textContent === divbox3.textContent &&
      divbox1.textContent !== ''
    ) {
      divbox1.style.backgroundColor = 'red';
      divbox2.style.backgroundColor = 'red';
      divbox3.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox1.textContent);

      // for (const divBox of divboxes) {
      //   divBox.removeEventListener('click', (e) => {
      //     selector(e);
      //   });
      // }

      //! Eliminar el addEventlistener cuando gane alguno

      const sectionGameTtt = document.querySelector('.section_game_ttt');
      const modalWin = document.createElement('div');
      modalWin.classList.add('modal_win', 'flex_container');
      sectionGameTtt.appendChild(modalWin);
    } else if (
      divbox1.textContent === divbox4.textContent &&
      divbox4.textContent === divbox7.textContent &&
      divbox1.textContent !== ''
    ) {
      divbox1.style.backgroundColor = 'red';
      divbox4.style.backgroundColor = 'red';
      divbox7.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox1.textContent);
    } else if (
      divbox1.textContent === divbox5.textContent &&
      divbox5.textContent === divbox9.textContent &&
      divbox1.textContent !== ''
    ) {
      divbox1.style.backgroundColor = 'red';
      divbox5.style.backgroundColor = 'red';
      divbox9.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox1.textContent);
    } else if (
      divbox2.textContent === divbox5.textContent &&
      divbox5.textContent === divbox8.textContent &&
      divbox2.textContent !== ''
    ) {
      divbox2.style.backgroundColor = 'red';
      divbox5.style.backgroundColor = 'red';
      divbox8.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox2.textContent);
    } else if (
      divbox3.textContent === divbox6.textContent &&
      divbox6.textContent === divbox9.textContent &&
      divbox3.textContent !== ''
    ) {
      divbox3.style.backgroundColor = 'red';
      divbox6.style.backgroundColor = 'red';
      divbox9.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox3.textContent);
    } else if (
      divbox3.textContent === divbox5.textContent &&
      divbox5.textContent === divbox7.textContent &&
      divbox3.textContent !== ''
    ) {
      divbox3.style.backgroundColor = 'red';
      divbox5.style.backgroundColor = 'red';
      divbox7.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox3.textContent);
    } else if (
      divbox4.textContent === divbox5.textContent &&
      divbox5.textContent === divbox6.textContent &&
      divbox4.textContent !== ''
    ) {
      divbox4.style.backgroundColor = 'red';
      divbox5.style.backgroundColor = 'red';
      divbox6.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox4.textContent);
    } else if (
      divbox7.textContent === divbox8.textContent &&
      divbox8.textContent === divbox9.textContent &&
      divbox7.textContent !== ''
    ) {
      divbox7.style.backgroundColor = 'red';
      divbox8.style.backgroundColor = 'red';
      divbox9.style.backgroundColor = 'red';
      console.log('Partida ganada por: ' + divbox7.textContent);
    }
  };
};
