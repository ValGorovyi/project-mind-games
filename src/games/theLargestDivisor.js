const utility = require('./utility');

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
// function determiningTheLagerstDivisor() {
//   let nextOne = true;
//   let i = 0;
//   while (i < 3) {
//     if (!nextOne) {
//       break;
//     }
//     const resultGame = processOfFinding();
//     // console.log(resultGame);
//     const gamerAnswer = prompt('Your answer: ');
//     nextOne = utility.verificationOfResults(resultGame, Number(gamerAnswer));
//     i += 1;
//     if (i === 3 && nextOne) {
//       console.log('You WIN!');
//     }
//   }
// }

module.exports = { determiningTheLagerstDivisor };
