import commonGame from '../index.js';
import generateNumberOfRange from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeValue = (value) => {
  const limitIterator = Math.ceil(Math.sqrt(value));
  let startIterator = 2;

  if (limitIterator === startIterator) {
    return false;
  }

  while (startIterator < limitIterator && value % startIterator !== 0) {
    startIterator += 1;
  }

  return startIterator === limitIterator;
};

const createGameInfo = () => {
  const question = generateNumberOfRange(1, 100);

  const answer = isPrimeValue(question) ? 'yes' : 'no';

  return [answer, question];
};

const getPrimeGameAnswers = () => commonGame(rule, createGameInfo);

export default getPrimeGameAnswers;
