import generateNumberOfRange from '../utils/utils.js';
import commonGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberLimit = {
  min: 0,
  max: 100,
};

// Return true if number even
const checkEven = (number) => number % 2 === 0;

const question = () => generateNumberOfRange(numberLimit.min, numberLimit.max);

const answer = (gameQuestion) => (checkEven(gameQuestion) ? 'yes' : 'no');

const textQuestion = (gameQuestion) => gameQuestion.toString();

const getEvenGameAnswers = () => commonGame(rule, question, answer, textQuestion);

export default getEvenGameAnswers;
