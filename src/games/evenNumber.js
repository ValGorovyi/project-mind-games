const utility = require('./utility');

function definitionOfAnEvenNumber() {
  const number = utility.randomInteger();
  console.log(`${number} is event? (true or false / + or -)`);
  return !(number % 2);
}

module.exports = { definitionOfAnEvenNumber };
