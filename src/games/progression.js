const utility = require('./utility');

function progression() {
  let result = '';
  const firstNumber = utility.randomInteger();
  const step = utility.randomInteger(1, 10);
  const missingNumber = utility.randomInteger(0, 7);
  for (let i = firstNumber; i <= 7 * step + firstNumber; i += step) {
    result += ' ';
    if (i === missingNumber * step + firstNumber) {
      result += '..';
    } else {
      result += i;
    }
  }
  console.log(`Question: ${result}`);
  return missingNumber * step + firstNumber;
}

module.exports = { progression };
