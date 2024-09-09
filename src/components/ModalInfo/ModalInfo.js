import { info } from '../../data/info';
import './ModalInfo.css';

export const createModalInfo = (/*parentNode*/ title /*, details*/) => {
  //! Limpiar el modal
  const divModal = document.createElement('div');
  divModal.classList.add('div_modal', 'flex_container');

  const divBtns = document.createElement('div');
  divBtns.classList.add('div_btns', 'flex_container');

  const btnChanger = document.createElement('div');
  btnChanger.classList.add('btn_changer', 'flex_container');

  for (const game of info) {
    if (game.id === title) {
      //! Hacer un for para extraer los valores diferentes al enviado, y mandarlo a los botones
      const btnOne = document.createElement('div');
      btnOne.classList.add('btn_one', 'flex_container');
      const pOne = document.createElement('p');
      pOne.textContent = 'hola1';

      btnOne.appendChild(pOne);

      const btnTwo = document.createElement('div');
      btnTwo.classList.add('btn_two', 'flex_container');
      const pTwo = document.createElement('p');
      pTwo.textContent = 'hola2';

      btnTwo.appendChild(pTwo);
      btnChanger.appendChild(btnOne);
      btnChanger.appendChild(btnTwo);
      divBtns.appendChild(btnChanger);

      const btnExit = document.createElement('p');
      btnExit.className = 'btn_exit';
      btnExit.textContent = 'X';

      btnExit.addEventListener('click', () => {
        document.querySelector('.section_containerHome').removeChild(divModal);
      });

      divBtns.appendChild(btnExit);

      const divGame = document.createElement('div');
      divGame.classList.add('div_game', 'flex_container');
      const titleGame = document.createElement('h3');
      titleGame.textContent = game.name;

      const description = document.createElement('p');
      description.className = 'p_description';
      description.textContent = game.details;

      divModal.appendChild(divBtns);
      divGame.appendChild(titleGame);
      divGame.appendChild(description);
      divModal.appendChild(divGame);

      document.querySelector('.section_containerHome').appendChild(divModal);
    }
  }
};
