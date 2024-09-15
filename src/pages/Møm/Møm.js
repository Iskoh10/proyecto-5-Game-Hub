import { createDivBtns } from '../../components/DivBtns/DivBtns';
import './Møm.css';

export const createMøm = () => {
  document.body.innerHTML = '';

  const divBgMøm = document.createElement('div');
  divBgMøm.classList.add('div_bg_møm', 'flex_container');

  const sectionMøm = document.createElement('section');
  sectionMøm.classList.add('section_møm', 'flex_container');

  createDivBtns(sectionMøm, 'div_btns_møm');

  divBgMøm.appendChild(sectionMøm);
  document.body.appendChild(divBgMøm);
};

//! pasar la botonera principal a un componente y le damos funcioalidad distinta en cada juego.
