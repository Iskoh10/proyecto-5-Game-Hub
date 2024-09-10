import { info } from '../../data/info';
import { checkModal } from '../CheckingModal/CheckingModal';
import './ModalInfo.css';

export const createModalInfo = (parentNode, title, node) => {
  node.innerHTML = '';

  const divBtns = document.createElement('div');
  divBtns.classList.add('div_btns', 'flex_container');

  const btnChanger = document.createElement('div');
  btnChanger.classList.add('btn_changer', 'flex_container');

  let othersGame = [{}];
  for (const game of info) {
    othersGame = info.filter((game) => game.id !== title);
  }

  const btnOne = document.createElement('div');
  btnOne.classList.add('btn_one', 'flex_container');
  btnOne.style.backgroundColor = othersGame[0].color;
  btnOne.addEventListener('click', (e) => {
    checkModal(parentNode, e.target.innerText);
  });

  const pOne = document.createElement('p');
  pOne.textContent = othersGame[0].id;

  btnOne.appendChild(pOne);

  const btnTwo = document.createElement('div');
  btnTwo.classList.add('btn_two', 'flex_container');
  btnTwo.style.backgroundColor = othersGame[1].color;
  btnTwo.addEventListener('click', (e) => {
    checkModal(parentNode, e.target.innerText);
  });

  const pTwo = document.createElement('p');
  pTwo.textContent = othersGame[1].id;

  btnTwo.appendChild(pTwo);
  btnChanger.appendChild(btnOne);
  btnChanger.appendChild(btnTwo);
  divBtns.appendChild(btnChanger);

  const btnExit = document.createElement('p');
  btnExit.className = 'btn_exit';
  btnExit.textContent = 'X';

  btnExit.addEventListener('click', () => {
    parentNode.removeChild(node);
  });

  divBtns.appendChild(btnExit);

  for (const game of info) {
    if (game.id === title) {
      const divGame = document.createElement('div');
      divGame.classList.add('div_game', 'flex_container');
      const titleGame = document.createElement('h3');
      titleGame.textContent = game.name;

      const description = document.createElement('p');
      description.className = 'p_description';
      description.textContent = game.details;

      node.appendChild(divBtns);
      divGame.appendChild(titleGame);
      divGame.appendChild(description);
      node.appendChild(divGame);
    }

    parentNode.appendChild(node);
  }
};
