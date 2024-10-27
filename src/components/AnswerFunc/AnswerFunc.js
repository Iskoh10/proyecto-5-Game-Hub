import { survey } from '../../data/survey';
import { toFinish } from '../../pages/Møm/Møm';
import { shuffleAnswers } from '../ShuffleAnswers/ShuffleAnswers';

import './AnswerFunc.css';

let numQuestion = 0;

export const restartValue = (value, go) => {
  numQuestion = value;

  if (go) {
    shuffleAnswers();
  }
};

export const answerFunc = () => {
  const answers = document.querySelectorAll('.answer');
  const MoveSound = new Audio('/assets/moveCursor.mp3');

  const SelectionSound = new Audio('/assets/selection.mp3');

  answers.forEach((answer) => {
    answer.addEventListener('mouseover', () => {
      MoveSound.play();
    });

    answer.addEventListener('click', (e) => {
      SelectionSound.play();
      e.target.classList.add('selected');
      chosenAnswer();
    });
  });
};

export const toRestartScore = () => {
  questionRight = 0;
};

const SelectionSound = new Audio('/assets/selection.mp3');
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

export const chosenAnswer = () => {
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

  if (numQuestion < survey.length - 1) {
    numQuestion += 1;
    shuffleAnswers(numQuestion);
  } else {
    console.log(
      'Congratulations, you completed the questionnaire! Your score: ' +
        questionRight
    );
    toFinish('completed');
  }

  if (numQuestion === 25) {
    toFinish(completed);
  }
};
