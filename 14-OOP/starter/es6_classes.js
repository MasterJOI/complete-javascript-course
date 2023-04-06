'use strict';

// Classes is still implement prototypes but in more simple syntax

//class expression
//class is still a function

// Classes is NOT hoisted (we cant use them before declaration it the code)
// Classes is firstClass citizens (values like functions)
// Classes are always executed in the strict mode
// Not use arrow function inside class because it will not be in prototype
/*const PersonExpr = class {

}*/

//class declaration
class Person {
  //constructor will automatically be called when call class with new
  constructor(
    firstName,
    birthYear
  ) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // all methods outside the constructor will be placed in prototype object
  // use ony this way to write function in classes
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // by convention, we need to write _[variable name] in getter/setter if same property already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName() {
    return this._fullName;
  }

  // create static method in class
  static hey() {
    console.log('Hey there!');
  }
}

const jessica = new Person('Jessica', 2001);
console.log(jessica);
console.log(jessica.calcAge());
console.log(jessica.age);
console.log(jessica.__proto__ === Person.prototype);


const account = {
  owner: 'jonas',
  movements: [1,2,3],

  get latest() {
    return this.movements.slice(-1).pop()
  },

  set latest(movement) {
    this.movements.push(movement)
  }
};

// use the latest like property (when need value but also do some calculations)
console.log(account.latest);
console.log(account.latest = 10);
console.log(jessica.fullName = 'Jojo d');
console.log(jessica.fullName);

Person.hey();


//ES6 classes inheritance

class Student extends Person {
  constructor(firstName, birthYear, course) {
    // always write first
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
}

const student = new Student('Marta Jons', 2002, 'philosophy');
console.log(student.calcAge());
student.introduce();
