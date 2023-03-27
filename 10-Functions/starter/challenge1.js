const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = +prompt(`What is your favourite programming language?
${this.options.toString().split(',').join('\n')}
(Write option number)`);

    if(answer && answer >= 0 && answer <= this.answers.length) {
      this.answers[answer]++;
    }

    displayResults(type = 'array');
    displayResults();
    displayResults([5, 2, 3],  [1, 5, 3, 9, 6, 1]);
  }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

const displayResults = function(...type) {
  typeof type === 'object' ? console.log(type) : console.log('Poll results are:', type);
}
