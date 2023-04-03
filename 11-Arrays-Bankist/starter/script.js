'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


let currentAccount;
let isSorted = false;

const displayMovements = function(movements, isSorted) {
  //remove inner content for div
  containerMovements.innerHTML = '';

  const movs = isSorted
    ? movements.slice().sort((a,b) => a - b)
    : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class='movements__row'>
          <div class='movements__type movements__type--${type}'>
            ${i + 1} ${type}
          </div>
          <!--<div class='movements__date'>24/01/2037</div>-->
          <div class='movements__value'>${mov}</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(account) {
  account.balance = account.movements.reduce((acc, movement) => acc + movement, 0);
  labelBalance.innerHTML = '';
  labelBalance.textContent = account.balance + '€';
};

const calcDisplaySummary = function(account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + '€';

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(outcomes) + '€';

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (account.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = Math.abs(interest) + '€';
};

const updateUI = function(account) {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

const clearInputs = function(...inputs) {
  inputs.forEach(input => {
    input.value = '';
    input.blur();
  });
};

const addAccountsUserNames = function() {
  accounts.forEach(account => {
      account.username = account.owner
        .toLowerCase()
        .split(' ')
        .map(word => word[0])
        .join('');
    }
  );
};

addAccountsUserNames();

//Login handler

btnLogin.addEventListener('click', function(evt) {
  // prevent form from submitting
  evt.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === +inputLoginPin.value) {
    //Display UI and welcome message
    labelWelcome.textContent = `Good Day, ${currentAccount.owner.split(' ')[0]}!`;
    containerApp.style.opacity = '1';

    // clear login inputs
    clearInputs(inputLoginUsername, inputLoginPin);

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const reciever = accounts.find(account => account.username === inputTransferTo.value);
  const amount = +inputTransferAmount.value;

  if (reciever && reciever.username !== currentAccount.username
    && amount > 0
    && currentAccount.balance >= amount) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);

    updateUI(currentAccount);

    //clear fields
    clearInputs(inputTransferTo, inputTransferAmount);
  }
});

btnLoan.addEventListener('click', function(evt) {
  evt.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);

    //clear input
    clearInputs(inputLoanAmount);
  }
});

btnClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  const closeUsername = inputCloseUsername.value;
  const accountToClose = accounts.find(account => account.username === closeUsername);
  if (accountToClose
    && closeUsername === currentAccount.username
    && currentAccount.pin === +inputClosePin.value
  ) {
    //Delete account
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);

    //HIde UI
    containerApp.style.opacity = '0';

    //clear fields
    clearInputs(inputCloseUsername, inputClosePin);
  }
});

btnSort.addEventListener('click', function(evt) {
  isSorted = !isSorted;
 displayMovements(currentAccount.movements, isSorted);
})

const calcAllAccountsMovementsAmount = function() {
  /*const amount = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);*/

  // flatMap combines map and flat but only one level deep
  const amount = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(amount);
}

calcAllAccountsMovementsAmount();

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (el => +el.textContent.replace('€', '')));

  console.log(movementsUI);
})
