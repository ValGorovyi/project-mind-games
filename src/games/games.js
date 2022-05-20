const prompt = require('prompt-sync')({ sigint: true });

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function addition() {
  const n1 = randomInteger(0, 20);
  const n2 = randomInteger(0, 20);
  console.log(`${n1} + ${n2}`);
  return n1 + n2;
}
function subtraction() {
  console.log('Question:');
  const n1 = randomInteger(0, 25);
  const n2 = randomInteger(0, 25);
  console.log(`${n1} - ${n2}`);
  return n1 - n2;
}
function multiplication() {
  console.log('Question:');
  const n1 = randomInteger(1, 5);
  const n2 = randomInteger(1, 7);
  console.log(`${n1} * ${n2}`);
  return n1 * n2;
}
function audit(result, version) {
  if (Number(version) !== result) {
    console.log('Game over');
    return false;
  }
  console.log('Correct!');
  return true;
}
function calculator() {
  let nextOne = true;
  console.log('Question:');
  // let n1 = randomInteger(0, 20);
  // let n2 = randomInteger(0, 20);
  // console.log(n1 + " + " + n2);
  const resultAdd = addition();
  const gamerAnswerAdd = prompt('Your answer: ');
  nextOne = audit(resultAdd, gamerAnswerAdd, nextOne);
  if (nextOne) {
    const resultSubtr = subtraction(nextOne);
    const gamerAnswerSubtr = prompt('Your answer: ');
    nextOne = audit(resultSubtr, gamerAnswerSubtr, nextOne);
    if (nextOne) {
      const resultMult = multiplication();
      const gamerAnswerMult = prompt('Your answer ');
      nextOne = audit(resultMult, gamerAnswerMult, nextOne);
      if (nextOne) {
        console.log('You win!');
      }
    }
  }
  // if (Number(gamerAnswer) !== resultAdd) {
  //   console.log("Game over");
  //   return;
  // } else {
  //   console.log("Correct!");
  //   subtraction()
  // }
}

module.exports = { calculator };
