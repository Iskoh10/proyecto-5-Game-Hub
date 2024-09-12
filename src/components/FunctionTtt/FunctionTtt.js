export const functionalityTtt = () => {
  let numClick = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  const divboxes = document.querySelectorAll('.square');
  divboxes[0].addEventListener('click', (e) => {
    e.target.textContent = 'X';
  });

  console.log(divboxes[0]);

  const check = () => {
    if (
      one.textContent === 'O' &&
      one.textContent === 'O' &&
      three.textContent === 'O'
    ) {
      one.style.backgroundColor = 'pink';
      two.style.backgroundColor = 'pink';
      three.style.backgroundColor = 'pink';
    }
  };
};
