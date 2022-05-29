function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function audit(result, version) {
  if (version !== result) {
    console.log('Game over');
    return false;
  }
  console.log('Correct!');
  return true;
}

module.exports = { randomInteger, audit };
