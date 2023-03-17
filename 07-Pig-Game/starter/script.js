'use strict';

// Selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--0');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const diceNewBtn = document.querySelector('.btn--new');
const diceRollBtn = document.querySelector('.btn--roll');
const diceHoldBtn = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = () => {
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  scores = [0,0];
  currentScore = 0;
  activePlayer = 0;

  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
};

// Rolling dice functionality
diceRollBtn.addEventListener('click', () => {
  if (playing) {
    // Generate random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled (if 1 - change player)

    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

diceHoldBtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

diceNewBtn.addEventListener('click', init);


// Start game!
init();





