import { survey } from '../../data/survey';
import { createMøm } from '../../pages/Møm/Møm';
import { shuffleAnswers } from '../ShuffleAnswers/ShuffleAnswers';

let numQuestion = 0;

export const restartValue = (value, go) => {
  numQuestion = value;

  if (go) {
    shuffleAnswers();
  }
};

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

export const toRestartScore = () => {
  questionRight = 0;
};

const SelectionSound = new Audio('public/assets/selection.mp3');
export let questionRight = 0;

export const sumScore = (enter = 0) => {
  const scoreMømdata = localStorage.getItem('scoremøm');
  const pDataMøm = document.querySelector('.p_data_møm');

  pDataMøm.textContent = scoreMømdata + ' correct answers';

  if (!scoreMømdata) {
    const scoreMøm = localStorage.setItem('scoremøm', enter);
    sumScore();
  } else if (questionRight > parseInt(scoreMømdata)) {
    const scoreMøm = localStorage.setItem('scoremøm', questionRight);
  }
};

export const activeEnter = () => {
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      SelectionSound.play();

      const selectedAnswer = document.querySelector('.selected');
      const idSelected = parseInt(selectedAnswer.id);

      const checkingAnswer = survey[numQuestion].answers.find(
        (element) => element.id === idSelected && element.correct === true
      );

      if (checkingAnswer) {
        questionRight += 1;
        sumScore(1);
        console.log('Correct answer!');
      } else {
        console.log('Wrong answer');
      }

      console.log(survey.length);
      if (numQuestion < survey.length - 1) {
        numQuestion += 1;
        shuffleAnswers(numQuestion);
      } else {
        console.log(
          'Congratulations, you completed the questionnaire! Your score: ' +
            questionRight
        );
      }
    }
  });
};
activeEnter();

// !añadir sumar respuesta correcta y que reinicie la numQuestion si salimos a home
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
