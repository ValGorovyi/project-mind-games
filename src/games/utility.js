const prompt = require('prompt-sync')({ sigint: true });

function randomInteger(min = 1, max = 100) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function verificationOfResults(correctAnswer, playerVersion) {
  if (playerVersion !== correctAnswer) {
    console.log('Game over');
    return false;
  }
  console.log('Correct!');
  return true;
}
function gameProcess(functionPerformed, debug) {
  let nextOne = true;
  const limit = 3;
  let i = 0;
  while (i < limit) {
    if (!nextOne) {
      break;
    }
    const resultGame = functionPerformed();
    if (debug) {
      console.log(`Answer - ${resultGame}`);
    }
    // console.log(resultGame);
    const gamerAnswer = prompt('Your answer: ');
    if (functionPerformed.name === 'definitionOfAnEvenNumber' || functionPerformed.name === 'primeNumberDefinition') {
      const toBool = {
        false: false,
        '-': false,
        true: true,
        '+': true,
      };
      nextOne = verificationOfResults(resultGame, toBool[gamerAnswer]);
    } else {
      nextOne = verificationOfResults(Number(resultGame), Number(gamerAnswer));
    }
    i += 1;
    if (i === 3 && nextOne) {
      console.log('You WIN!');
    }
  }
}

module.exports = { randomInteger, verificationOfResults, gameProcess };
