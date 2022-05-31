const utility = require('./utility');

function primeNumberDefinition() {
  const n1 = utility.randomInteger(1, 100);
  console.log(`Is ${n1} a prime number? (true or false / + or -)`);
  for (let i = 1; i < n1; i += 1) {
    if (n1 % i === 0 && i !== 1) {
      return false;
    }
  }
  return true;
}

// function primeNumberDefinition() {
//   let nextOne = true;
//   let i = 0;
//   const toBool = {
//     false: false,
//     '-': false,
//     true: true,
//     '+': true,
//   };
//   while (i < 3) {
//     if (!nextOne) {
//       break;
//     }
//     const resultGame = numberCheck();
//     // console.log(resultGame);
//     const gamerAnswer = prompt('Your answer: ');
//     nextOne = utility.verificationOfResults(resultGame, toBool[gamerAnswer]);
//     i += 1;
//     if (i === 3 && nextOne) {
//       console.log('You WIN!');
//     }
//   }
// }

module.exports = { primeNumberDefinition };
