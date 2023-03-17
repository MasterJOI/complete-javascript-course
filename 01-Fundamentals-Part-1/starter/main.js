// challenge 1

const mark = { weight: 78, tall: 1.69 };
const john = { weight: 92, tall: 1.95 };

bmi_mark = mark.weight / mark.tall ** 2;
bmi_john = john.weight / john.tall ** 2;

markHigherBMI = bmi_mark > bmi_john;

const firstName = 'Kyryll';
const year = 2022;
const birth = 2001;
const kyryllNew = `I'm ${firstName}, a ${year - birth} years old!`;

console.log(kyryllNew);

console.log('String \n\
multiple \n\
lines');

console.log(`String
multi
line`);


// challenge 2

if(markHigherBMI) {
    console.log(`Mark's bmi is higher than John's.
    Mark: ${bmi_mark.toFixed(2)}
    John: ${bmi_john.toFixed(2)}`)
} else {
    console.log(`John's bmi is higher than Mark's.
    Mark: ${bmi_mark.toFixed(2)}
    John: ${bmi_john.toFixed(2)}`)
}

// lecture

const inputYear = '1991'
console.log(Number(inputYear))

//const val = prompt('Whats is this?');
//console.log(+val);

// challenge 3

const dScore = [
    [96, 108, 89],
    [97, 112, 101],
    [97, 112, 101]
];
const kScore = [
    [88, 91, 110],
    [109, 95, 123],
    [109, 95, 106]
];

function getAvg(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum / arr.length;
}

const dRes = getAvg(dScore[2]);
const kRes = getAvg(kScore[2]);

if(dRes > kRes && dRes >= 100) {
    console.log(`Dolphins win!`);
} else if (kRes > dRes && kRes >= 100) {
    console.log(`Koalas win!`);
} else if (dRes === kRes && dRes >= 100 && kRes >= 100) {
    console.log(`Draw!`);
}


const day = 'monday';

switch (day) {
    case 'monday':
        console.log(day);
        break;
    default: console.log('another day');
}

// challenge 4

const val = 275;

const tip = (val > 50 && val < 300) ? val * 0.15 : val * 0.2;

console.log(`Bill: ${val}
Tip: ${tip}
Final: ${val + tip}`)
