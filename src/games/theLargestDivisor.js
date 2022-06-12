const utility = require('./utility');
// console.log(utility);

function determiningTheLagerstDivisor() {
  let n1 = utility.randomInteger();
  let n2 = utility.randomInteger();
  console.log(`Common divisor of ${n1} and ${n2} is...`);
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1;
}

module.exports = { determiningTheLagerstDivisor };
