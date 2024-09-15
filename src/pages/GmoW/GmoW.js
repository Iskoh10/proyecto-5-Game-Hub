import { createDivBtns } from '../../components/DivBtns/DivBtns';
import './GmoW.css';

export const createGmoW = () => {
  document.body.innerHTML = '';

  const divBgGW = document.createElement('div');
  divBgGW.classList.add('div_bg_gw', 'flex_container');

  const sectionGW = document.createElement('section');
  sectionGW.classList.add('section_gw', 'flex_container');

  createDivBtns(sectionGW, 'div_btns_gw');

  divBgGW.appendChild(sectionGW);
  document.body.appendChild(divBgGW);
};
