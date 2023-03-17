'use strict';

const highNumber = 20;
let highscore = 0;
let score = highNumber;
let secret = Math.floor((Math.random() * highNumber) + 1);
console.log(secret)

document.querySelector('.score').textContent = score.toString();
document.querySelector('.between').textContent = `(Between 1 and ${highNumber})`;


const decreaseScore = (message) => {
  score--;
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score.toString();
}

const clickHandler = () => {
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'No number inserted!🫠';
  } else if (guess === secret) {
    document.querySelector('.message').textContent = 'Correct number!✅';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secret.toString();

    if(highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.check').removeEventListener('click', clickHandler);
  } else if (guess > secret) {
    if(score > 1) {
      decreaseScore('To high!📈');
    } else {
      decreaseScore('You loser!🤷‍♀️');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.check').removeEventListener('click', clickHandler);
    }
  } else {
    if(score > 1) {
      decreaseScore('To low!📉');
    } else {
      decreaseScore('You loser!🤷‍♀️');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.check').removeEventListener('click', clickHandler);
    }
  }
}

const againHandler = () => {
  score = highNumber;
  secret = Math.trunc(Math.random() * highNumber);
  console.log(secret)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score.toString();
  document.querySelector('.guess').value = '';
  document.querySelector('.check').addEventListener('click', clickHandler);
}

document.querySelector('.check').addEventListener('click', clickHandler);
document.querySelector('.again').addEventListener('click', againHandler);
