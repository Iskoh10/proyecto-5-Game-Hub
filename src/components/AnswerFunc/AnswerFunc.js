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
