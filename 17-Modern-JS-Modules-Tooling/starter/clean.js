const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freentryancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' }
];

/*Object.freeze make object immutable
* we cant remove or add new properties, but we can change its values*/
const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100
  }
);

const getLimit = (user, limits) => limits?.[user] ?? 0;

// Pure function
const addExpense = function(
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  const limit = getLimit(cleanUser, limits);

  return value <= limit
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

/*const checkExpenses = function(state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(entry.user, limits)
      ? {
        ...entry,
        flag: 'limit'
      }
      : entry;
  });
};*/

const checkExpenses = (state, limits) => {
  return state.map(entry =>
    entry.value < -getLimit(entry.user, limits)
      ? { ...entry, flag: 'limit' }
      : entry
  );
}

const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);

// not pure  because create console log but it necessary
const logBigExpenses = function(state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 1000);
