'use strict';

// challenge 1

/*const dScore = [
    [44, 23, 71],
    [85, 54, 41]
];
const kScore = [
    [65, 54, 49],
    [23, 34, 27]
];

const calcAverage = scoreArr => {
    let sum = 0;
    scoreArr.forEach(num => sum += num);
    return sum / scoreArr.length;
}

const checkWinner = (dAvg, kAvg) => {
    return kAvg > dAvg ? `"Koalas win (${kAvg} vs. ${dAvg})` : `"Dolphins win (${dAvg} vs. ${kAvg})`;
}

console.log(checkWinner(calcAverage(dScore[1]), calcAverage(kScore[1])))*/


// challenge 2

const bills = [125, 555, 44];
const tips = [];
const totals = [];
const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

const calcTotal = function (bill, tip) {
    return bill + tip;
}

bills.forEach(bill => tips.push(calcTip(bill)));

console.log(tips);

for (let i = 0; i < tips.length; i++) {
    totals.push(calcTotal(bills[i], tips[i]));
}

console.log(totals);

// challenge 3

/*class Person {
    name;
    mass;
    height;

    calcBMI = () => {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

    constructor(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
        this.calcBMI();
    }
}

const person1 = new Person('John', 78, 1.69);
const person2 = new Person('Mark', 92, 1.95);

person1.bmi > person2.bmi
    ? console.log(`${person1.name}'s BMI (${person1.bmi.toFixed(2)})
        is higher than ${person2.name}'s (${person2.bmi.toFixed(2)})`)
    : console.log(`${person2.name}'s BMI (${person2.bmi.toFixed(2)})
        is higher than ${person1.name}'s (${person1.bmi.toFixed(2)})`);*/


// challenge 4

//eeeaaazzzyyyy



































