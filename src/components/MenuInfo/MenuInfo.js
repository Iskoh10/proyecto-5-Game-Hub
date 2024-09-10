import { checkModal } from '../CheckingModal/CheckingModal';
import './MenuInfo.css';

export const createMenuInfo = (parentNode) => {
  const menu = document.createElement('div');
  menu.className = 'container_menu';

  const baseMenu = document.createElement('div');
  baseMenu.className = 'base_menu';

  baseMenu.addEventListener('click', (e) => {
    document.body.classList.remove('active');
    checkModal(parentNode, e.target.innerText);
  });

  const mømBtn = document.createElement('div');
  mømBtn.classList.add('møm_btn', 'flex_container');
  const pMøm = document.createElement('p');
  pMøm.textContent = 'Møm';

  mømBtn.appendChild(pMøm);

  const gmoworldBtn = document.createElement('div');
  gmoworldBtn.classList.add('gw_btn', 'flex_container');
  const pGW = document.createElement('p');
  pGW.textContent = 'GW';

  gmoworldBtn.appendChild(pGW);

  const tictactoeBtn = document.createElement('div');
  tictactoeBtn.classList.add('ttt_btn', 'flex_container');
  const pTtt = document.createElement('p');
  pTtt.textContent = 'Ttt';

  tictactoeBtn.appendChild(pTtt);

  baseMenu.appendChild(mømBtn);
  baseMenu.appendChild(gmoworldBtn);
  baseMenu.appendChild(tictactoeBtn);

  const menuBtn = document.createElement('div');
  menuBtn.className = 'menu_btn';
  const pInfo = document.createElement('p');
  pInfo.textContent = 'Info';

  menuBtn.appendChild(pInfo);

  menu.appendChild(baseMenu);
  menu.appendChild(menuBtn);

  menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('active');
  });

  parentNode.appendChild(menu);
};
