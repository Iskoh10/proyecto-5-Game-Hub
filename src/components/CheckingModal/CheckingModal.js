import { createModalInfo } from '../ModalInfo/ModalInfo';

export const checkModal = (parentNode, title) => {
  const divModal = document.querySelector('.div_modal');

  if (!divModal) {
    const divModal = document.createElement('div');
    divModal.classList.add('div_modal', 'flex_container');
    createModalInfo(parentNode, title, divModal);
  } else {
    createModalInfo(parentNode, title, divModal);
  }
};
