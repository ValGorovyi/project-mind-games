const prompt = require('prompt-sync')({ sigint: true });

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function addition() {
  const n1 = randomInteger(0, 20);
  const n2 = randomInteger(0, 20);
  console.log(`Question: ${n1} + ${n2}`);
  return n1 + n2;
}
function subtraction() {
  const n1 = randomInteger(0, 25);
  const n2 = randomInteger(0, 25);
  console.log(`Question: ${n1} - ${n2}`);
  return n1 - n2;
}
function multiplication() {
  const n1 = randomInteger(1, 5);
  const n2 = randomInteger(1, 7);
  console.log(`Question: ${n1} * ${n2}`);
  return n1 * n2;
}
function division() {
  const n1 = randomInteger(1, 5);
  const n2 = randomInteger(1, 7);
  const product = n1 * n2;
  console.log(`Question: ${product} \\ ${n2}`);
  return n1;
}
function audit(result, version) {
  if (Number(version) !== result) {
    console.log('Game over');
    return false;
  }
  console.log('Correct!');
  return true;
}
const mathQuestion = {
  1: addition,
  2: subtraction,
  3: multiplication,
  4: division,
};
function calculator() {
  let nextOne = true;
  let i = 0;
  while (i < 3) {
    if (!nextOne) {
      break;
    }
    const nextQuestion = randomInteger(1, 4);
    const resultGame = mathQuestion[nextQuestion]();
    const gamerAnswer = prompt('Your answer: ');
    nextOne = audit(resultGame, gamerAnswer);
    i += 1;
    if (i === 3 && nextOne) {
      console.log('You WIN!');
    }
  }
}

// \\//progression

module.exports = { calculator };
