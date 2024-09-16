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

  const SelectionSound = new Audio('public/assets/selection.mp3');
  let questionRight = 0;

  let isProcessing = false;

  const activeEnter = (e) => {
    if (e.key === 'Enter' && !isProcessing) {
      isProcessing = true;
      SelectionSound.play();
      const selectedAnswer = document.querySelector('.selected');

      if (!selectedAnswer) {
        isProcessing = false;
        return;
      }

      const idSelected = parseInt(selectedAnswer.id);

      const checkingAnswer = survey[numQuestion].answers.find(
        (element) => element.id === idSelected && element.correct === true
      );

      if (checkingAnswer) {
        questionRight += 1;
        console.log('Correct answer!');
      } else {
        console.log('Wrong answer');
      }
      console.log('Removing event listener');
      document.removeEventListener('keydown', activeEnter);

      const allAnswers = document.querySelectorAll('.answer');
      allAnswers.forEach((answer) => answer.classList.remove('selected'));

      if (numQuestion < survey.length - 1) {
        numQuestion += 1;
        shuffleAnswers(numQuestion);
        answerFunc();

        document.addEventListener('keydown', activeEnter);
      } else {
        console.log(
          'Congratulations, you completed the questionnaire! Your score: ' +
            questionRight
        );
      }
      isProcessing = false;
    }
  };
  console.log('Adding event listener');
  document.addEventListener('keydown', activeEnter);
};

//! Me da error, la segunda pregunta hace como un duplicado.
