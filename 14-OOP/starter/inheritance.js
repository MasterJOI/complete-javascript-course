'use strict';

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
  console.log(new Date().getFullYear() - this.birthYear);
}


const Student = function(firstName, birthYear, course) {
  // specify this keyword for Person constructor
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
// manually set that __proto__ of student point to Person.prototype
// also we need to set inheritance before add more methods in prototype because
//Object.create return empty object {} so it will override all methods and properties
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} andI study at ${this.course}!`);
}

const mike = new Student('Mike', 2001, 'computer sciences');

console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__.__proto__);

// all true
console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.log(mike);
