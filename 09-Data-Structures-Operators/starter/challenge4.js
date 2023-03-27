document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const inputNames = document.querySelector('textarea').value.split('\n');

  const maxLength = findLongestWordLength(inputNames);
  for (const [i, name] of inputNames.entries()) {
    console.log(camelCaseConverter(name).padEnd(maxLength, ' '), '✅'.repeat(i+1));
  }
});


const findLongestWordLength = (inputNames) => {
  let maxLength = 0;
  for (let name of inputNames) {
    if (name.length > maxLength) {
      maxLength = name.length;
    }
  }
  return maxLength;
};

const camelCaseConverter = (name) => {
  const nameWords = name.toLowerCase().trim().split('_');
  const camelWords = [nameWords[0]];
  for (let i = 1; i < nameWords.length; i++) {
    camelWords.push(nameWords[i].replace(nameWords[i][0], nameWords[i][0].toUpperCase()));
  }
  return camelWords.join('');
}
