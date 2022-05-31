const utility = require('./utility');

function definitionOfAnEvenNumber() {
  const number = utility.randomInteger();
  console.log(`${number} is event? (true or false / + or -)`);
  return !(number % 2);
}
// function definitionOfAnEvenNumber() {
//   const toBool = {
//     false: false,
//     '-': false,
//     true: true,
//     '+': true,
//   };
//   let nextOne = true;
//   let i = 0;
//   while (i < 3) {
//     if (!nextOne) {
//       break;
//     }
//     const resultGame = eventNumber();
//     // console.log(resultGame);
//     const gamerAnswer = prompt('Your answer: ');
//     nextOne = utility.verificationOfResults(resultGame, toBool[gamerAnswer]);
//     i += 1;
//     if (i === 3 && nextOne) {
//       console.log('You WIN!');
//     }
//   }
// }

module.exports = { definitionOfAnEvenNumber };
