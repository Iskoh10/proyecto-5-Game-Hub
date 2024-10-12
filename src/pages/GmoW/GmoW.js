import { createDivBtns } from '../../components/DivBtns/DivBtns';
import { cards } from '../../data/cards';
import './GmoW.css';

export const createGmoW = () => {
  document.body.innerHTML = '';

  const divBgGW = document.createElement('div');
  divBgGW.classList.add('div_bg_gw', 'flex_container');

  const sectionGW = document.createElement('section');
  sectionGW.classList.add('section_gw', 'flex_container');

  createDivBtns(sectionGW, 'div_btns_gw');

  const divLevel = document.createElement('div');
  divLevel.classList.add('div_level', 'flex_container');
  const labelLevel = document.createElement('label');
  labelLevel.textContent = 'Choose your Level:';
  labelLevel.setAttribute('for', 'Level');

  const selectLevel = document.createElement('select');
  selectLevel.id = 'level';
  selectLevel.addEventListener('input', () => {
    if (selectLevel.value === 'beginner') {
      console.log(selectLevel.value);
      divContainerGW.style.gridTemplateColumns = 'repeat(4, 150px)';
      divContainerGW.style.gridTemplateRows = 'repeat(4, 150px)';
      levelSel(8);
      blockSel();
    } else if (selectLevel.value === 'amateur') {
      console.log(selectLevel.value);
      divContainerGW.style.gridTemplateColumns = 'repeat(5, 150px)';
      divContainerGW.style.gridTemplateRows = 'repeat(4, 150px)';
      levelSel(10);
      blockSel();
    } else if (selectLevel.value === 'skilled') {
      console.log(selectLevel.value);
      sectionGW.style.width = '950px';
      divContainerGW.style.gridTemplateColumns = 'repeat(6, 150px)';
      divContainerGW.style.gridTemplateRows = 'repeat(4, 150px)';
      levelSel(12);
      blockSel();
    }
  });

  const optionDefault = document.createElement('option');
  optionDefault.textContent = 'Choose';
  optionDefault.selected = 'true';
  optionDefault.hidden = 'true';

  const optionBeginner = document.createElement('option');
  optionBeginner.textContent = 'Beginner';
  optionBeginner.setAttribute('value', 'beginner');

  const optionAmateur = document.createElement('option');
  optionAmateur.textContent = 'Amateur';
  optionAmateur.setAttribute('value', 'amateur');

  const optionSkilled = document.createElement('option');
  optionSkilled.textContent = 'Skilled';
  optionSkilled.setAttribute('value', 'skilled');

  divLevel.appendChild(labelLevel);
  divLevel.appendChild(selectLevel);
  selectLevel.appendChild(optionDefault);
  selectLevel.appendChild(optionBeginner);
  selectLevel.appendChild(optionAmateur);
  selectLevel.appendChild(optionSkilled);

  const blockSel = () => {
    const select = document.querySelector('select');
    select.disabled = true;
  };

  const unLockSel = () => {
    const select = document.querySelector('select');
    select.disabled = false;
  };

  const divContainerGW = document.createElement('div');
  divContainerGW.classList.add('div_container_gw');

  const p1 = document.createElement('p');
  p1.className = 'p_1';
  p1.textContent = 'G';

  const p2 = document.createElement('p');
  p2.className = 'p_2';
  p2.textContent = 'W';

  const p3 = document.createElement('p');
  p3.className = 'p_3';
  p3.textContent = 'Card Game';

  divContainerGW.appendChild(p1);
  divContainerGW.appendChild(p2);
  divContainerGW.appendChild(p3);

  divBgGW.appendChild(sectionGW);
  document.body.appendChild(divBgGW);

  sectionGW.appendChild(divLevel);
  sectionGW.appendChild(divContainerGW);

  let selectedEmoji = [];

  const levelSel = (level) => {
    selectedEmoji = [];
    while (selectedEmoji.length < level) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
      if (!selectedEmoji.includes(card)) {
        selectedEmoji.push(card);
      }
    }
    duplicate();
  };

  let selectedEmojiDu = [];
  const duplicate = () => {
    selectedEmojiDu = [...selectedEmoji, ...selectedEmoji];

    mixCards(selectedEmojiDu);
  };

  let mixedCards = [];

  const mixCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    mixedCards = array;
    createBoard(mixedCards);
  };

  const checkWin = () => {
    console.log(selectedEmojiDu.length);
    const divMatched = document.querySelectorAll('.matched');
    console.log(divMatched.length);
    if (selectedEmojiDu.length === divMatched.length) {
      let gamesWin = localStorage.getItem('games_won')
        ? parseInt(localStorage.getItem('games_won'))
        : 0;
      gamesWin += 1;
      localStorage.setItem('games_won', gamesWin);

      const winMessage = document.querySelector('.div_container_gw');
      winMessage.innerHTML = '';
      winMessage.classList.remove('div_container_gw');
      winMessage.style.cssText = '';

      winMessage.classList.add('win_message', 'flex_container');
      winMessage.style.width = '600px';
      winMessage.style.height = '600px';
      const pWin = document.createElement('p');
      pWin.className = 'p_win';
      pWin.textContent = 'Congratulation!!!';

      winMessage.appendChild(pWin);

      const btnReboot = document.createElement('div');
      btnReboot.classList.add('btn_reboot', 'flex_container');
      btnReboot.addEventListener('click', () => {
        document.body.innerHTML = '';
        createGmoW();
        unLockSel();
      });

      const pReboot = document.createElement('p');
      pReboot.textContent = 'Restart';

      btnReboot.appendChild(pReboot);
      sectionGW.appendChild(btnReboot);
    }
  };

  const createBoard = (array) => {
    divContainerGW.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      const divCard = document.createElement('div');
      divCard.classList.add('card', 'card' + i, 'flex_container');

      const innerCard = document.createElement('div');
      innerCard.classList.add('inner_card', 'flex_container');

      const backCard = document.createElement('div');
      backCard.classList.add('back_card', 'flex_container');
      backCard.textContent = '❓';

      const frontCard = document.createElement('div');
      frontCard.classList.add('front_card', 'flex_container');
      frontCard.textContent = mixedCards[i];

      divCard.addEventListener('click', () => {
        if (
          divCard.classList.contains('flip') ||
          divCard.classList.contains('matched')
        )
          return;

        divCard.classList.toggle('flip');

        const selectedByUser = document.querySelectorAll('.flip:not(.matched)');
        if (selectedByUser.length === 2) {
          document.body.style.pointerEvents = 'none';

          console.log('compruebo');
          if (selectedByUser[0].textContent === selectedByUser[1].textContent) {
            console.log(selectedByUser);
            console.log('Enhorabuena Acertaste');
            setTimeout(() => {
              selectedByUser[0].classList.add('matched');
              selectedByUser[1].classList.add('matched');
              selectedByUser[0].classList.remove('flip');
              selectedByUser[1].classList.remove('flip');
              document.body.style.pointerEvents = 'auto';

              checkWin();
            }, 500);
          } else {
            console.log('Fallaste');
            setTimeout(() => {
              selectedByUser[0].classList.toggle('flip');
              selectedByUser[1].classList.toggle('flip');
              document.body.style.pointerEvents = 'auto';
            }, 1000);
          }
        }
      });

      innerCard.appendChild(backCard);
      innerCard.appendChild(frontCard);

      divCard.appendChild(innerCard);

      divContainerGW.appendChild(divCard);
    }
  };
  const btnProfile = document.querySelector('.btn_profile');
  btnProfile.addEventListener('click', () => {
    blockSel();
    const divProfile = document.createElement('div');
    divProfile.classList.add('div_profile', 'flex_container');

    const closeX = document.createElement('p');
    closeX.className = 'close_x';
    closeX.textContent = 'X';

    closeX.addEventListener('click', () => {
      unLockSel();
      const divProfile = document.querySelector('.div_profile');
      divProfile.remove();
    });

    const title = document.createElement('h3');
    title.textContent = 'Games Won';

    const games_wonData = localStorage.getItem('games_won');
    const games_wonP = document.createElement('p');
    games_wonP.className = 'won_p';
    games_wonP.textContent = games_wonData;

    divProfile.appendChild(closeX);
    divProfile.appendChild(title);
    divProfile.appendChild(games_wonP);
    sectionGW.appendChild(divProfile);
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
      unLockSel();
    }
  });
  const mediaQSmall = window.matchMedia('(min-width: 360px)');

  function smallScreen(e) {
    if (e.matches) {
      divContainerGW.style.gridTemplateColumns = 'repeat(4, 75px)';
      divContainerGW.style.gridTemplateRows = 'repeat(4, 75px)';
      levelSel(8);
      blockSel();
    }
  }

  mediaQSmall.addEventListener('change', smallScreen);

  smallScreen(mediaQSmall);
};
