'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openButtons = document.querySelectorAll('.show-modal');
const closeButton = document.querySelector('.close-modal');

const showModalHandler = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const hideModalHandler = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

openButtons.forEach(button => button.addEventListener(
  'click', showModalHandler)
);

closeButton.addEventListener('click', hideModalHandler);
overlay.addEventListener('click', hideModalHandler);

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModalHandler();
  }
});
