const prompt = require('prompt-sync')({ sigint: true });
const { calculator } = require('./games/calculator');
const { definitionOfAnEvenNumber } = require('./games/definitionOfAnEvenNumber');
const { progression } = require('./games/progression');
const { determiningTheLagerstDivisor } = require('./games/determiningTheLargestDivisor');
const { primeNumberDefinition } = require('./games/primeNumberDefinition');

let name = '';

function rite() {
  if (name === '') {
    console.log('Say your name');
    name = prompt('What is your name ? ');
    if (name !== '') {
      console.log(`Hello, ${name}!`);
      console.log('Welcome to mind games!');
    } else {
      rite();
    }
  } else {
    console.log(`${name}, you're welcome. Good bye.`);
  }
}

function choise() {
  const options = [
    calculator,
    progression,
    definitionOfAnEvenNumber,
    determiningTheLagerstDivisor,
    primeNumberDefinition,
  ];
  console.log(options.length);
  console.log('You are offered a choice of several games. Choose one of them. Games:');
  for (let i = 0; i < options.length; i += 1) {
    console.log(`(${i}) - ${options[i].name} `);
  }
  console.log('Enter the number in brackets ()');
  const game = prompt('>>');
  console.log(game);
  if (options[game]) {
    options[game]();
  } else {
    console.log('I don\'t understand what you mean');
  }
  const repeat = prompt('Do you want to play again? Enter "yes" or "no" / "+" or "-"').toLowerCase();
  if (repeat === 'yes' || repeat === '+' || repeat === 'y') {
    choise();
  }
}

rite();
choise();
rite();
