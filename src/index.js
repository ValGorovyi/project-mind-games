const prompt = require('prompt-sync')({ sigint: true });
const { calculator } = require('./games/calculator');
const { definitionOfAnEvenNumber } = require('./games/definitionOfAnEvenNumber');
const { progression } = require('./games/progression');
const { determiningTheLagerstDivisor } = require('./games/determiningTheLargestDivisor');
const { primeNumberDefinition } = require('./games/primeNumberDefinition');

function sayName() {
  console.log('Say your name');
  const name = prompt('What is your name ? ');
  // let name = await rl.prompt();
  if (name !== '') {
    console.log(`Hello, ${name}!`);
  } else {
    sayName();
  }
}

function choise() {
  const options = {
    calculator,
    1: calculator,
    progression,
    2: progression,
    'definition of an even number': definitionOfAnEvenNumber,
    3: definitionOfAnEvenNumber,
    'determimining the lagerst divisor': determiningTheLagerstDivisor,
    4: determiningTheLagerstDivisor,
    'prime number definition': primeNumberDefinition,
    5: primeNumberDefinition,
  };
  console.log('Enter the name of the game or its number in brackets ()');
  const game = prompt('>>');
  console.log(game);
  options[game]();
}

function end() {
  console.log('end');
}
console.log('Welcome to mind games!');

sayName();

console.log('You are offered a choice of several games. Choose one of them');
console.log(`Games:
  >.calculator(1),
  >.progression(2),
  >.definition of an even number(3),
  >.determining the largest divisor(4),
  >.prime number definition(5).`);

choise();
end();
