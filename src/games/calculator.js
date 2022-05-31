const utility = require('./utility');

function calculator() {
  const symbols = {
    1: '+',
    2: '-',
    3: '/',
    4: '*',
  };
  const currentSymbol = symbols[utility.randomInteger(1, 4)];
  const n1 = utility.randomInteger(1, 10);
  const n2 = utility.randomInteger(1, 5);
  console.log(`Question: ${n1} ${currentSymbol} ${n2}`);
  // eslint-disable-next-line no-eval
  return Number(eval(`${n1} ${currentSymbol} ${n2}`)).toFixed(1);
}

// function calculator() {
//   let nextOne = true;
//   let i = 0;
//   while (i < 3) {
//     if (!nextOne) {
//       break;
//     }
//     const resultGame = mathematicalOperation();
//     // console.log(resultGame);
//     const gamerAnswer = prompt('Your answer: ');
//     console.log(Number(gamerAnswer).toFixed(1));
//     nextOne = utility.verificationOfResults(resultGame, Number(gamerAnswer).toFixed(1));
//     i += 1;
//     if (i === 3 && nextOne) {
//       console.log('You WIN!');
//     }
//   }
// }

module.exports = { calculator };
