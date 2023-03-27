const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};

// task 1
let scoreStr = '';
for (const [i, player] of game.scored.entries()) {
  scoreStr += `Goal ${i}: ${player} \n`;
}

console.log(scoreStr);

// task 2
const calcAvg = (obj) => {
  let sum = 0;
  for (const odd of Object.values(obj)) {
    sum += odd;
  }
  return sum / Object.keys(obj).length;
};


console.log('Avg: ' + calcAvg(game.odds));

// task 3
let oddStr = '';
for (const [team, odd] of Object.entries(game.odds)) {
  oddStr += team !== 'x'
    ? `Odd of victory ${game[team]}: ${odd} \n`
    : `Odd of draw:  ${odd} \n`;
}

console.log(oddStr);

// task 4

const scorers = {};
for (const player of game.scored) {
  Object.keys(scorers).includes(player)
    ? scorers[player]++
    : scorers[player] = 1;
}

console.log(scorers);












