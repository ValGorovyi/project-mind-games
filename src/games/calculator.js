/* eslint-disable no-eval */
const prompt = require('prompt-sync')({ sigint: true });
const modules = require('./modules');

function mathematicalOperation() {
  const symbols = {
    1: '+',
    2: '-',
    3: '\\',
    4: '*',
  };
  const currentSymbol = symbols[modules.randomInteger(1, 4)];
  const n1 = modules.randomInteger(1, 5);
  const n2 = modules.randomInteger(1, 7);
  if (currentSymbol === '\\') {
    const product = n1 * n2;
    console.log(`Question: ${product} ${currentSymbol} ${n2}`);
    return n1;
  }
  console.log(`Question: ${n1} ${currentSymbol} ${n2}`);
  return eval(`${n1} ${currentSymbol} ${n2}`);
}
// function addition() {
//   const n1 = randomInteger(0, 20);
//   const n2 = randomInteger(0, 20);
//   console.log(`Question: ${n1} + ${n2}`);
//   return n1 + n2;
// }
// function subtraction() {
//   const n1 = randomInteger(0, 25);
//   const n2 = randomInteger(0, 25);
//   console.log(`Question: ${n1} - ${n2}`);
//   return n1 - n2;
// }
// function multiplication() {
//   const n1 = randomInteger(1, 5);
//   const n2 = randomInteger(1, 7);
//   console.log(`Question: ${n1} * ${n2}`);
//   return n1 * n2;
// }
// function division() {
//   const n1 = randomInteger(1, 5);
//   const n2 = randomInteger(1, 7);
//   const product = n1 * n2;
//   console.log(`Question: ${product} \\ ${n2}`);
//   return n1;
// }

// const mathQuestion = {
//   1: addition,
//   2: subtraction,
//   3: multiplication,
//   4: division,
// };
function calculator() {
  let nextOne = true;
  let i = 0;
  while (i < 3) {
    if (!nextOne) {
      break;
    }
    const resultGame = mathematicalOperation();
    const gamerAnswer = prompt('Your answer: ');
    nextOne = modules.audit(resultGame, gamerAnswer);
    i += 1;
    if (i === 3 && nextOne) {
      console.log('You WIN!');
    }
  }
}

// \\//progression

module.exports = { calculator };
