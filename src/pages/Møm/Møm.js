import {
  questionRight,
  restartValue,
  sumScore,
  toRestartScore
} from '../../components/AnswerFunc/AnswerFunc';
import { createDivBtns } from '../../components/DivBtns/DivBtns';
import { toInactivateProfileBtn } from '../../components/FunctionProfileBtnTtt/FunctionProfileBtnTtt';
import { shuffleAnswers } from '../../components/ShuffleAnswers/ShuffleAnswers';
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

  const homeBtn = document.querySelector('.btn_home');
  homeBtn.addEventListener('click', () => {
    restartValue(0);
  });

  const btnProfile = document.querySelector('.btn_profile');
  btnProfile.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    sectionMøm.appendChild(overlay);
    showDataMøm();
    sumScore();
  });

  toInactivateProfileBtn();

  const divDataMøm = document.createElement('div');
  divDataMøm.classList.add('div_data_møm', 'flex_container');

  const closeProfile = document.createElement('p');
  closeProfile.className = 'close_profile';
  closeProfile.textContent = 'X';
  closeProfile.addEventListener('click', () => {
    divDataMøm.style.opacity = '0';
    const overlay = document.querySelector('.overlay');
    overlay.remove();
  });

  const h3DataMøm = document.createElement('h3');
  h3DataMøm.textContent = 'Your Best Score';

  const initialScore = 0;
  const pDataMøm = document.createElement('p');
  pDataMøm.className = 'p_data_møm';
  pDataMøm.textContent = initialScore + ' correct answers';

  divDataMøm.appendChild(closeProfile);
  divDataMøm.appendChild(h3DataMøm);
  divDataMøm.appendChild(pDataMøm);

  sectionMøm.appendChild(divDataMøm);

  const showDataMøm = () => {
    const divDataMøm = document.querySelector('.div_data_møm');

    if (!divDataMøm) {
      toDrawDataMøm();
    } else {
      divDataMøm.remove();
      toDrawDataMøm();
    }
  };

  const toDrawDataMøm = () => {
    const divDataMøm = document.createElement('div');
    divDataMøm.classList.add('div_data_møm', 'flex_container');

    const closeProfile = document.createElement('p');
    closeProfile.className = 'close_profile';
    closeProfile.textContent = 'X';
    closeProfile.addEventListener('click', () => {
      divDataMøm.style.opacity = '0';
      const overlay = document.querySelector('.overlay');
      overlay.remove();
    });

    const h3DataMøm = document.createElement('h3');
    h3DataMøm.textContent = 'Your Best Score';

    const initialScore = 0;
    const pDataMøm = document.createElement('p');
    pDataMøm.className = 'p_data_møm';
    pDataMøm.textContent = initialScore + ' correct answers';

    divDataMøm.appendChild(closeProfile);
    divDataMøm.appendChild(h3DataMøm);
    divDataMøm.appendChild(pDataMøm);

    sectionMøm.appendChild(divDataMøm);
  };

  const container = document.createElement('div');
  container.classList.add('div_questions', 'flex_container');

  sectionMøm.appendChild(container);

  shuffleAnswers();

  const divControl = document.createElement('div');
  divControl.classList.add('div_control', 'flex_container');

  const divRestart = document.createElement('div');
  divRestart.classList.add('div_restart', 'flex_container');

  const pRestart = document.createElement('p');
  pRestart.textContent = 'Restart';

  divRestart.appendChild(pRestart);

  const toRestart = () => {
    console.log('Reiniciar');
    restartValue(0, true);
  };

  divRestart.addEventListener('click', toRestart);

  const divFinish = document.createElement('div');
  divFinish.classList.add('div_finish', 'flex_container');

  const pFinish = document.createElement('p');
  pFinish.textContent = 'Finish';

  divFinish.appendChild(pFinish);

  const toFinish = () => {
    console.log('Acabar');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const finalMessage = document.createElement('div');
    finalMessage.classList.add('final_message', 'flex_container');

    const closeFM = document.createElement('p');
    closeFM.className = 'close_profile';
    closeFM.textContent = 'X';
    closeFM.addEventListener('click', () => {
      finalMessage.remove();
      const overlay = document.querySelector('.overlay');
      overlay.remove();
    });

    const finalTitle = document.createElement('h3');
    finalTitle.textContent = 'Your Score is:';
    const pFinalMessage = document.createElement('p');
    pFinalMessage.textContent = `${questionRight}  correct answers`;

    finalMessage.appendChild(closeFM);
    finalMessage.appendChild(finalTitle);
    finalMessage.appendChild(pFinalMessage);

    sectionMøm.appendChild(overlay);
    sectionMøm.appendChild(finalMessage);

    toRestart();
    toRestartScore();
  };

  divFinish.addEventListener('click', toFinish);

  divControl.appendChild(divRestart);
  divControl.appendChild(divFinish);
  sectionMøm.appendChild(divControl);
};

//! tengo que solucionar el crear el p del perfil para poder actualizar cuando se da al enter, o cambiar que p se actualice cuando das al btnprofile.
