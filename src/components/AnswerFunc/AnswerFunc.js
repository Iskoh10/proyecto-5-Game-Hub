import { survey } from '../../data/survey';
import { createMøm } from '../../pages/Møm/Møm';
import { shuffleAnswers } from '../ShuffleAnswers/ShuffleAnswers';

let numQuestion = 0;

export const answerFunc = () => {
  let currentIndex = 0;
  const answers = document.querySelectorAll('.answer');

  const updateCursor = (index) => {
    answers.forEach((answer, i) => {
      const cursor = answer.querySelector('.cursor');
      if (i === index) {
        cursor.style.visibility = 'visible';
        answer.classList.add('selected');
      } else {
        cursor.style.visibility = 'hidden';
        answer.classList.remove('selected');
      }
    });
  };

  const MoveSound = new Audio('public/assets/moveCursor.mp3');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      currentIndex = (currentIndex + 1) % answers.length;
      MoveSound.play();
    } else if (e.key === 'ArrowUp') {
      currentIndex = (currentIndex - 1 + answers.length) % answers.length;
      MoveSound.play();
    }
    updateCursor(currentIndex);
  });

  updateCursor(currentIndex);
};

// const printQuestion = () => {
//   document.body.innerHTML = '';
//   const divContainer = document.createElement('div');
//   divContainer.classList.add('div_container');

//   const title = document.createElement('h2');
//   title.textContent = survey[numQuestion].question;

//   divContainer.appendChild(title);

//   const divQuestion = document.createElement('div');
//   divQuestion.classList.add('div_question');

//   divContainer.appendChild(divQuestion);

//   // survey[numQuestion].answers.forEach((answer) => {
//   //   const p = document.createElement('p');
//   //   p.textContent = answer.answer;

//   //   divQuestion.appendChild(p);
//   // });

//   document.body.appendChild(divContainer);
// };

const SelectionSound = new Audio('public/assets/selection.mp3');
let questionRight = 0;

export const activeEnter = () => {
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      SelectionSound.play();

      console.log(survey.length);
      if (numQuestion < survey.length - 1) {
        numQuestion += 1;
        shuffleAnswers(numQuestion);
      } else {
        console.log(
          'Congratulations, you completed the questionnaire! Your score: ' +
            questionRight
        );
        numQuestion = 0;
      }
      // const selectedAnswer = document.querySelector('.selected');

      // const idSelected = parseInt(selectedAnswer.id);

      // const checkingAnswer = survey[numQuestion].answers.find(
      //   (element) => element.id === idSelected && element.correct === true
      // );

      // if (checkingAnswer) {
      //   questionRight += 1;
      //   console.log('Correct answer!');
      // } else {
      //   console.log('Wrong answer');
      // }

      // console.log('Removing event listener');
      // document.removeEventListener('keydown', activeEnter);

      // const allAnswers = document.querySelectorAll('.answer');
      // allAnswers.forEach((answer) => answer.classList.remove('selected'));
    }
  });
};
activeEnter();
//! Me da error, la segunda pregunta hace como un duplicado.
