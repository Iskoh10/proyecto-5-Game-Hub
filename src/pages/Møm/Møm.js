import { answerFunc } from '../../components/AnswerFunc/AnswerFunc';
import { createDivBtns } from '../../components/DivBtns/DivBtns';
import { toInactivateProfileBtn } from '../../components/FunctionProfileBtnTtt/FunctionProfileBtnTtt';
import { shuffleAnswers } from '../../components/ShuffleAnswers/ShuffleAnswers';
import { survey } from '../../data/survey';
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

  toInactivateProfileBtn();

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
      divDataMøm.remove();
    });

    const h3DataMøm = document.createElement('h3');
    h3DataMøm.textContent = 'Your Score';
    const pDataMøm = document.createElement('p');
    pDataMøm.textContent = `4 correct answers`; //! Aqui vendran los datos del localstorage

    divDataMøm.appendChild(closeProfile);
    divDataMøm.appendChild(h3DataMøm);
    divDataMøm.appendChild(pDataMøm);

    sectionMøm.appendChild(divDataMøm);
  };

  const btnProfileMøm = document.querySelector('.btn_profile');
  btnProfileMøm.addEventListener('click', showDataMøm);

  const container = document.createElement('div');
  container.classList.add('div_questions', 'flex_container');

  sectionMøm.appendChild(container);

  function resetNumQuestion() {
    numQuestion = 0;
  }
  window.onload = resetNumQuestion;
  shuffleAnswers();
};
