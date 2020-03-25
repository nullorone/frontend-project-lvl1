import commonGame from '../index.js';
import generateNumberOfRange from '../utils/utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberLimit = {
  min: 0,
  max: 100,
};

const checkPrimeValue = (value) => {
  const limitIterator = Math.floor(Math.sqrt(value));
  let startIterator = 2;

  while (startIterator < limitIterator && value % startIterator !== 0) {
    startIterator += 1;
  }

  return startIterator === limitIterator;
};

const question = () => generateNumberOfRange(numberLimit.min, numberLimit.max);

const answer = (gameQuestion) => (checkPrimeValue(gameQuestion) ? 'yes' : 'no');

const textQuestion = (gameQuestion) => gameQuestion;

const getPrimeGameAnswers = () => commonGame(rule, question, answer, textQuestion);

export default getPrimeGameAnswers;
