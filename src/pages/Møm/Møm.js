import { answerFunc } from '../../components/AnswerFunc/AnswerFunc';
import { createDivBtns } from '../../components/DivBtns/DivBtns';
import { toInactivateProfileBtn } from '../../components/FunctionProfileBtnTtt/FunctionProfileBtnTtt';
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

  const divQuestions = document.createElement('div');
  divQuestions.classList.add('div_questions', 'flex_container');

  const question = document.createElement('h3');
  question.className = 'question';
  question.textContent = '¿Cloud llegó a ser un miembro de SOLDADO de elite?';

  const divAnswers = document.createElement('div');
  divAnswers.classList.add('div_answers', 'flex_container');

  const answerOne = document.createElement('div');
  answerOne.className = 'answer';

  const cursorOne = document.createElement('span');
  cursorOne.className = 'cursor';
  const imgCursorOne = document.createElement('img');
  imgCursorOne.src = 'public/assets/cursor.png';
  cursorOne.appendChild(imgCursorOne);

  answerOne.textContent = 'Sí, trabajaba mano a mano con Zack.';

  answerOne.appendChild(cursorOne);

  const answerTwo = document.createElement('div');
  answerTwo.className = 'answer';

  const cursorTwo = document.createElement('span');
  cursorTwo.className = 'cursor';
  const imgCursorTwo = document.createElement('img');
  imgCursorTwo.src = 'public/assets/cursor.png';
  cursorTwo.style.visibility = 'hidden';
  cursorTwo.appendChild(imgCursorTwo);

  answerTwo.textContent = 'No, fue un soldado raso.';

  answerTwo.appendChild(cursorTwo);

  const answerThree = document.createElement('div');
  answerThree.className = 'answer';

  const cursorThree = document.createElement('span');
  cursorThree.className = 'cursor';
  const imgCursorThree = document.createElement('img');
  imgCursorThree.src = 'public/assets/cursor.png';
  cursorThree.style.visibility = 'hidden';
  cursorThree.appendChild(imgCursorThree);

  answerThree.textContent = 'No, fue un soldado de rango medio.';

  answerThree.appendChild(cursorThree);

  divQuestions.appendChild(question);
  divAnswers.appendChild(answerOne);
  divAnswers.appendChild(answerTwo);
  divAnswers.appendChild(answerThree);
  divQuestions.appendChild(divAnswers);

  sectionMøm.appendChild(divQuestions);
  answerFunc();
};
