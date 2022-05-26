const prompt = require('prompt-sync')({ sigint: true });
const { calculator } = require('./games/calculator');
const defOfAnEvenNumber = require('./games/definitionOfAnEvenNumber');
const progres = require('./games/progression');

function sayName() {
  console.log('Say your name');

  name = prompt('What is your name ? ');
  // let name = await rl.prompt();
  if (name !== '') {
    console.log(`Hello, ${name}!`);
  } else {
    sayName();
  }
}

function choise() {
  console.log('Enter the name of the game or its number in brackets ()');
  const game = prompt('>>');
  console.log(game);
  options[game]();
}

function end() {
  if (name !== '') {
    console.log('end');
  }
}

const options = {
  calculator,
  1: calculator,
  progression: progres.progression,
  2: progres.progression,
  3: defOfAnEvenNumber.definitionOfAnEvenNumber,
};
let name;
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
