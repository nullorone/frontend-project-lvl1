import commonGame from '../index.js';
import generateNumberOfRange from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeValue = (value) => {
  const limitIterator = Math.floor(Math.sqrt(value));

  if (value <= 1) {
    return false;
  }

  for (let i = 2; i <= limitIterator; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

const createGameInfo = () => {
  const question = generateNumberOfRange(1, 100);

  const answer = isPrimeValue(question) ? 'yes' : 'no';

  return [answer, question];
};

const getPrimeGameAnswers = () => commonGame(rule, createGameInfo);

export default getPrimeGameAnswers;
