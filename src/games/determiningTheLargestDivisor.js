const prompt = require('prompt-sync')({ sigint: true });
const utility = require('./utility');

function processOfFinding() {
  const n1 = utility.randomInteger(1, 100);
  const n2 = utility.randomInteger(1, 100);
  let result;
  console.log(`Common divisor of ${n1} and ${n2} is...`);
  for (let i = 1; i <= n1 && i <= n2; i += 1) {
    if (n1 % i === 0 && n2 % i === 0) {
      result = i;
    }
  }
  return result;
}
function determiningTheLagerstDivisor() {
  let nextOne = true;
  let i = 0;
  while (i < 3) {
    if (!nextOne) {
      break;
    }
    const resultGame = processOfFinding();
    // console.log(resultGame);
    const gamerAnswer = prompt('Your answer: ');
    nextOne = utility.audit(resultGame, Number(gamerAnswer));
    i += 1;
    if (i === 3 && nextOne) {
      console.log('You WIN!');
    }
  }
}

module.exports = { determiningTheLagerstDivisor };
