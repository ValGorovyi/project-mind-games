const utility = require('./utility');

function calculator() {
  const symbols = {
    1: '+',
    2: '-',
    3: '/',
    4: '*',
  };
  const currentSymbol = symbols[utility.randomInteger(1, 4)];
  const n1 = utility.randomInteger();
  const n2 = utility.randomInteger();
  console.log(`Question: ${n1} ${currentSymbol} ${n2}`);
  // eslint-disable-next-line no-eval
  return eval(`${n1} ${currentSymbol} ${n2}`).toFixed(1);
}

module.exports = { calculator };
