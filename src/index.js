const prompt = require('prompt-sync')({ sigint: true });
const games = require('./games/games');

const options = {
  calculator: games.calculator,
  1: games.calculator,
};
let name;
console.log("Welcome to mind games!");

// let readline = require('readline');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: '>>'
// });

// console.log('Say your name');

// rl.prompt();
// rl.on('line', (input) => {
//   name = input
//   rl.close();
//   console.log('Hello, ' + name);
// });

function sayName() {
  console.log("Say your name");

  name = prompt("What is your name ? ");
  // let name = await rl.prompt();
  if (name !== "") {
    console.log("Hello, " + name + "!");
  } else {
    sayName();
  }
  // rl.on("line", (input) => {
  //   name = input;
  //   rl.close();
  //   name === "" ? sayName() : console.log("Hello " + name);
  // });
}
sayName();

console.log("You are offered a choice of several games. Choose one of them");
console.log(`Games:
  >.calculator(1),
  >.progression(2),
  >.definition of an even number(3),
  >.determining the largest divisor(4),
  >.prime number definition(5).`);

function choise() {
  console.log("Enter the name of the game or its number in brackets ()");
  game = prompt(">>");
  console.log(game);
  options[game]();
}
choise();
end();
function end() {
  if (name !== "") {
    console.log("end");
  }
}
