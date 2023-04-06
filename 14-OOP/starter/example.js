'use strict';

// Fake private fields

/*class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this.locale = navigator.language;
    // write protected properties with `_`
    this._movements = [];
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

}

const account1 = new Account('Jonas', 'EUR', 1111);
console.log(account1);
account1.deposit(210);
account1.withdraw(210);
account1.requestLoan(1000);

// we still have access to the variable but we now that we shouldn't use it
console.log(account1._movements);

// now we can get movements but cant set
console.log(account1.getMovements());*/


// Truly private fields

/*
* Public fields
* Public methods
* Private fields
* Private methods
* + static versions of public and private fields and methods
* */
class Account {

  //Public fields
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;

  //Static field
  static API_KEY = '122f12effdfge';

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // to chain methods, return same object
    // useful for property setting methods
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }

  //Static method
  static helper() {
    console.log('Helper is help!');
  }

}

const account1 = new Account('Jonas', 'EUR', 1111);
console.log(account1);
account1.deposit(210);
account1.withdraw(210);
account1.requestLoan(1000);

// we cant access to private property or method outside the class
//console.log(account1.#movements);
//console.log(account1.#approveLoan(1000));

console.log(account1.getMovements());
console.log(Account.API_KEY);
Account.helper();

//chaining methods of class
account1
  .deposit(300)
  .deposit(100)
  .withdraw(23)
  .requestLoan(1111)
  .withdraw(1000);
console.log(account1.getMovements());
