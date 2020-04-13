import getGameData from '../index.js';
import generateNumberOfRange from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value <= 1) {
    return false;
  }

  const maxDivider = Math.floor(Math.sqrt(value));

  for (let i = 2; i <= maxDivider; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAnswer = () => {
  const question = generateNumberOfRange(1, 100);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [answer, question];
};

const beginPrimeGame = () => getGameData(rule, getQuestionAnswer);

export default beginPrimeGame;
