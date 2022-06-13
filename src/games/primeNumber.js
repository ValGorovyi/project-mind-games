const utility = require('./utility');

function primeNumberDefinition() {
  const n1 = utility.randomInteger();
  const sqrtFromN1 = Math.sqrt(n1);
  console.log(`Is ${n1} a prime number? (true or false / + or -)`);
  for (let i = 2; i <= sqrtFromN1; i += 1) {
    if (n1 % i === 0 && i !== 1) {
      return false;
    }
  }
  return n1 > 1;
}

module.exports = { primeNumberDefinition };
