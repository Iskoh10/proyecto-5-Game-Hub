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

    setTimeout(() => {
      const unsheathe = document.querySelector('#sword');
      unsheathe.classList.add('unsheathe');
      const yourPlace = new Audio('/assets/yourplace.mp3');

      yourPlace.play();
    }, 1000);
  });

  toInactivateProfileBtn();

  const initialScore = 0;
  const pDataMøm = document.createElement('p');
  pDataMøm.className = 'p_data_møm';
  pDataMøm.textContent = initialScore + ' correct answers';

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
      divDataMøm.style.display = 'none';
      const overlay = document.querySelector('.overlay');
      overlay.remove();
      const unsheathe = document.querySelector('#sword');
      unsheathe.classList.remove('unsheathe');
    });

    const containerImg = document.createElement('div');
    containerImg.classList.add('container_img', 'flex_container');

    const imgSword = document.createElement('img');
    imgSword.id = 'sword';
    imgSword.src = '/assets/sword.png';

    containerImg.appendChild(imgSword);

    const h3DataMøm = document.createElement('h3');
    h3DataMøm.textContent = 'Your Best Score';

    const initialScore = 0;
    const pDataMøm = document.createElement('p');
    pDataMøm.className = 'p_data_møm';
    pDataMøm.textContent = initialScore + ' correct answers';

    divDataMøm.appendChild(closeProfile);
    divDataMøm.appendChild(containerImg);
    divDataMøm.appendChild(h3DataMøm);
    divDataMøm.appendChild(pDataMøm);

    sectionMøm.appendChild(divDataMøm);
  };

  const divOverlay = document.createElement('div');
  divOverlay.classList = 'overlay';
  sectionMøm.appendChild(divOverlay);

  const divRules = document.createElement('div');
  divRules.classList.add('div_rules', 'flex_container');
  const h3Rules = document.createElement('h3');
  h3Rules.textContent = 'Rules';
  const pRulesOne = document.createElement('p');
  pRulesOne.textContent =
    '👉 Choose an answer using the up and down arrows, when you have decided press enter.';
  const pRulesTwo = document.createElement('p');
  pRulesTwo.textContent =
    '👉 If you are tired of playing you can press the finish key and it will show you the number of correct answers.';
  const pRulesThree = document.createElement('p');
  pRulesThree.textContent =
    '👉 Press accept to show you your high score profile (top right corner) and start playing.';

  const btnAccept = document.createElement('div');
  btnAccept.classList.add('btn_accept', 'flex_container');
  const pAccept = document.createElement('p');
  pAccept.textContent = 'Accept';

  btnAccept.addEventListener('click', () => {
    const initialClick = new Event('click');
    btnProfile.dispatchEvent(initialClick);

    divOverlay.remove();
    divRules.remove();
    toStartPlay();
  });

  btnAccept.appendChild(pAccept);

  divRules.appendChild(h3Rules);
  divRules.appendChild(pRulesOne);
  divRules.appendChild(pRulesTwo);
  divRules.appendChild(pRulesThree);
  divRules.appendChild(btnAccept);

  sectionMøm.appendChild(divRules);

  const toStartPlay = () => {
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

    divRestart.addEventListener('click', toRestart);

    const divFinish = document.createElement('div');
    divFinish.classList.add('div_finish', 'flex_container');

    const pFinish = document.createElement('p');
    pFinish.textContent = 'Finish';

    divFinish.appendChild(pFinish);

    divFinish.addEventListener('click', toFinish);

    divControl.appendChild(divRestart);
    divControl.appendChild(divFinish);
    sectionMøm.appendChild(divControl);
  };
};

export const toRestart = () => {
  console.log('Reiniciar');
  restartValue(0, true);
};

export const toFinish = (completed) => {
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

  const sectionMøm = document.querySelector('.section_møm');
  sectionMøm.appendChild(overlay);
  sectionMøm.appendChild(finalMessage);

  if (completed) {
    finalMessage.classList.add('completed');
    const title = document.createElement('h2');
    title.className = 'title_completed';
    title.textContent = 'Congratulations you finished';
    finalMessage.appendChild(title);
    if (questionRight === 25) {
      const divCloud = document.createElement('div');
      divCloud.classList.add('div_cloud', 'flex_container');
      const cloudImg = document.createElement('img');
      cloudImg.src = '/assets/cloud.webp';

      divCloud.appendChild(cloudImg);

      finalMessage.appendChild(divCloud);
    }
  }

  toRestart();
  toRestartScore();
};
