import readlineSync from 'readline-sync';
import commonGame from '../index.js';
import { generateNumber } from '../utils/utils.js';

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

console.log('Welcome to the Brain Games!\n');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

const getPrimeGameAnswers = () => commonGame(name, RULE, question, answer, textQuestion);

export default getPrimeGameAnswers;
