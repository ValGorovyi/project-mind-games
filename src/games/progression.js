const utility = require('./utility');

function progression() {
  let result = '';
  const firstNumber = utility.randomInteger();
  const step = utility.randomInteger(1, 10);
  const missingNumberPosition = utility.randomInteger(0, 7);
  for (let i = firstNumber; i <= 7 * step + firstNumber; i += step) {
    result += ' ';
    if (i === missingNumberPosition * step + firstNumber) {
      result += '..';
    } else {
      result += i;
    }
  }
  console.log(`Question: ${result}`);
  return missingNumberPosition * step + firstNumber;
}

module.exports = { progression };
