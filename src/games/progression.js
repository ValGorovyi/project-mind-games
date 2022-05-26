const prompt = require('prompt-sync')({ sigint: true });
const utility = require('./utility');

function iteration() {
  let result = '';
  const start = utility.randomInteger(1, 25);
  const difference = utility.randomInteger(1, 6);
  const ignorIter = utility.randomInteger(0, 7);
  for (let i = start; i <= 7 * difference + start; i += difference) {
    result += ' ';
    if (i === ignorIter * difference + start) {
      result += '..';
    } else {
      result += i;
    }
  }
  console.log(`Question: ${result}`);
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
    nextOne = utility.audit(Number(resultGame), Number(gamerAnswer));
    i += 1;
    if (i === 3 && nextOne) {
      console.log('You WIN!');
    }
  }
}

module.exports = { progression };
