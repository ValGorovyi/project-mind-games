/* eslint-disable template-curly-spacing */
const prompt = require('prompt-sync')({ sigint: true });
const modules = require('./modules');

function iteration() {
  let result = '';
  const start = modules.randomInteger(1, 25);
  const difference = modules.randomInteger(1, 6);
  const ignorIter = modules.randomInteger(0, 7);
  for (let i = start; i <= 7 * difference + start; i += difference) {
    result += ' ';
    if (i === ignorIter * difference + start) {
      result += '..';
    } else {
      result += i;
    }
  }
  console.log(result);
  return ignorIter * difference + start;
}

function progression() {
  let nextOne = true;
  let i = 0;
  while (i < 3) {
    if (!nextOne) {
      break;
    }
    const resultGame = iteration();
    const gamerAnswer = prompt('Your answer: ');
    nextOne = modules.audit(resultGame, gamerAnswer);
    i += 1;
    if (i === 3 && nextOne) {
      console.log('You WIN!');
    }
  }
}

module.exports = { progression };
