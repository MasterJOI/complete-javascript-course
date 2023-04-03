'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-04-02T21:31:17.178Z',
    '2023-04-01T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z'
  ],
  currency: 'EUR',
  locale: 'pt-PT' // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z'
  ],
  currency: 'USD',
  locale: 'en-US'
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date, locale) {

  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = Math.floor(calcDaysPassed(new Date(), date));
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    /*const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;*/
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurrency = function(val, currency, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(val);
};

const startLogoutTimer = () => {
  //set timer for 5 minutes & call the timer every second after logout
  let remain = 300;

  const tick = function () {
    let min = Math.trunc(remain / 60).toString().padStart(2, 0);
    let sec = Math.trunc(remain % 60).toString().padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (remain === 0) {
      clearInterval(logoutTimer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = '0';
    }
    remain--;
  }

  tick();
  const logoutTimer = setInterval(tick, 1000);
  return logoutTimer;
};

const displayMovements = function(account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date, account.locale);

    const html = `
      <div class='movements__row'>
        <div class='movements__type movements__type--${type}'>${
      i + 1
    } ${type}</div>
        <div class='movements__date'>${displayDate}</div>
        <div class='movements__value'>${formatCurrency(mov, account.currency, account.locale)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

    setTimeout(() => {
      [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
        if (i % 2 === 0) {
          row.style.backgroundColor = '#fffbbb';
        }
      });
    }, 100);
  });
};

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCurrency(acc.balance, acc.currency, acc.locale)}`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCurrency(incomes, acc.currency, acc.locale)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${(formatCurrency(Math.abs(out), acc.currency, acc.locale))}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCurrency(interest, acc.currency, acc.locale)}€`;
};

const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, logoutTimer;

btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if (logoutTimer) clearInterval(logoutTimer)
    logoutTimer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(logoutTimer);
      startLogoutTimer();
    }, 2000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);

console.log(0.2 + 0.2);

//Parsing
console.log(Number.parseInt('30px', 8)); // radix - система числення
console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));
console.log(parseFloat('2.5rem'));
console.log(Number.isNaN(+'20s'));

// best way to check is value is a number (for float)
console.log(Number.isFinite(20));
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite('20'));

console.log(Number.isInteger(2));

//MAth

//квадратний корінь
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// кубічний корінь
console.log(8 ** (1 / 3));

console.log(Math.max(2, 3, '534', 1));
console.log(Math.min(2, 3, '534d', 1));

//radius
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(2, 7));

//remove fraction
console.log(Math.trunc(23.3));

//round to nearest
console.log(Math.round(23.3));
console.log(Math.round(23.99));

//round to higher
console.log(Math.ceil(23.9));
console.log(Math.ceil(23.1));

//round to lower
console.log(Math.floor(23.9));
console.log(Math.floor(23.1));

//trunc and floor same for positive numbers but different for negative (floor will change to lower)
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//round decimals (return string)
console.log((2.7).toFixed(2));
console.log(+(2.7).toFixed(2));

//reminder operator

console.log(5 % 2);

const isEvent = n => n % 2 === 0;
console.log(isEvent(4));

// numeric separator
const diameter = 2_870_000_000;
console.log(diameter);

// cant convert from string with numeric separator
console.log(+'230_000');

//BigInt

console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);

// n transforms to BigInt
console.log(21345675644123456345564456456n + 21345675644123456345564456456n);
console.log(BigInt(21345675644123456345564456456)); // not use
console.log(typeof 20n);
console.log(20n == 20); // does type conversion
const big = 234156765323453465678567n;
console.log(big + ' is very big!');
// console.log(Math.sqrt(big)); not work with Math

//it still int so return closest bigint
console.log(10n / 3n);
console.log(10 / 3);

// Dates

const now1 = new Date();
console.log(now1, 'now1');

console.log(new Date('Sat Apr 01 2023 16:20:36'));

console.log(new Date(account1.movementsDates[0]));

// months starts with 0 so 10 is november
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());
console.log(future.getTime());

console.log(Number(future));

const calcDaysPast = (date1, date2) => Math.abs(date2 - date1);

const mils = calcDaysPast(new Date(2037, 3, 14), new Date(2037, 3, 17));
console.log(mils / (1000 * 60 * 60 * 24), ' days');


//Intl numbers

const options = {
  //style: 'unit',
  style: 'currency',
  //unit: 'mile-per-hour'
  //unit: 'celsius'
  currency: 'EUR',
  useGrouping: 'false'
};
const num = 260342315.79;
console.log('UA: ', new Intl.NumberFormat('uk-UA', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('locale: ', new Intl.NumberFormat(navigator.language, options).format(num));

//timers

//to specify arguments, write them after timeout
const ings = ['olives', 'spinach'];

const pizzaTimer = setTimeout((ing1, ing2) => {
  console.log(`Ingredients: ${ing1}, ${ing2}`);
}, 3000, ...ings);

if (ings.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
/*setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000)*/
