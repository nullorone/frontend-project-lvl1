import {
  generateNumber,
  commonGame,
} from '../index.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeValue = (value) => {
  const limitIterator = Math.floor(Math.sqrt(value));
  let startIterator = 2;

  while (startIterator < limitIterator && value % startIterator !== 0) {
    startIterator += 1;
  }

  return startIterator === limitIterator;
};

const question = () => generateNumber();

const answer = (gameQuestion) => (checkPrimeValue(gameQuestion) ? 'yes' : 'no');

const textQuestion = (gameQuestion) => gameQuestion;

const getPrimeGameAnswers = (userName) => commonGame(
  userName,
  RULE,
  question,
  answer,
  textQuestion,
);

export default getPrimeGameAnswers;