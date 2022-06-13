/* eslint-disable max-len */
const prompt = require('prompt-sync')({ sigint: true });
const utility = require('./games/utility');

const { calculator } = require('./games/calculator');
const { definitionOfAnEvenNumber } = require('./games/evenNumber');
const { progression } = require('./games/progression');
const { determiningTheLagerstDivisor } = require('./games/theLargestDivisor');
const { primeNumberDefinition } = require('./games/primeNumber');

const options = [calculator, definitionOfAnEvenNumber, progression, determiningTheLagerstDivisor, primeNumberDefinition];

function introduceYourself() {
  console.log('Say your name');
  const gamerNickName = prompt('What is your name ? ');
  if (gamerNickName) {
    console.log(`Hello, ${gamerNickName}!`);
    console.log('Welcome to mind games!');
  } else {
    introduceYourself();
  }
  return gamerNickName;
}
function sayGoodbye(gamerNickName) {
  console.log(`${gamerNickName}, good bye.`);
}

function choose() {
  console.log('You are offered a choice of several games. Choose one of them. Games:');
  for (let i = 0; i < options.length; i += 1) {
    console.log(`(${i}) - ${options[i].name} `);
  }
  console.log('Enter the number in brackets ()');
  const game = prompt('>>');
  console.log(game);
  if (options[game]) {
    utility.startTheGame(options[game], process.argv[2]);
  } else {
    console.log('I don\'t understand what you mean');
  }
  const repeat = prompt('Do you want to play again? Enter "yes" or "no" / "+" or "-"').toLowerCase();
  if (repeat === 'yes' || repeat === '+' || repeat === 'y') {
    choose();
  }
}

const gamerNickName = introduceYourself();
choose();
sayGoodbye(gamerNickName);
