'use strict';

// challenge 1

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaWithoutCats = dogsJulia.slice(1, -2);
  const dogsJuliaAndKate = dogsJuliaWithoutCats.concat(dogsKate);
  console.log(dogsJuliaAndKate);
  dogsJuliaAndKate.forEach((age, i) => {
    age >= 3
      ? console.log(`Dog number ${i} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${i} is still a puppy🐶`)
  });
};

checkDogs(dogsJulia1, dogsKate1);

// challenge 2

const dogsJulia3 =  [5, 2, 4, 1, 15, 8, 3];
const dogsKate3 =  [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(dogAges) {
  const humanAges = dogAges.map(age => {
    return age <= 2 ? age * 2 : 16 + age * 4;
  });
  console.log(humanAges);

  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);

  const avgAdultAge = adults.reduce((acc, age) => acc + age);
  console.log(Math.trunc(avgAdultAge));
}

calcAverageHumanAge(dogsJulia3);
calcAverageHumanAge(dogsKate3);

// challenge 3

const calcAverageHumanAgeChaining = function(dogAges) {
  const avgAdultHumanAge = dogAges
    .map(age => age <= 2 ? age * 2 : 16 + age * 4)
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, adultAge) => acc + adultAge);
  console.log(avgAdultHumanAge);
}

calcAverageHumanAgeChaining(dogsJulia3);
calcAverageHumanAgeChaining(dogsKate3);

// challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1

dogs.forEach(dog => dog['recommendedFood'] = (dog.weight ** 0.75 * 28).toFixed(2));
console.log(dogs);

//2

const sarahsDog = dogs.find(dog => dog.owners.find(owner => owner === 'Sarah'))

const isEatingMuchOrSmall = function(dog) {
  if (dog.curFood > dog.recommendedFood * 1.1)
    return true;
  else if (dog.curFood < dog.recommendedFood * 0.9)
    return false;
}

isEatingMuchOrSmall(sarahsDog)

// 3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners)
;
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners)
;

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.

const toOwnersString = function(owners, isMuch) {
  let ownersString = '';
  for (let i = 0; i < owners.length - 1; i++) {
    ownersString += owners + ' and ';
  }
  ownersString += owners.slice(-1) + '\'s' + isMuch ? ' dogs eat too much!' : ' dogs eat\n' +
    'too little!';
  return ownersString;
}

console.log(toOwnersString(ownersEatTooMuch, true));
console.log(toOwnersString(ownersEatTooLittle, false));

// 5.

const isExactly = dogs
  .some(dog => dog.curFood === dog.recommendedFood);

console.log(isExactly);

// 6.
const isOkay = dogs
  .some(dog => dog.curFood > dog.recommendedFood * 1.1 || dog.curFood < dog.recommendedFood * 0.9);

console.log(isOkay);

// 7.

const dogsOkay = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1 || dog.curFood < dog.recommendedFood * 0.9);

console.log(dogsOkay);

// 8.

const sortedDogs = dogs.slice().sort((dog1, dog2) => {
  return dog1.recommendedFood - dog2.recommendedFood;
})

console.log(sortedDogs);
