type = 'module'
const prompt = require("prompt-sync")({ sigint: true });
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function addition() {
  let n1 = randomInteger(0, 20);
  let n2 = randomInteger(0, 20);
  console.log(n1 + " + " + n2);
  return n1+n2
}
function subtraction() {
  let n1 = randomInteger(0, 25);
  let n2 = randomInteger(0, 25);
  console.log(n1 + " - " + n2);
  return n1-n2
}
function audit(result, version){
  if (Number(version) !== result) {
    console.log("Game over");
    return;
  } else {
    console.log("Correct!");
  }
}
function calculator() {
  console.log("Question:");
  // let n1 = randomInteger(0, 20);
  // let n2 = randomInteger(0, 20);
  // console.log(n1 + " + " + n2);
  let resultAdd = addition()
  let gamerAnswer = prompt("Your answer: ");
  // if (Number(gamerAnswer) !== resultAdd) {
  //   console.log("Game over");
  //   return;
  // } else {
  //   console.log("Correct!");
  //   subtraction()
  // }
  audit(resultAdd, gamerAnswer)

}
module.exports = {calculator}