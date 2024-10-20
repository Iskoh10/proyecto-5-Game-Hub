import {
  toActivateStartBtn,
  toInactivateStartBtn
} from '../FunctionStartBtnTtt/FunctionStartBtnTtt';

export const functionalityProfileBtn = (btnProfile) => {
  btnProfile.addEventListener('click', showDataProfile);
};

const showDataProfile = () => {
  toInactivateStartBtn();
  const dataProfile = document.querySelector('.data_profile');
  //! añadir resultados en una unica variable en el localstorage "tictactoe" tipo objeto [{won: , lost: , draw:}]??

  if (!dataProfile) {
    toDrawData();
  } else {
    dataProfile.remove();
    toDrawData();
  }
};

export const toInactivateProfileBtn = () => {
  const btnProfile = document.querySelector('.btn_profile');
  btnProfile.removeEventListener('click', showDataProfile);
};

const toDrawData = () => {
  const dataProfile = document.createElement('div');
  dataProfile.classList.add('data_profile', 'flex_container');
  const sectionTtt = document.querySelector('.section_ttt');
  sectionTtt.appendChild(dataProfile);

  const closeProfile = document.createElement('p');
  closeProfile.className = 'close_profile';
  closeProfile.textContent = 'X';
  closeProfile.addEventListener('click', () => {
    dataProfile.remove();
    toActivateStartBtn();
  });

  const won = document.createElement('p');
  if (!localStorage.getItem('won')) {
    won.textContent = `You won: 0`;
  } else {
    const wonGames = localStorage.getItem('won');
    won.textContent = `You won: ${wonGames}`;
  }

  const lost = document.createElement('p');
  if (!localStorage.getItem('lost')) {
    lost.textContent = `You lost: 0`;
  } else {
    const lostGames = localStorage.getItem('lost');
    lost.textContent = `You lost: ${lostGames}`;
  }

  const draw = document.createElement('p');
  if (!localStorage.getItem('draw')) {
    draw.textContent = `You draw: 0`;
  } else {
    const drawGames = localStorage.getItem('draw');
    draw.textContent = `You draw: ${drawGames}`;
  }

  const deleteData = document.createElement('div');
  deleteData.classList.add('delete_data', 'flex_container');
  const deleteP = document.createElement('p');
  deleteP.textContent = 'Delete data';
  deleteData.addEventListener('click', () => {
    const wonData = localStorage.setItem('won', 0);
    const lostData = localStorage.setItem('lost', 0);
    const drawData = localStorage.setItem('draw', 0);

    showDataProfile();
  });

  deleteData.appendChild(deleteP);

  dataProfile.appendChild(closeProfile);
  dataProfile.appendChild(won);
  dataProfile.appendChild(lost);
  dataProfile.appendChild(draw);
  dataProfile.appendChild(deleteData);
};
