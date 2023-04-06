/* 1. We manually set prototype to any object that we want
* In real word we usually not use this approach
* */

const PersonProto = {

  // just function, NOT constructor because we not use `new` keyword
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2001;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);
steven.init('Stepan', 1998);
steven.calcAge();

// Inheritance implementation

// make that PersonProto become the prototype of StudentProto
const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

// StudentProto is now the prototype of student object
const student = Object.create(StudentProto);
student.init('Jay', 2004, 'Philosophy');

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
console.log(student);
student.introduce();
