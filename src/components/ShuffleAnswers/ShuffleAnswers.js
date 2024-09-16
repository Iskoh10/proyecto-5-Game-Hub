import { survey } from '../../data/survey';

export const shuffleAnswers = (numQuestion = 0) => {
  console.log(numQuestion);
  const ToShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const toPrintSurvey = (survey) => {
    const container = document.querySelector('.div_questions');
    container.innerHTML = '';

    const questionTitle = document.createElement('h2');
    questionTitle.className = 'question_title';
    questionTitle.textContent = survey[numQuestion].question;
    container.appendChild(questionTitle);

    const shuffledAnswers = ToShuffle([...survey[numQuestion].answers]);

    const divAnswers = document.createElement('div');
    divAnswers.classList.add('div_answers', 'flex_container');

    container.appendChild(divAnswers);

    shuffledAnswers.forEach((answer) => {
      const answerOption = document.createElement('div');
      answerOption.classList.add('answer');
      answerOption.id = answer.id;
      answerOption.textContent = answer.answer;

      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      const imgCursor = document.createElement('img');
      imgCursor.src = 'public/assets/cursor.png';
      cursor.appendChild(imgCursor);

      answerOption.appendChild(cursor);
      divAnswers.appendChild(answerOption);
    });
  };
  toPrintSurvey(survey);
};
