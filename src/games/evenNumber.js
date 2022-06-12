const utility = require('./utility');

function definitionOfAnEvenNumber() {
  const number = utility.randomInteger();
  console.log(`${number} is even? (true or false / + or -)`);
  return !(number % 2);
}

module.exports = { definitionOfAnEvenNumber };
