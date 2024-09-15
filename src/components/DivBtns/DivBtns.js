import { stickers } from '../../data/stickers';
import { createHomePage } from '../../pages/Home/Home';
import { functionalityProfileBtn } from '../FunctionProfileBtnTtt/FunctionProfileBtnTtt';
import './DivBtns.css';

export const createDivBtns = (parentNode, ownClass) => {
  const divBtns = document.createElement('div');
  divBtns.classList.add(ownClass, 'flex_container');

  const btnHome = document.createElement('div');
  btnHome.classList.add('btn_home', 'flex_container');
  btnHome.addEventListener('click', () => {
    createHomePage();
  });
  const pBtnHome = document.createElement('p');
  pBtnHome.textContent = 'H';

  btnHome.appendChild(pBtnHome);

  const h2Ttt = document.createElement('h2');
  h2Ttt.className = 'h2_ttt';
  const dataProfile = JSON.parse(localStorage.getItem('myProfile'));
  h2Ttt.textContent = `Hola, ${dataProfile[0].name}`;

  const btnProfile = document.createElement('div');
  btnProfile.classList.add('btn_profile', 'flex_container');
  const imgProfile = document.createElement('img');

  const urlSticker = stickers.find(
    (sticker) => sticker.value === parseInt(dataProfile[0].sticker)
  );

  imgProfile.src = urlSticker.url;

  btnProfile.appendChild(imgProfile);

  divBtns.appendChild(btnHome);
  divBtns.appendChild(h2Ttt);
  divBtns.appendChild(btnProfile);

  parentNode.appendChild(divBtns);
  functionalityProfileBtn(btnProfile);
};
