const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const findAvgInterval = (events) => {
  let sum = events[0];
  for (let i = 0; i < events.length - 1; i++) {
    sum += events[i+1] - events[i];
  }
  return sum / events.length;
}

console.log(`An event happened, on average, every 
${findAvgInterval([...gameEvents.keys()])} minutes`);

for ([key, value] of gameEvents) {
  console.log(`${key < 45 ? '[FIRST HALF]' : '[SECOND HALF]'}: ${value}`);
}
