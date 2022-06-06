const prompt = require('prompt-sync')({ sigint: true });

function randomInteger(min = 1, max = 100) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function checkTheResult(correctAnswer, playerVersion) {
  if (playerVersion !== correctAnswer) {
    console.log('Game over');
    return false;
  }
  console.log('Correct!');
  return true;
}
function startTheGame(functionPerformed, debug) {
  let nextOne = true;
  let numberOfVictories = 3;
  while (numberOfVictories) {
    if (!nextOne) {
      break;
    }
    const resultGame = functionPerformed();
    if (debug) {
      console.log(`Answer - ${resultGame}`);
    }
    const gamerAnswer = prompt('Your answer: ');
    if (functionPerformed.name === 'definitionOfAnEvenNumber' || functionPerformed.name === 'primeNumberDefinition') {
      const isKeysToBoolean = {
        false: false,
        '-': false,
        true: true,
        '+': true,
      };
      nextOne = checkTheResult(resultGame, isKeysToBoolean[gamerAnswer]);
    } else {
      nextOne = checkTheResult(Number(resultGame), Number(gamerAnswer));
    }
    numberOfVictories -= 1;
    if (!numberOfVictories && nextOne) {
      console.log('You WIN!');
    }
  }
}

module.exports = { randomInteger, startTheGame };
