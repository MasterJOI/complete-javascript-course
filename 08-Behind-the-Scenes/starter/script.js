'use strict';

/*
const calc = function () {
  console.log(this)
}

const calcc = () => {
  console.log(this)
}

const jonas = {
  year: 1,
  calcc: function() {
    console.log(this.year)
    return this.year
  }
}

const cock = {
  year: 1
}

// method borrow (скопіювали метод в інший об'єкт щоб не писати його знову)
cock.calcc = jonas.calcc(1);

calc();
calcc();
jonas.calcc();

const а = jonas.calcc();
a();*/


/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function() {
    console.log(2030 - this.year);

    //bad solution

    /!*const self = this;

    const isMillenial = function() {
      //console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    }*!/

    //right solution
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();
  },
  greet: () => {
    // this в arrow function вказує на батьківський scope (window) де нема firstName
    console.log(`Cockls: ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

const addExpr = function(a,b) {
  console.log(arguments);
  return a + b;
}

const addExprArr = (a,b) => {
  console.log(arguments);
  return a + b;
}

addExpr(1,1, 'cockls');
//undefined arguments
addExprArr(1,1, 'cockls');*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Coclks',
  age: 21
}

const trueCaclks = me;
trueCaclks.age = 122;

console.log(me);
console.log(trueCaclks);*/

let lastName = 'Coclks';
let oldLastName = lastName;
lastName = 'Davis';

console.log('lastName:', lastName);
console.log('oldLastName:', oldLastName);

const jessical = {
  firstName: 'Jessical',
  lastName: 'Coclks',
  childrens: ['Cockls1', 'Coclks2']
}

const jessicalUncockls = {
  ...jessical,
  childrens: jessical.childrens
};
jessicalUncockls.childrens.push('Uncockls');

console.log('jessical:', jessical);
console.log('jessicalUncockls:', jessicalUncockls);