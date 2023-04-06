'use strict';

// JS don`t have opportunity to create classes manually
// 3 ways of implementing OOP in JS

// 1. Constructor functions (class simulation)
// Create object from a functions (build Arrays, Maps, Sets, ...)
//------------------------------------------------------------------------------

//arrow functions cant be constructor functions because don`t have 'this' keyword
const Person = function(firsName, birthYear) {
  console.log(this); // {}

  //instance properties
  this.firstName = firsName;
  this.birthYear = birthYear;

  // Never do this because with each object we copy this method (cause very bad performance)
  /*this.calcAge = function() {
    console.log(new Date().getFullYear() - this.birthYear);
  }*/
}

const kyryll = new Person('Kyryll', 2001);
console.log(kyryll); // {firstName: 'Kyryll', birthYear: 2001}

/* When call constructor with 'new'
* 1. New empty object {} is created instantly
*
* 2. this keyword in constructor function is set to the new object (now this = {}
* and we can insert new properties to this keyword because this point to object)
*
* 3. new object is linked to prototype (create prototype property (__proto__)
* and sets its value to the prototype property of constructor function)
* so JS will now that kyryll object is connected to Person.prototype
*
* 4. function returns new object
* */

// Prototypes
/*
* 1. Each function has property `prototype`
* 2. All created objects by this constructor function will get access to all
* methods and properties on `proptotype` property
* */
console.log(Person.prototype);

// add method to prototype to reuse them in all objects
Person.prototype.calcAge = function() {
  console.log(new Date().getFullYear() - this.birthYear);
}

//set properties to prototype (all objects will have access to that property)
Person.prototype.species = 'Homo Sapiens';
console.log(kyryll.species);

// check is object have this property internally or its from prototype
//hasOwnProperty method also locates in Object.prototype
console.log(kyryll.hasOwnProperty('firstName'));
console.log(kyryll.hasOwnProperty('species'));

// now we can use method which don`t exist in Person object
//if method or property cant be found inside object, JS will look in prototype object
kyryll.calcAge();
console.log(kyryll.__proto__); // same as Person.prototype

//!!!! Person.prototype is prototype of all objects which created by constructor
console.log(Person.prototype.isPrototypeOf(kyryll)); //true
console.log(Person.prototype.isPrototypeOf(Person)); // false

//Person.prototype.constructor is back link to Person
console.log(Person.prototype.constructor === Person)

//Prototype chain
// is a series of links between objects through prototypes (like scope chain)

// looking for property or method in internal object
// than looking on Person.prototype
// if cant find here, then Person.prototype is object of type Object
// (Object constructor calls when we write {} literal ({} = new Object)),
// so JS will look in Object.prototype
// Object.prototype __proto__ property will point to `null` because is on top

//Object.prototype
console.log(kyryll.__proto__.__proto__);
// null
console.log(kyryll.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 45, 3, 45];
//Array.prototype which contains all the methods (map, find...) so array only
// use this methods from prototype
console.log(arr.__proto__);

//add new method to the Array.prototype, but it is a bad practice
// 1. because JS acn add a build in method with the same name in future
// 2. is several developers create unique method it will be many bugs
Array.prototype.unique = function() {
  return [...new Set(this)];
}

console.log(arr.unique());

//------------------------------------------------------------------------------
// 2. ES6 classes
// Синтаксичний цукор над тими ж самими конструкторами
//------------------------------------------------------------------------------

// in es6_classes.js

//------------------------------------------------------------------------------
// 3. Object.create()
// most simple way to link object to prototype

// in object_create.js

//------------------------------------------------------------------------------

// Add static methods - methods that attached to constructor, so objects not
// inherits this method
Person.hey = function() {
  console.log('Hello there!');
}
Person.hey();
// kyryll.hey(); - not work



